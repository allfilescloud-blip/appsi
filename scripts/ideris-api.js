// Configurações da API Ideris (será preenchida pelo GitHub Actions)
const PRIVATE_KEY = "IDERIS_PRIVATE_KEY";
const AUTH_URL = "https://apiv3.ideris.com.br/login";
const MARKET_URL = "https://apiv3.ideris.com.br/settings/marketplace";
const ORDERS_URL = "https://apiv3.ideris.com.br/order/search?statusId=1007";
const BASE_SKU_URL = "https://apiv3.ideris.com.br/sku/search";
const UPDATE_URL = "https://apiv3.ideris.com.br/sku/stock";
let jwtToken = null;
let marketplaceMap = {};
let renewTimerEstoque = null;
let renewTimerVerificacao = null;
const RENEW_MS = (7 * 60 + 48) * 60 * 1000; // 7 horas e 48 minutos

// Função para autenticar na API Ideris
async function loginIderis() {
    try {
        const resp = await fetch(AUTH_URL, {
            method: "POST",
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${PRIVATE_KEY}`
            },
            body: `"${PRIVATE_KEY}"`
        });
        const raw = await resp.text();
        if (!resp.ok) throw new Error(`Falha na autenticação: ${resp.status} - ${raw}`);

        let token = null;
        try {
            const parsed = JSON.parse(raw);
            if (typeof parsed === "string") token = parsed;
            else if (parsed && typeof parsed === "object") token = parsed.token || parsed.jwt;
        } catch {
            const cleaned = raw.trim().replace(/^"|"$/g, "");
            if (/^[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+$/.test(cleaned)) token = cleaned;
        }

        if (!token) throw new Error("Token JWT não encontrado na resposta.");

        jwtToken = token;
        return token;
    } catch (err) {
        console.error("Erro na autenticação Ideris:", err);
        throw err;
    }
}

// Função para autenticar na API Ideris (para verificação)
async function loginIderisVerificacao() {
    verificacaoStatus.textContent = "Autenticando no Hub Ideris...";
    try {
        const token = await loginIderis();
        scheduleRenewVerificacao();
        verificacaoStatus.textContent = "Autenticado com sucesso! Pronto para consultas.";
        btnBuscarVerificacao.disabled = false;
        verificacaoPedido.focus();
        return token;
    } catch (err) {
        verificacaoStatus.textContent = "Erro: " + err.message;
        console.error(err);
        throw err;
    }
}

// Função para autenticar na API Ideris (para estoque)
async function loginIderisEstoque() {
    estoqueStatus.textContent = "Autenticando no Hub Ideris...";
    try {
        const token = await loginIderis();
        scheduleRenewEstoque();
        estoqueStatus.textContent = "Autenticado com sucesso! Pronto para consultas.";
        btnBuscarEstoque.disabled = false;
        skuInput.focus();
        return token;
    } catch (err) {
        estoqueStatus.textContent = "Erro: " + err.message;
        console.error(err);
        throw err;
    }
}

// Função para agendar renovação do token (verificação)
function scheduleRenewVerificacao() {
    if (renewTimerVerificacao) clearTimeout(renewTimerVerificacao);
    renewTimerVerificacao = setTimeout(loginIderisVerificacao, RENEW_MS);
}

// Função para agendar renovação do token (estoque)
function scheduleRenewEstoque() {
    if (renewTimerEstoque) clearTimeout(renewTimerEstoque);
    renewTimerEstoque = setTimeout(loginIderisEstoque, RENEW_MS);
}

// Função para buscar dados da API Ideris com tratamento de erros
async function safeFetchJSON(url) {
    try {
        const resp = await fetch(url, {
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            }
        });
        const text = await resp.text();
        if (!text) return { total: 0, obj: [] };
        try {
            return JSON.parse(text);
        } catch {
            console.warn("Resposta JSON inválida:", text);
            return { total: 0, obj: [] };
        }
    } catch (err) {
        console.error("Erro na requisição:", err);
        return { total: 0, obj: [] };
    }
}

// Função para carregar marketplaces
async function loadMarketplaces() {
    try {
        const data = await safeFetchJSON(MARKET_URL);
        if (!Array.isArray(data.obj)) throw new Error("Formato inesperado.");
        marketplaceMap = {};
        data.obj.forEach(m => {
            marketplaceMap[m.id] = m.descricao || m.name || `Marketplace ${m.id}`;
        });
        return marketplaceMap;
    } catch (err) {
        console.error("Erro ao carregar marketplaces:", err);
        throw err;
    }
}

// Função para buscar total de pedidos
async function fetchTotal(url) {
    const data = await safeFetchJSON(url);
    return data.total || 0;
}

// Função para carregar totais de pedidos
async function loadTotals() {
    try {
        iderisGrid.innerHTML = "";

        // Carregar marketplaces se necessário
        if (Object.keys(marketplaceMap).length === 0) {
            await loadMarketplaces();
        }

        // Totais por marketplace
        let lista = [];
        for (const [id, descricao] of Object.entries(marketplaceMap)) {
            const total = await fetchTotal(`${ORDERS_URL}&authenticationId=${id}`);
            if (total > 0) {
                lista.push({ id, descricao, total });
            }
        }

        lista.sort((a,b)=>b.total-a.total);
        const maxTotal = lista.length ? lista[0].total : 0;

        const numCols = Math.min(lista.length, 5) || 1; // definir número de colunas visíveis

        // Define colunas dinamicamente no grid
        iderisGrid.style.gridTemplateColumns = `repeat(${numCols}, minmax(220px, 1fr))`;

        // Total Geral ocupa a mesma largura combinada
        const totalGeral = await fetchTotal(ORDERS_URL);
        const totalCard = document.createElement("div");
        totalCard.className = "ideris-card";
        totalCard.style.gridColumn = `span ${numCols}`;
        totalCard.innerHTML = `
            <h3>Total Geral</h3>
            <div class="ideris-count ideris-high">${totalGeral}</div>
        `;
        iderisGrid.appendChild(totalCard);

        // Renderiza marketplaces
        lista.forEach(m=>{
            let level="ideris-low";
            if(m.total>maxTotal*0.66) level="ideris-high";
            else if(m.total>maxTotal*0.33) level="ideris-medium";

            const card = document.createElement("div");
            card.className="ideris-card";
            card.innerHTML=`
                <h3>${m.descricao}</h3>
                <div class="ideris-count ${level}">${m.total}</div>
            `;
            iderisGrid.appendChild(card);
        });

        setIderisStatus("Atualizado em " + new Date().toLocaleTimeString());
    } catch(err) {
        setIderisStatus("Erro ao carregar totais: " + err.message);
        console.error(err);
    }
}

// Função para definir status da API Ideris
function setIderisStatus(msg) {
    iderisStatus.textContent = msg;
}

// Função para renderizar as linhas da tabela de estoque
function renderRowsEstoque(items) {
    const tbody = skuTable.querySelector("tbody");
    tbody.innerHTML = "";

    // Ordenar por SKU em ordem crescente (numérico-friendly)
    items.sort((a,b) => String(a.sku).localeCompare(String(b.sku), undefined, {numeric:true, sensitivity:'base'}));

    items.forEach(item => {
        const sku = item.sku ?? "—";
        // Soma dos estoques (se vierem múltiplos warehouses)
        const stockTotal = Array.isArray(item.stocks)
            ? item.stocks.reduce((sum, s) => sum + (Number(s?.currentStock) || 0), 0)
            : 0;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td data-label="SKU">${sku}</td>
            <td data-label="Estoque Atual" class="stock">${stockTotal}</td>
            <td data-label="Atualizar"><input class="qty-input" type="number" min="0" inputmode="numeric" placeholder="Novo" /></td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para buscar SKUs
async function buscarSKUsEstoque() {
    if (!jwtToken) {
        estoqueStatus.textContent = "Token inválido. Reautenticando...";
        await loginIderisEstoque();
        if (!jwtToken) return;
    }

    const rawInput = skuInput.value.trim();
    if (!rawInput) {
        estoqueStatus.textContent = "Informe pelo menos um SKU (separados por vírgula).";
        return;
    }

    // Normaliza, remove vazios e duplicados mantendo ordem
    const skuList = Array.from(new Set(
        rawInput.split(",").map(s => s.trim()).filter(Boolean)
    ));

    // Monta query sku=...&sku=...
    const params = skuList.map(s => `sku=${encodeURIComponent(s)}`).join("&");
    const url = `${BASE_SKU_URL}?${params}`;

    estoqueStatus.textContent = "Consultando SKUs...";
    try {
        const resp = await fetch(url, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            }
        });
        const raw = await resp.text();

        let list = [];
        try {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.obj)) list = parsed.obj;
            else estoqueStatus.textContent = "Resposta inválida ou sem dados.";
        } catch {
            estoqueStatus.textContent = "Resposta inválida.";
        }

        renderRowsEstoque(list);

        // Persistir última pesquisa (campo e label)
        localStorage.setItem("ideris:lastSearch", rawInput);
        skuInput.value = rawInput;
        lastSearch.textContent = "Última pesquisa: " + rawInput;

        estoqueStatus.textContent = resp.ok ? "Consulta concluída." : `Falha na consulta (${resp.status}).`;
    } catch(err) {
        estoqueStatus.textContent = "Erro: " + err.message;
    }
}

// Função para atualizar estoques
async function atualizarEstoques() {
    if (!jwtToken) {
        estoqueStatus.textContent = "Token inválido. Reautenticando...";
        await loginIderisEstoque();
        if (!jwtToken) return;
    }

    const rows = skuTable.querySelectorAll("tbody tr");
    if (!rows.length) {
        estoqueStatus.textContent = "Não há itens na lista para atualizar.";
        return;
    }

    estoqueStatus.textContent = "Atualizando estoques...";
    let okCount = 0;

    for (const row of rows) {
        const sku = row.cells[0].innerText.trim();
        const input = row.querySelector(".qty-input");
        const val = input.value.trim();

        if (val === "" || isNaN(val)) continue;

        const payload = { sku, currentStock: parseInt(val, 10) };
        try {
            const resp = await fetch(UPDATE_URL, {
                method: "PUT",
                headers: {
                    "accept": "*/*",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify(payload)
            });

            if (resp.ok) {
                okCount++;
                // Atualiza imediatamente o estoque exibido
                row.querySelector(".stock").textContent = String(payload.currentStock);
                input.value = "";
            } else {
                const t = await resp.text();
                console.error(`Falha ao atualizar ${sku}: ${resp.status} - ${t}`);
            }
        } catch(err) {
            console.error(`Erro ao atualizar ${sku}:`, err);
        }
    }

    estoqueStatus.textContent = `${okCount} SKU(s) atualizados com sucesso.`;
}

// Função para buscar pedido na verificação
async function buscarPedidoVerificacao() {
    const codigo = verificacaoPedido.value.trim();
    if (!codigo) {
        verificacaoStatus.textContent = "Informe o código do pedido.";
        verificacaoPedido.focus();
        return;
    }
    if (!jwtToken) {
        verificacaoStatus.textContent = "Token JWT inválido. Tentando autenticar novamente...";
        await loginIderisVerificacao();
        if (!jwtToken) return;
    }

    verificacaoStatus.textContent = `Consultando pedido ${codigo}...`;
    try {
        const url = `https://apiv3.ideris.com.br/order/${encodeURIComponent(codigo)}`;
        const resp = await fetch(url, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            }
        });

        const raw = await resp.text();
        let statusDescription = "—";
        let deliveryCode = "—";
        try {
            const parsed = JSON.parse(raw);
            if (parsed && parsed.obj) {
                statusDescription = parsed.obj.statusDescription || "—";
                deliveryCode = parsed.obj.deliveryCode || "—";
            }
        } catch {
            statusDescription = "Resposta inválida";
        }

        const statusEl = document.querySelector(".verificacao-statusDesc");
        document.querySelector(".verificacao-codigo").textContent = codigo;
        statusEl.textContent = statusDescription;
        statusEl.className = "verificacao-statusDesc" + (statusDescription === "Pagamento cancelado" ? " cancelado" : "");

        atualizarListaVerificacao(codigo, statusDescription, deliveryCode);

        verificacaoStatus.textContent = resp.ok ? "Consulta realizada com sucesso." : `Falha na consulta (${resp.status}).`;

        verificacaoPedido.value = "";
        verificacaoPedido.focus();

    } catch (err) {
        verificacaoStatus.textContent = "Erro: " + err.message;
        verificacaoPedido.focus();
    }
}

// Variável para contar os itens verificados
let contadorVerificacao = 0;

// Função para atualizar lista de pedidos verificados
function atualizarListaVerificacao(codigo, status, deliveryCode) {
    const duplicadoCodigo = pedidosVerificados.some(p => p.codigo === codigo);
    const duplicadoDelivery = deliveryCode && pedidosVerificados.some(p => p.deliveryCode === deliveryCode);

    pedidosVerificados.push({ codigo, status, deliveryCode });
    
    // Incrementar o contador
    contadorVerificacao++;

    const li = document.createElement("li");
    if (duplicadoDelivery) {
        li.className = "verificacao-duplicado-delivery";
    } else if (duplicadoCodigo) {
        li.className = "verificacao-duplicado";
    }

    li.innerHTML = `
        <span class="item-number">${contadorVerificacao}</span>
        <span>
            <strong>${codigo}</strong>
            <span class="verificacao-delivery">(${deliveryCode || "—"})</span>
        </span>
        <span class="status${status === "Pagamento cancelado" ? " cancelado" : ""}">${status}</span>
    `;
    verificacaoListaLidos.insertBefore(li, verificacaoListaLidos.firstChild);
}

// Função para limpar verificação
function limparVerificacao() {
    verificacaoPedido.value = "";
    document.querySelector(".verificacao-codigo").textContent = "—";
    document.querySelector(".verificacao-statusDesc").textContent = "—";
    document.querySelector(".verificacao-statusDesc").className = "verificacao-statusDesc";
    verificacaoStatus.textContent = "Pronto para consultas";
    verificacaoPedido.focus();
    
    // Limpar lista de pedidos e array de controle
    pedidosVerificados = [];
    verificacaoListaLidos.innerHTML = "";
    
    // Reiniciar o contador
    contadorVerificacao = 0;
}

// Função para limpar lista de estoque
function limparListaEstoque() {
    skuTable.querySelector("tbody").innerHTML = "";
    estoqueStatus.textContent = "Lista limpa.";
}
