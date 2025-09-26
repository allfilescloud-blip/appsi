// Elementos da DOM
const header = document.getElementById('header');
const paginaLogin = document.getElementById('paginaLogin');
const paginaDashboard = document.getElementById('paginaDashboard');
const paginaListagem = document.getElementById('paginaListagem');
const paginaFormulario = document.getElementById('paginaFormulario');
const paginaDetalhes = document.getElementById('paginaDetalhes');
const paginaVerificacao = document.getElementById('paginaVerificacao');
const paginaConfiguracoes = document.getElementById('paginaConfiguracoes');
const paginaEstoque = document.getElementById('paginaEstoque');
const btnNavDashboard = document.getElementById('btnNavDashboard');
const btnNavListagem = document.getElementById('btnNavListagem');
const btnNovoChamado = document.getElementById('btnNovoChamado');
const btnVoltar = document.getElementById('btnVoltar');
const btnVoltarDetalhes = document.getElementById('btnVoltarDetalhes');
const btnVoltarVerificacao = document.getElementById('btnVoltarVerificacao');
const btnVoltarConfiguracoes = document.getElementById('btnVoltarConfiguracoes');
const btnVoltarEstoque = document.getElementById('btnVoltarEstoque');
const tabelaChamados = document.getElementById('tabelaChamados');
const formChamado = document.getElementById('formChamado');
const codigoControle = document.getElementById('codigoControle');
const tipoChamado = document.getElementById('tipoChamado');
const marketplaceGroup = document.getElementById('marketplaceGroup');
const marketplace = document.getElementById('marketplace');
const chatContainer = document.getElementById('chatContainer');
const btnAdicionarInteracao = document.getElementById('btnAdicionarInteracao');
const novaInteracao = document.getElementById('novaInteracao');
const btnFinalizarChamado = document.getElementById('btnFinalizarChamado');
const btnReabrirChamado = document.getElementById('btnReabrirChamado');
const inputBusca = document.getElementById('inputBusca');
const btnBuscar = document.getElementById('btnBuscar');
const btnLimparBusca = document.getElementById('btnLimparBusca');
const userMenu = document.getElementById('userMenu');
const userName = document.getElementById('userName');
const userInitials = document.getElementById('userInitials');
const dropdownMenu = document.getElementById('dropdownMenu');
const btnLogout = document.getElementById('btnLogout');
const btnConfiguracoes = document.getElementById('btnConfiguracoes');
const btnFazerLogin = document.getElementById('btnFazerLogin');
const btnCriarConta = document.getElementById('btnCriarConta');
const btnMostrarCadastro = document.getElementById('btnMostrarCadastro');
const btnVoltarLogin = document.getElementById('btnVoltarLogin');
const loginForm = document.getElementById('loginForm');
const signupSection = document.getElementById('signupSection');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const signupConfirmPassword = document.getElementById('signupConfirmPassword');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');
const responsavelField = document.getElementById('responsavel');
const pedidoField = document.getElementById('pedido');
const pedidoAlert = document.getElementById('pedidoAlert');
const tabs = document.querySelectorAll('.tab');
const badgeAbertos = document.getElementById('badgeAbertos');
const badgeFechados = document.getElementById('badgeFechados');
const loginOptions = document.getElementById('loginOptions');
const toastContainer = document.getElementById('toastContainer');
const filtroResponsavel = document.getElementById('filtroResponsavel');

// Elementos do Dashboard
const chamadosAbertosHoje = document.getElementById('chamadosAbertosHoje');
const chamadosSemana = document.getElementById('chamadosSemana');
const chamadosMes = document.getElementById('chamadosMes');
const userStats = document.getElementById('userStats');

// Novos elementos para filtros
const filtroTipo = document.getElementById('filtroTipo');
const filtroMarketplace = document.getElementById('filtroMarketplace');
const filtroStatus = document.getElementById('filtroStatus');
const btnAplicarFiltros = document.getElementById('btnAplicarFiltros');
const btnLimparFiltros = document.getElementById('btnLimparFiltros');

// Elementos para upload de arquivos
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const uploadStatus = document.getElementById('uploadStatus');
const uploadError = document.getElementById('uploadError');
const anexosContainer = document.getElementById('anexosContainer');
const anexosList = document.getElementById('anexosList');

// Elementos para API Ideris
const iderisStatus = document.getElementById('iderisStatus');
const iderisGrid = document.getElementById('iderisGrid');
const btnAtualizarIderis = document.getElementById('btnAtualizarIderis');

// Novos elementos para upload em interações
const uploadAreaInteracao = document.getElementById('uploadAreaInteracao');
const fileInputInteracao = document.getElementById('fileInputInteracao');
const fileListInteracao = document.getElementById('fileListInteracao');
const uploadStatusInteracao = document.getElementById('uploadStatusInteracao');
const uploadErrorInteracao = document.getElementById('uploadErrorInteracao');

// Novos elementos para o menu Ferramentas
const toolsBtn = document.querySelector('.tools-btn');
const toolsSubmenu = document.querySelector('.tools-submenu');
const btnEstoque = document.getElementById('btnEstoque');
const btnVerificacao = document.getElementById('btnVerificacao');

// Elementos para a página de verificação
const verificacaoPedido = document.getElementById('verificacaoPedido');
const btnBuscarVerificacao = document.getElementById('btnBuscarVerificacao');
const btnLimparVerificacao = document.getElementById('btnLimparVerificacao');
const verificacaoStatus = document.getElementById('verificacaoStatus');
const btnAtualizarVerificacao = document.getElementById('btnAtualizarVerificacao');
const verificacaoListaLidos = document.getElementById('verificacaoListaLidos');

// Elementos para a página de configurações
const toggleOcultarCadastro = document.getElementById('toggleOcultarCadastro');
const configMensagemContato = document.getElementById('configMensagemContato');

// Elementos para a página de estoque
const skuInput = document.getElementById('skuInput');
const btnBuscarEstoque = document.getElementById('btnBuscarEstoque');
const btnLimparEstoque = document.getElementById('btnLimparEstoque');
const btnAtualizarEstoques = document.getElementById('btnAtualizarEstoques');
const btnAtualizarEstoque = document.getElementById('btnAtualizarEstoque');
const estoqueStatus = document.getElementById('estoqueStatus');
const lastSearch = document.getElementById('lastSearch');
const skuTable = document.getElementById('skuTable');

// Variáveis globais
let chamadoAtual = null;
let user = null;
let userData = null;
let unsubscribeChamados = null;
let todosChamados = [];
let abaAtiva = 'abertos';
let meusChamadosCount = 0;
let listaUsuarios = [];
let arquivosSelecionados = [];
let totalTamanhoArquivos = 0;
let arquivosInteracao = [];
let totalTamanhoArquivosInteracao = 0;
let responsavelAlterado = false;
let verificarApenasDuplicados = false;

// Variáveis para verificação de pedidos
let pedidosVerificados = [];

// Tipos que exigem marketplace
const tiposComMarketplace = ['Devolução', 'Reembolso', 'Fraude', 'Contatar MarketPlace'];

// Status para cada aba
const statusAbertos = ['Aberto', 'Pendente', 'Revisão'];
const statusFechados = ['Fechado'];

// Limites de upload
const MAX_ARQUIVOS = 3;
const MAX_TAMANHO_TOTAL = 5 * 1024 * 1024; // 5MB em bytes

// Configuração global para ocultar cadastro
let ocultarCadastro = localStorage.getItem('ocultarCadastro') === 'true';

// Função para exibir notificações toast
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="background:none; border:none; color:white; cursor:pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;
    toastContainer.appendChild(toast);
    
    // Remover automaticamente após 3 segundos
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 3000);
}

// Função para alternar entre páginas
function mostrarPagina(pagina) {
    // Esconder todas as páginas
    paginaDashboard.classList.add('hidden');
    paginaListagem.classList.add('hidden');
    paginaFormulario.classList.add('hidden');
    paginaDetalhes.classList.add('hidden');
    paginaVerificacao.classList.add('hidden');
    paginaConfiguracoes.classList.add('hidden');
    paginaEstoque.classList.add('hidden');
    
    // Mostrar apenas a página solicitada
    pagina.classList.remove('hidden');
    
    // Atualizar navegação
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    if (pagina === paginaDashboard) {
        btnNavDashboard.classList.add('active');
        // Atualizar dados Ideris quando acessar o dashboard
        if (user && jwtToken) {
            loadTotals();
        }
    } else if (pagina === paginaListagem) {
        btnNavListagem.classList.add('active');
    }
}

// Função para adicionar usuário à lista de usuários
async function adicionarUsuarioALista(uid, nome) {
    try {
        // Adicionar/atualizar usuário na coleção principal
        await db.collection('usuarios').doc(uid).set({
            nome: nome,
            email: user.email,
            dataCriacao: new Date().toISOString()
        });
        
        // Atualizar a lista de nomes
        await atualizarListaUsuarios();
        
        console.log('Usuário adicionado à lista:', nome);
    } catch (error) {
        console.error('Erro ao adicionar usuário à lista:', error);
    }
}

// Função para atualizar a lista de usuários
async function atualizarListaUsuarios() {
    try {
        // Buscar todos os usuários
        const snapshot = await db.collection('usuarios').get();
        const usuarios = [];
        
        snapshot.forEach(doc => {
            const userData = doc.data();
            if (userData.nome && !usuarios.includes(userData.nome)) {
                usuarios.push(userData.nome);
            }
        });
        
        // Ordenar alfabeticamente
        usuarios.sort();
        listaUsuarios = usuarios;
        
        // Atualizar os selects
        atualizarSelectUsuarios();
        
        return usuarios;
    } catch (error) {
        console.error('Erro ao atualizar lista de usuários:', error);
        showToast('Erro ao carregar lista de usuários', 'error');
        return [];
    }
}

// Função para atualizar os selects de usuários
function atualizarSelectUsuarios() {
    // Atualizar select do formulário
    responsavelField.innerHTML = '<option value="">Selecione um responsável</option>';
    listaUsuarios.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario;
        option.textContent = usuario;
        responsavelField.appendChild(option);
    });
    
    // Pre-selecionar o usuário atual se estiver na lista
    if (userData && userData.nome) {
        const userOption = Array.from(responsavelField.options).find(opt => opt.value === userData.nome);
        if (userOption) {
            responsavelField.value = userData.nome;
        }
    }
    
    // Atualizar select do filtro
    filtroResponsavel.innerHTML = '<option value="">Todos os responsáveis</option>';
    listaUsuarios.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario;
        option.textContent = usuario;
        filtroResponsavel.appendChild(option);
    });
}

// Função para calcular estatísticas do dashboard
function calcularEstatisticas() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    
    // Chamados em aberto hoje (independente de quando foram abertos)
    const chamadosAbertosHojeCount = todosChamados.filter(chamado => {
        return statusAbertos.includes(chamado.status);
    }).length;
    
    // Chamados abertos no dia de hoje
    const chamadosAbertosDiaCount = todosChamados.filter(chamado => {
        const dataChamado = new Date(chamado.dataAbertura);
        return dataChamado >= hoje && dataChamado < amanha && statusAbertos.includes(chamado.status);
    }).length;
    
    // Chamados da semana (todos os status)
    const inicioSemana = new Date();
    inicioSemana.setDate(hoje.getDate() - hoje.getDay());
    inicioSemana.setHours(0, 0, 0, 0);
    
    const chamadosSemanaCount = todosChamados.filter(chamado => {
        const dataChamado = new Date(chamado.dataAbertura);
        return dataChamado >= inicioSemana;
    }).length;
    
    // Chamados do mês (todos os status)
    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    
    const chamadosMesCount = todosChamados.filter(chamado => {
        const dataChamado = new Date(chamado.dataAbertura);
        return dataChamado >= inicioMes;
    }).length;
    
    // Atualizar os valores no dashboard
    chamadosAbertosHoje.textContent = chamadosAbertosHojeCount;
    chamadosSemana.textContent = chamadosSemanaCount;
    chamadosMes.textContent = chamadosMesCount;
    
    // Calcular estatísticas por usuário (apenas chamados abertos)
    const estatisticasPorUsuario = {};
    
    todosChamados.forEach(chamado => {
        if (chamado.responsavel && statusAbertos.includes(chamado.status)) {
            if (!estatisticasPorUsuario[chamado.responsavel]) {
                estatisticasPorUsuario[chamado.responsavel] = 0;
            }
            estatisticasPorUsuario[chamado.responsavel]++;
        }
    });
    
    // Ordenar usuários por quantidade de chamados (decrescente)
    const usuariosOrdenados = Object.entries(estatisticasPorUsuario)
        .sort((a, b) => b[1] - a[1]);
    
    // Exibir estatísticas por usuário
    userStats.innerHTML = '';
    
    if (usuariosOrdenados.length === 0) {
        userStats.innerHTML = '<div class="loading">Nenhum dado disponível</div>';
        return;
    }
    
    usuariosOrdenados.forEach(([nome, quantidade]) => {
        const userStatItem = document.createElement('div');
        userStatItem.className = 'user-stat-item';
        
        // Adicionar tarja vermelha se tiver mais de 3 chamados
        const warningBadge = quantidade > 7 ? 
            `<div class="warning-badge">Muitos chamados!</div>` : '';
        
        userStatItem.innerHTML = `
            <div class="user-name">${nome}</div>
            <div class="count">${quantidade}</div>
            ${warningBadge}
        `;
        userStats.appendChild(userStatItem);
    });
}

// Gerar código sequencial
async function gerarCodigo() {
    try {
        // Buscar o último código no Firebase
        const snapshot = await db.collection('chamados')
            .orderBy('codigo', 'desc')
            .limit(1)
            .get();
        
        if (snapshot.empty) {
            return "CH0001";
        }
        
        let ultimoCodigo = "CH0000";
        snapshot.forEach(doc => {
            ultimoCodigo = doc.data().codigo;
        });
        
        const numero = parseInt(ultimoCodigo.substring(2)) + 1;
        return "CH" + String(numero).padStart(4, '0');
    } catch (error) {
        console.error("Erro ao gerar código:", error);
        // Fallback: gerar código localmente
        const snapshot = await db.collection('chamados').get();
        const numero = snapshot.size + 1;
        return "CH" + String(numero).padStart(4, '0');
    }
}

// Verificar if já existe chamado aberto para o pedido
async function verificarPedidoExistente(pedido) {
    if (!pedido) return false;
    
    try {
        const snapshot = await db.collection('chamados')
            .where('pedido', '==', pedido)
            .where('status', 'in', statusAbertos)
            .get();
        
        return !snapshot.empty;
    } catch (error) {
        console.error("Erro ao verificar pedido:", error);
        return false;
    }
}

// Funções para upload de arquivos
function formatarTamanho(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function atualizarListaArquivos() {
    fileList.innerHTML = '';
    uploadStatus.textContent = `${arquivosSelecionados.length} de ${MAX_ARQUIVOS} arquivos, ${formatarTamanho(totalTamanhoArquivos)} de ${formatarTamanho(MAX_TAMANHO_TOTAL)}`;
    
    if (arquivosSelecionados.length === 0) {
        uploadStatus.textContent = 'Nenhum arquivo selecionado';
        return;
    }
    
    arquivosSelecionados.forEach((arquivo, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-info">
                <i class="fas fa-file file-icon"></i>
                <div>
                    <div class="file-name">${arquivo.name}</div>
                    <div class="file-size">${formatarTamanho(arquivo.size)}</div>
                </div>
            </div>
            <button class="file-remove" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
        fileList.appendChild(fileItem);
    });
    
    // Adicionar eventos de remoção
    document.querySelectorAll('.file-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            removerArquivo(index);
        });
    });
}

function atualizarListaArquivosInteracao() {
    fileListInteracao.innerHTML = '';
    uploadStatusInteracao.textContent = `${arquivosInteracao.length} de ${MAX_ARQUIVOS} arquivos, ${formatarTamanho(totalTamanhoArquivosInteracao)} de ${formatarTamanho(MAX_TAMANHO_TOTAL)}`;
    
    if (arquivosInteracao.length === 0) {
        uploadStatusInteracao.textContent = 'Nenhum arquivo selecionado';
        return;
    }
    
    arquivosInteracao.forEach((arquivo, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-info">
                <i class="fas fa-file file-icon"></i>
                <div>
                    <div class="file-name">${arquivo.name}</div>
                    <div class="file-size">${formatarTamanho(arquivo.size)}</div>
                </div>
            </div>
            <button class="file-remove" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
        fileListInteracao.appendChild(fileItem);
    });
    
    // Adicionar eventos de remoção
    document.querySelectorAll('#fileListInteracao .file-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            removerArquivoInteracao(index);
        });
    });
}

function removerArquivo(index) {
    totalTamanhoArquivos -= arquivosSelecionados[index].size;
    arquivosSelecionados.splice(index, 1);
    atualizarListaArquivos();
    
    // Ocultar mensagem de erro ao remover arquivos
    const uploadErrorElement = document.getElementById('uploadError');
    if (uploadErrorElement) {
        uploadErrorElement.textContent = '';
        uploadErrorElement.style.display = 'none';
    }
}

function removerArquivoInteracao(index) {
    totalTamanhoArquivosInteracao -= arquivosInteracao[index].size;
    arquivosInteracao.splice(index, 1);
    atualizarListaArquivosInteracao();
    
    // Ocultar mensagem de erro ao remover arquivos
    const uploadErrorElement = document.getElementById('uploadErrorInteracao');
    if (uploadErrorElement) {
        uploadErrorElement.textContent = '';
        uploadErrorElement.style.display = 'none';
    }
}

function validarArquivos(arquivos, tipo = 'formulario') {
    const uploadErrorElement = tipo === 'formulario' ? 
        document.getElementById('uploadError') : 
        document.getElementById('uploadErrorInteracao');
    
    const uploadStatusElement = tipo === 'formulario' ? uploadStatus : uploadStatusInteracao;
    const totalAtual = tipo === 'formulario' ? totalTamanhoArquivos : totalTamanhoArquivosInteracao;
    const listaArquivos = tipo === 'formulario' ? arquivosSelecionados : arquivosInteracao;
    
    // Limpar e ocultar mensagens de erro
    if (uploadErrorElement) {
        uploadErrorElement.textContent = '';
        uploadErrorElement.style.display = 'none';
    }
    
    // Verificar número máximo de arquivos
    if (listaArquivos.length + arquivos.length > MAX_ARQUIVOS) {
        const mensagem = `Você pode adicionar no máximo ${MAX_ARQUIVOS} arquivos.`;
        if (uploadErrorElement) {
            uploadErrorElement.textContent = mensagem;
            uploadErrorElement.style.display = 'block'; // Mostrar apenas em caso de erro
        }
        showToast(mensagem, 'error');
        return false;
    }
    
    // Verificar tamanho total
    let novoTotal = totalAtual;
    for (const arquivo of arquivos) {
        novoTotal += arquivo.size;
    }
    
    if (novoTotal > MAX_TAMANHO_TOTAL) {
        const mensagem = `O tamanho total dos arquivos não pode exceder ${formatarTamanho(MAX_TAMANHO_TOTAL)}.`;
        if (uploadErrorElement) {
            uploadErrorElement.textContent = mensagem;
            uploadErrorElement.style.display = 'block'; // Mostrar apenas em caso de erro
        }
        showToast(mensagem, 'error');
        return false;
    }
    
    return true;
}

function adicionarArquivos(novosArquivos, tipo = 'formulario') {
    const uploadErrorElement = tipo === 'formulario' ? 
        document.getElementById('uploadError') : 
        document.getElementById('uploadErrorInteracao');
    
    if (!validarArquivos(novosArquivos, tipo)) {
        return;
    }
    
    if (tipo === 'formulario') {
        for (const arquivo of novosArquivos) {
            arquivosSelecionados.push(arquivo);
            totalTamanhoArquivos += arquivo.size;
        }
        atualizarListaArquivos();
        
        // Limpar e ocultar mensagem de erro se a adição foi bem-sucedida
        if (uploadErrorElement) {
            uploadErrorElement.textContent = '';
            uploadErrorElement.style.display = 'none';
        }
    } else {
        for (const arquivo of novosArquivos) {
            arquivosInteracao.push(arquivo);
            totalTamanhoArquivosInteracao += arquivo.size;
        }
        atualizarListaArquivosInteracao();
        
        // Limpar e ocultar mensagem de erro se a adição foi bem-sucedida
        if (uploadErrorElement) {
            uploadErrorElement.textContent = '';
            uploadErrorElement.style.display = 'none';
        }
    }
    
    showToast(`${novosArquivos.length} arquivo(s) adicionado(s) com sucesso!`, 'success');
}

async function fazerUploadAnexos(chamadoId, arquivos, tipo = 'chamado') {
    const anexos = [];
    
    for (const arquivo of arquivos) {
        try {
            // Criar referência no Storage
            const extensao = arquivo.name.split('.').pop();
            const nomeArquivo = `${chamadoId}/${tipo}_${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${extensao}`;
            const storageRef = storage.ref().child(`chamados/${nomeArquivo}`);
            
            // Fazer upload do arquivo
            const snapshot = await storageRef.put(arquivo);
            
            // Obter URL de download
            const downloadURL = await snapshot.ref.getDownloadURL();
            
            // Adicionar aos anexos
            anexos.push({
                nome: arquivo.name,
                tamanho: arquivo.size,
                url: downloadURL,
                caminho: nomeArquivo,
                tipo: tipo
            });
            
            showToast(`Arquivo "${arquivo.name}" enviado com sucesso!`, 'success');
        } catch (error) {
            console.error('Erro ao fazer upload do arquivo:', error);
            showToast(`Erro ao enviar "${arquivo.name}": ${error.message}`, 'error');
        }
    }
    
    return anexos;
}

async function carregarAnexos(chamadoId) {
    try {
        anexosList.innerHTML = '<div class="loading">Carregando anexos...</div>';
        
        // Buscar anexos no Firestore
        const doc = await db.collection('chamados').doc(chamadoId).get();
        if (!doc.exists) {
            anexosList.innerHTML = '<div class="loading">Nenhum anexo encontrado</div>';
            return;
        }
        
        const chamado = doc.data();
        const anexos = chamado.anexos || [];
        
        if (anexos.length === 0) {
            anexosList.innerHTML = '<div class="loading">Nenhum anexo encontrado</div>';
            return;
        }
        
        // Exibir anexos
        anexosList.innerHTML = '';
        anexos.forEach(anexo => {
            const anexoItem = document.createElement('div');
            anexoItem.className = 'anexo-item';
            
            // Determinar ícone com base no tipo de arquivo
            let iconClass = 'fa-file';
            const extensao = anexo.nome.split('.').pop().toLowerCase();
            
            if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(extensao)) {
                iconClass = 'fa-file-image';
            } else if (['pdf'].includes(extensao)) {
                iconClass = 'fa-file-pdf';
            } else if (['doc', 'docx'].includes(extensao)) {
                iconClass = 'fa-file-word';
            } else if (['xls', 'xlsx'].includes(extensao)) {
                iconClass = 'fa-file-excel';
            } else if (['zip', 'rar', '7z'].includes(extensao)) {
                iconClass = 'fa-file-archive';
            }
            
            anexoItem.innerHTML = `
                <div class="anexo-icon">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="anexo-name">${anexo.nome}</div>
                <div class="anexo-size">${formatarTamanho(anexo.tamanho)}</div>
                <a href="${anexo.url}" target="_blank" class="anexo-download">
                    <i class="fas fa-download"></i> Baixar
                </a>
            `;
            
            anexosList.appendChild(anexoItem);
        });
    } catch (error) {
        console.error('Erro ao carregar anexos:', error);
        anexosList.innerHTML = '<div class="loading">Erro ao carregar anexos</div>';
    }
}

// ============================================
// CONFIGURAÇÃO DE EVENTOS DE UPLOAD (CORRIGIDOS)
// ============================================

// Configurar eventos de upload
fileInput.addEventListener('change', (e) => {
    adicionarArquivos(Array.from(e.target.files), 'formulario');
    // Limpar input para permitir selecionar o mesmo arquivo novamente
    fileInput.value = '';
});

fileInputInteracao.addEventListener('change', (e) => {
    adicionarArquivos(Array.from(e.target.files), 'interacao');
    // Limpar input para permitir selecionar o mesmo arquivo novamente
    fileInputInteracao.value = '';
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    adicionarArquivos(Array.from(e.dataTransfer.files), 'formulario');
});

uploadAreaInteracao.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadAreaInteracao.classList.add('dragover');
});

uploadAreaInteracao.addEventListener('dragleave', () => {
    uploadAreaInteracao.classList.remove('dragover');
});

uploadAreaInteracao.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadAreaInteracao.classList.remove('dragover');
    adicionarArquivos(Array.from(e.dataTransfer.files), 'interacao');
});

// Carregar chamados na tabela a partir do Firebase em tempo real
function carregarChamadosTempoReal() {
    if (unsubscribeChamados) {
        unsubscribeChamados(); // Cancelar listener anterior
    }
    
    unsubscribeChamados = db.collection('chamados')
        .orderBy('dataAbertura', 'desc')
        .onSnapshot(snapshot => {
            todosChamados = [];
            let abertosCount = 0;
            let fechadosCount = 0;
            meusChamadosCount = 0;
            
            snapshot.forEach(doc => {
                const chamado = { id: doc.id, ...doc.data() };
                todosChamados.push(chamado);
                
                // Contar por status
                if (statusAbertos.includes(chamado.status)) {
                    abertosCount++;
                    
                    // Contar chamados do usuário logado
                    if (userData && chamado.responsavel === userData.nome) {
                        meusChamadosCount++;
                    }
                } else if (statusFechados.includes(chamado.status)) {
                    fechadosCount++;
                }
            });
            
            // Atualizar badges
            badgeAbertos.textContent = abertosCount;
            badgeFechados.textContent = fechadosCount;
            
            // Atualizar notificação no menu do usuário
            atualizarNotificacaoUsuario();
            
            // Calcular estatísticas para o dashboard
            calcularEstatisticas();
            
            // Filtrar e exibir chamados conforme aba ativa
            aplicarFiltros();
        }, error => {
            console.error("Erro ao carregar chamados:", error);
            tabelaChamados.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #ef4444;">Erro ao carregar chamados</td></tr>`;
            showToast('Erro ao carregar chamados', 'error');
        });
}

// Aplicar filtros aos chamados
function aplicarFiltros() {
    const termo = inputBusca.value.trim().toLowerCase();
    const responsavel = filtroResponsavel.value;
    const tipo = filtroTipo.value;
    const marketplace = filtroMarketplace.value;
    const status = filtroStatus.value;
    
    // Filtrar por aba ativa
    let chamadosFiltrados = todosChamados.filter(chamado => {
        if (abaAtiva === 'abertos') {
            return statusAbertos.includes(chamado.status);
        } else {
            return statusFechados.includes(chamado.status);
        }
    });
    
    // Aplicar filtro de busca se houver termo
    if (termo) {
        chamadosFiltrados = chamadosFiltrados.filter(chamado => 
            chamado.codigo.toLowerCase().includes(termo) || 
            chamado.pedido.toLowerCase().includes(termo)
        );
    }
    
    // Aplicar filtros adicionais
    if (responsavel) {
        chamadosFiltrados = chamadosFiltrados.filter(chamado => 
            chamado.responsavel === responsavel
        );
    }
    
    if (tipo) {
        chamadosFiltrados = chamadosFiltrados.filter(chamado => 
            chamado.tipo === tipo
        );
    }
    
    if (marketplace) {
        chamadosFiltrados = chamadosFiltrados.filter(chamado => 
            chamado.marketplace === marketplace
        );
   }
    
    if (status) {
        chamadosFiltrados = chamadosFiltrados.filter(chamado => 
            chamado.status === status
        );
    }
    
    // Exibir resultados
    exibirChamados(chamadosFiltrados);
}

// Exibir chamados na tabela
function exibirChamados(chamados) {
    tabelaChamados.innerHTML = '';
    
    if (chamados.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="7" style="text-align: center;">Nenhum chamado encontrado</td>`;
        tabelaChamados.appendChild(tr);
        return;
    }
    
    chamados.forEach(chamado => {
        const tr = document.createElement('tr');
        tr.dataset.id = chamado.id;
        tr.dataset.codigo = chamado.codigo;
        
        // Determinar classe de status
        let statusClass = '';
        if (chamado.status === 'Aberto') statusClass = 'aberto';
        else if (chamado.status === 'Pendente') statusClass = 'pendente';
        else if (chamado.status === 'Revisão') statusClass = 'revisao';
        else if (chamado.status === 'Fechado') statusClass = 'fechado';
        
        tr.innerHTML = `
            <td>${chamado.codigo}</td>
            <td>${chamado.pedido}</td>
            <td>${chamado.titulo}</td>
            <td>${chamado.responsavel || 'N/A'}</td>
            <td>${chamado.tipo}</td>
            <td>${chamado.marketplace}</td>
            <td><span class="status ${statusClass}">${chamado.status}</span></td>
        `;
        
        // Adicionar evento de clique para abrir detalhes
        tr.addEventListener('click', () => {
            abrirDetalhesChamado(chamado.id);
        });
        
        tabelaChamados.appendChild(tr);
    });
}

// Atualizar notificação no menu do usuário
function atualizarNotificacaoUsuario() {
    // Remover notificações existentes
    const notificacoesExistentes = document.querySelectorAll('.notification-badge');
    notificacoesExistentes.forEach(el => el.remove());
    
    // Adicionar nova notificação se houver chamados
    if (meusChamadosCount > 0) {
        const badge = document.createElement('span');
        badge.className = 'notification-badge';
        badge.textContent = meusChamadosCount;
        userMenu.appendChild(badge);
    }
}

//// Mostrar/ocultar campo marketplace conforme tipo selecionado
//tipoChamado.addEventListener('change', function() {
//    if (tiposComMarketplace.includes(this.value)) {
//        marketplaceGroup.classList.remove('hidden');
//        marketplace.setAttribute('required', 'required');
//    } else {
//        marketplaceGroup.classList.add('hidden');
//        marketplace.removeAttribute('required');
//    }
//});

// Verificar pedido ao digitar
pedidoField.addEventListener('blur', async function() {
    const pedido = this.value.trim();
    if (pedido) {
        const existe = await verificarPedidoExistente(pedido);
        pedidoAlert.classList.toggle('hidden', !existe);
    } else {
        pedidoAlert.classList.add('hidden');
    }
});

// Alternar entre abas
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        abaAtiva = this.dataset.tab;
        aplicarFiltros();
    });
});

// Processar envio do formulário
formChamado.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const pedido = pedidoField.value.trim();
    
    // Verificar if já existe chamado para este pedido
    const existeChamado = await verificarPedidoExistente(pedido);
    if (existeChamado) {
        showToast('Já existe um chamado aberto para este pedido. Por favor, altere o número do pedido.', 'warning');
        return;
    }
    
    try {
        // Coletar dados do formulário
        const novoChamado = {
            codigo: codigoControle.textContent,
            pedido: pedido,
            titulo: document.getElementById('assunto').value,
            tipo: tipoChamado.value,
            marketplace: tiposComMarketplace.includes(tipoChamado.value) ? marketplace.value : 'N/A',
            status: 'Aberto',
            responsavel: responsavelField.value,
            dataAbertura: new Date().toISOString(),
            descricao: document.getElementById('descricao').value,
            interacoes: [
                {
                    data: new Date().toISOString(),
                    autor: responsavelField.value,
                    mensagem: `Chamado aberto por ${responsavelField.value}`
                }
            ],
            userId: user.uid
        };
        
        // Adicionar anexos if houver
        if (arquivosSelecionados.length > 0) {
            showToast('Fazendo upload dos anexos...', 'info');
            novoChamado.anexos = await fazerUploadAnexos(novoChamado.codigo, arquivosSelecionados, 'chamado');
        }
        
        // Adicionar ao Firebase
        await db.collection('chamados').add(novoChamado);
        
        // Voltar para a listagem
        mostrarPagina(paginaListagem);
        
        // Limpar formulário
        formChamado.reset();
        marketplaceGroup.classList.add('hidden');
        pedidoAlert.classList.add('hidden');
        
        // Limpar arquivos selecionados
        arquivosSelecionados = [];
        totalTamanhoArquivos = 0;
        atualizarListaArquivos();
        
        showToast('Chamado criado com sucesso!', 'success');
    } catch (error) {
        console.error("Erro ao criar chamado:", error);
        showToast('Erro ao criar chamado. Tente novamente.', 'error');
    }
});

// Abrir detalhes do chamado
async function abrirDetalhesChamado(id) {
    try {
        const doc = await db.collection('chamados').doc(id).get();
        
        if (!doc.exists) {
            showToast('Chamado não encontrado!', 'error');
            return;
        }
        
        chamadoAtual = { id: doc.id, ...doc.data() };
        
        // Preencher detalhes
        document.getElementById('detalhesCodigo').textContent = chamadoAtual.codigo;
        document.getElementById('detalhesPedido').textContent = chamadoAtual.pedido;
        document.getElementById('detalhesResponsavel').textContent = chamadoAtual.responsavel || 'N/A';
        document.getElementById('detalhesTipo').textContent = chamadoAtual.tipo;
        document.getElementById('detalhesMarketplace').textContent = chamadoAtual.marketplace;
        document.getElementById('detalhesAssunto').textContent = chamadoAtual.titulo;
        document.getElementById('detalhesData').textContent = new Date(chamadoAtual.dataAbertura).toLocaleString('pt-BR');
        document.getElementById('detalhesDescricao').textContent = chamadoAtual.descricao;
        
        // REMOVER BADGES EXISTENTES
        const responsavelContainer = document.getElementById('detalhesResponsavelContainer');
        const tipoContainer = document.getElementById('detalhesTipoContainer');
        
        // Remover badges antigos
        const badgesResponsavel = responsavelContainer.querySelectorAll('.status, .status-badge');
        badgesResponsavel.forEach(badge => badge.remove());
        
        const badgesTipo = tipoContainer.querySelectorAll('.status, .status-badge');
        badgesTipo.forEach(badge => badge.remove());
        
        // RESETAR FORMULÁRIOS
        document.getElementById('alterarResponsavelForm').classList.add('hidden');
        document.getElementById('btnAlterarResponsavel').classList.remove('hidden');
        document.getElementById('alterarTipoForm').classList.add('hidden');
        document.getElementById('btnAlterarTipo').classList.remove('hidden');
        
        // VERIFICAR ALTERAÇÕES PREVIAS
        let responsavelAlterado = false;
        let tipoAlterado = false;
        
        if (chamadoAtual.interacoes) {
            // Verificar alteração de responsável
            const alteracaoResponsavel = chamadoAtual.interacoes.find(i => 
                i.mensagem && i.mensagem.includes('Responsável alterado de')
            );
            
            if (alteracaoResponsavel) {
                responsavelAlterado = true;
                document.getElementById('btnAlterarResponsavel').classList.add('hidden');
            }
            
            // Verificar alteração de tipo
            const alteracaoTipo = chamadoAtual.interacoes.find(i => 
                i.mensagem && i.mensagem.includes('Tipo alterado de')
            );
            
            if (alteracaoTipo) {
                tipoAlterado = true;
                document.getElementById('btnAlterarTipo').classList.add('hidden');
            }
        }
        
        // ARMAZENAR ESTADOS NO PRÓPRIO CHAMADO - CORRIGIDO
        chamadoAtual.responsavelAlterado = responsavelAlterado;
        chamadoAtual.tipoAlterado = tipoAlterado;
        
        // ADICIONAR BADGES APENAS SE HOUVER ALTERAÇÃO - CORRIGIDO
        if (responsavelAlterado) {
            const badge = document.createElement('span');
            badge.className = 'status-badge';
            badge.innerHTML = '<i class="fas fa-lock"></i> Alterado';
            badge.style.marginLeft = '10px';
            badge.style.padding = '4px 8px';
            badge.style.backgroundColor = '#3b82f6';
            badge.style.color = 'white';
            badge.style.borderRadius = '12px';
            badge.style.fontSize = '11px';
            badge.style.fontWeight = '600';
            responsavelContainer.appendChild(badge);
        }
        
        if (tipoAlterado) {
            const badge = document.createElement('span');
            badge.className = 'status-badge';
            badge.innerHTML = '<i class="fas fa-lock"></i> Alterado';
            badge.style.marginLeft = '10px';
            badge.style.padding = '4px 8px';
            badge.style.backgroundColor = '#3b82f6';
            badge.style.color = 'white';
            badge.style.borderRadius = '12px';
            badge.style.fontSize = '11px';
            badge.style.fontWeight = '600';
            tipoContainer.appendChild(badge);
        }
        
        // Carregar anexos
        await carregarAnexos(chamadoAtual.id);
        
        // Status
        const statusEl = document.getElementById('detalhesStatus');
        statusEl.textContent = chamadoAtual.status;
        statusEl.className = 'status';
        
        if (chamadoAtual.status === 'Aberto') statusEl.classList.add('aberto');
        else if (chamadoAtual.status === 'Pendente') statusEl.classList.add('pendente');
        else if (chamadoAtual.status === 'Revisão') statusEl.classList.add('revisao');
        else if (chamadoAtual.status === 'Fechado') statusEl.classList.add('fechado');
        
        // Mostrar/ocultar botões baseado no status
        if (chamadoAtual.status === 'Fechado') {
            btnFinalizarChamado.classList.add('hidden');
            btnReabrirChamado.classList.remove('hidden');
            btnAdicionarInteracao.disabled = true;
            novaInteracao.disabled = true;
        } else {
            btnFinalizarChamado.classList.remove('hidden');
            btnReabrirChamado.classList.add('hidden');
            btnAdicionarInteracao.disabled = false;
            novaInteracao.disabled = false;
        }
        
        // Limpar arquivos de interação
        arquivosInteracao = [];
        totalTamanhoArquivosInteracao = 0;
        atualizarListaArquivosInteracao();
        
        // Carregar interações
        carregarInteracoes();
        
        // Mostrar página de detalhes
        mostrarPagina(paginaDetalhes);
    } catch (error) {
        console.error("Erro ao carregar chamado:", error);
        showToast('Erro ao carregar chamado. Tente novamente.', 'error');
    }
}

// Carregar interações no chat
function carregarInteracoes() {
    chatContainer.innerHTML = '';
    
    if (!chamadoAtual || !chamadoAtual.interacoes) {
        chatContainer.innerHTML = '<div class="loading">Nenhuma interação encontrada</div>';
        return;
    }
    
    chamadoAtual.interacoes.forEach(interacao => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        if (interacao.autor === 'Sistema') {
            messageDiv.classList.add('system');
        }
        
        let anexosHTML = '';
        if (interacao.anexos && interacao.anexos.length > 0) {
            anexosHTML = `<div class="anexos-interacao" style="margin-top: 10px;">
                <strong>Anexos:</strong>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 5px;">
                    ${interacao.anexos.map(anexo => `
                        <a href="${anexo.url}" target="_blank" style="display: flex; align-items: center; gap: 5px; padding: 5px 10px; background: #e2e8f0; border-radius: 4px; text-decoration: none; color: #334155;">
                            <i class="fas fa-file"></i> ${anexo.nome}
                        </a>
                    `).join('')}
                </div>
            </div>`;
        }
        
        messageDiv.innerHTML = `
            <div class="message-header">
                <span>${interacao.autor}</span>
                <span>${new Date(interacao.data).toLocaleString('pt-BR')}</span>
            </div>
            <div class="message-content">${interacao.mensagem}</div>
            ${anexosHTML}
        `;
        
        chatContainer.appendChild(messageDiv);
    });
    
    // Rolagem automática para the final
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Adicionar nova interação
btnAdicionarInteracao.addEventListener('click', async function() {
    if (!chamadoAtual || !novaInteracao.value.trim()) {
        showToast('Digite uma mensagem para adicionar uma interação', 'warning');
        return;
    }
    
    try {
        // Adicionar interação
        const novaInteracaoObj = {
            data: new Date().toISOString(),
            autor: userData.nome,
            mensagem: novaInteracao.value.trim()
        };
        
        // Adicionar anexos if houver
        if (arquivosInteracao.length > 0) {
            showToast('Fazendo upload dos anexos...', 'info');
            novaInteracaoObj.anexos = await fazerUploadAnexos(chamadoAtual.codigo, arquivosInteracao, 'interacao');
        }
        
        // Atualizar no Firebase
        await db.collection('chamados').doc(chamadoAtual.id).update({
            interacoes: firebase.firestore.FieldValue.arrayUnion(novaInteracaoObj)
        });
        
        // Atualizar status para "Pendente" se estava "Aberto"
        if (chamadoAtual.status === 'Aberto') {
            await db.collection('chamados').doc(chamadoAtual.id).update({
                status: 'Pendente'
            });
        }
        
        // Recarregar detalhes para atualizar com os dados mais recentes
        const doc = await db.collection('chamados').doc(chamadoAtual.id).get();
        chamadoAtual = { id: doc.id, ...doc.data() };
        
        // Atualizar o status na página de detalhes
        const statusEl = document.getElementById('detalhesStatus');
        statusEl.textContent = chamadoAtual.status;
        statusEl.className = 'status pendente';
        
        // Recarregar interações
        carregarInteracoes();
        
        // Limpar campos
        novaInteracao.value = '';
        arquivosInteracao = [];
        totalTamanhoArquivosInteracao = 0;
        atualizarListaArquivosInteracao();
        
        showToast('Interação adicionada com sucesso!', 'success');
    } catch (error) {
        console.error("Erro ao adicionar interação:", error);
        showToast('Erro ao adicionar interação. Tente novamente.', 'error');
    }

    // Limpar campos
    novaInteracao.value = '';
    arquivosInteracao = [];
    totalTamanhoArquivosInteracao = 0;
    atualizarListaArquivosInteracao();
    
    // Limpar e ocultar mensagem de erro
    const uploadErrorElement = document.getElementById('uploadErrorInteracao');
    if (uploadErrorElement) {
        uploadErrorElement.textContent = '';
        uploadErrorElement.style.display = 'none';
    }
    
    showToast('Interação adicionada com sucesso!', 'success');
});

// Finalizar chamado
btnFinalizarChamado.addEventListener('click', async function() {
    if (!chamadoAtual) return;
    
    if (confirm('Tem certeza que deseja finalizar este chamado? Esta ação não pode be desfeita.')) {
        try {
            // Adicionar interação de sistema
            const interacaoFinalizacao = {
                data: new Date().toISOString(),
                autor: 'Sistema',
                mensagem: 'Chamado finalizado.'
            };
            
            // Atualizar no Firebase
            await db.collection('chamados').doc(chamadoAtual.id).update({
                status: 'Fechado',
                interacoes: firebase.firestore.FieldValue.arrayUnion(interacaoFinalizacao)
            });
            
            // Recarregar detalhes para atualizar com os dados mais recentes
            const doc = await db.collection('chamados').doc(chamadoAtual.id).get();
            chamadoAtual = { id: doc.id, ...doc.data() };
            
            // Desabilitar botões
            btnAdicionarInteracao.disabled = true;
            btnFinalizarChamado.disabled = true;
            novaInteracao.disabled = true;
            
            // Atualizar o status na página de detalhes
            const statusEl = document.getElementById('detalhesStatus');
            statusEl.textContent = 'Fechado';
            statusEl.className = 'status fechado';
            
            // Ocultar botão de finalizar e mostrar botão de reabrir
            btnFinalizarChamado.classList.add('hidden');
            btnReabrirChamado.classList.remove('hidden');
            
            // Recarregar interações
            carregarInteracoes();
            
            showToast('Chamado finalizado com sucesso!', 'success');
        } catch (error) {
            console.error("Erro ao finalizar chamado:", error);
            showToast('Erro ao finalizar chamado. Tente novamente.', 'error');
        }
    }
})

// Reabrir chamado
btnReabrirChamado.addEventListener('click', async function() {
    if (!chamadoAtual) return;
    
    if (confirm('Tem certeza que deseja reabrir este chamado?')) {
        try {
            // Atualizar status para "Revisão"
            await db.collection('chamados').doc(chamadoAtual.id).update({
                status: 'Revisão'
            });
            
            // Adicionar interação de sistema
            const interacaoReabertura = {
                data: new Date().toISOString(),
                autor: 'Sistema',
                mensagem: `Chamado reaberto para revisão por ${userData.nome}.`
            };
            
            await db.collection('chamados').doc(chamadoAtual.id).update({
                interacoes: firebase.firestore.FieldValue.arrayUnion(interacaoReabertura)
            });
            
            // Recarregar detalhes para atualizar com os dados mais recentes
            const doc = await db.collection('chamados').doc(chamadoAtual.id).get();
            chamadoAtual = { id: doc.id, ...doc.data() };
            
            // Habilitar botões
            btnAdicionarInteracao.disabled = false;
            novaInteracao.disabled = false;
            
            // Atualizar o status na página de detalhes
            const statusEl = document.getElementById('detalhesStatus');
            statusEl.textContent = 'Revisão';
            statusEl.className = 'status revisao';
            
            // Ocultar botão de reabrir e mostrar botão de finalizar
            btnFinalizarChamado.classList.remove('hidden');
            btnReabrirChamado.classList.add('hidden');
            
            // Recarregar interações
            carregarInteracoes();
            
            showToast('Chamado reaberto com sucesso!', 'success');
        } catch (error) {
            console.error("Erro ao reabrir chamado:", error);
            showToast('Erro ao reabrir chamado. Tente novamente.', 'error');
        }
    }
});

// Buscar chamados
btnBuscar.addEventListener('click', function() {
    aplicarFiltros();
});

// Limpar busca
btnLimparBusca.addEventListener('click', function() {
    inputBusca.value = '';
    aplicarFiltros();
});

// Buscar ao pressionar Enter
inputBusca.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        aplicarFiltros();
    }
});

// Aplicar filtros
btnAplicarFiltros.addEventListener('click', function() {
    aplicarFiltros();
});

// Limpar filtros
btnLimparFiltros.addEventListener('click', function() {
    filtroResponsavel.value = '';
    filtroTipo.value = '';
    filtroMarketplace.value = '';
    filtroStatus.value = '';
    inputBusca.value = '';
    aplicarFiltros();
});

// Alternar entre formulários de login and cadastro
btnMostrarCadastro.addEventListener('click', function() {
    loginForm.classList.add('hidden');
    signupSection.classList.remove('hidden');
    loginOptions.classList.add('hidden');
    signupMessage.textContent = '';
    signupMessage.className = 'message';
});

btnVoltarLogin.addEventListener('click', function() {
    signupSection.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginOptions.classList.remove('hidden');
    loginMessage.classList.add('hidden');
    signupMessage.textContent = '';
    signupMessage.className = 'message';
});

// Menu de usuário
userMenu.addEventListener('click', function(e) {
    dropdownMenu.classList.toggle('show');
    e.stopPropagation();
});

// Menu de ferramentas
toolsBtn.addEventListener('click', function(e) {
    toolsSubmenu.classList.toggle('show');
    e.stopPropagation();
});

// Fechar menus ao clicar fora
document.addEventListener('click', function() {
    dropdownMenu.classList.remove('show');
    toolsSubmenu.classList.remove('show');
});

// Ações do menu de ferramentas
btnEstoque.addEventListener('click', function() {
    toolsSubmenu.classList.remove('show');
    mostrarPagina(paginaEstoque);
    // Iniciar autenticação se necessário
    if (!jwtToken) {
        loginIderisEstoque();
    } else {
        estoqueStatus.textContent = "Autenticado com sucesso! Pronto para consultas.";
        btnBuscarEstoque.disabled = false;
        skuInput.focus();
    }
});

btnVerificacao.addEventListener('click', function() {
    toolsSubmenu.classList.remove('show');
    mostrarPagina(paginaVerificacao);
    // Iniciar autenticação se necessário
    if (!jwtToken) {
        loginIderisVerificacao();
    } else {
        verificacaoStatus.textContent = "Autenticado com sucesso! Pronto para consultas.";
        btnBuscarVerificacao.disabled = false;
        verificacaoPedido.focus();
    }
});

// Ações do menu do usuário
btnConfiguracoes.addEventListener('click', function() {
    dropdownMenu.classList.remove('show');
    mostrarPagina(paginaConfiguracoes);
    // Carregar estado atual da configuração
    toggleOcultarCadastro.checked = ocultarCadastro;
    configMensagemContato.style.display = ocultarCadastro ? 'block' : 'none';
});

// Navegação entre páginas
btnNavDashboard.addEventListener('click', function() {
    mostrarPagina(paginaDashboard);
});

btnNavListagem.addEventListener('click', function() {
    mostrarPagina(paginaListagem);
});

btnNovoChamado.addEventListener('click', async function() {
    // Carregar lista de usuários
    await atualizarListaUsuarios();
    
    // Gerar novo código
    codigoControle.textContent = await gerarCodigo();
    
    // Limpar alerta de pedido
    pedidoAlert.classList.add('hidden');
    
    // Limpar arquivos selecionados
    arquivosSelecionados = [];
    totalTamanhoArquivos = 0;
    atualizarListaArquivos();
    
    mostrarPagina(paginaFormulario);

    // Limpar e ocultar mensagens de erro
    const uploadErrorElement = document.getElementById('uploadError');
    if (uploadErrorElement) {
        uploadErrorElement.textContent = '';
        uploadErrorElement.style.display = 'none';
    }
    
    // Limpar arquivos selecionados
    arquivosSelecionados = [];
    totalTamanhoArquivos = 0;
    atualizarListaArquivos();
    
    mostrarPagina(paginaFormulario);
});

btnVoltar.addEventListener('click', function() {
    mostrarPagina(paginaListagem);
    
    // Limpar formulário
    formChamado.reset();
    marketplaceGroup.classList.add('hidden');
    pedidoAlert.classList.add('hidden');
});

btnVoltarDetalhes.addEventListener('click', function() {
    mostrarPagina(paginaListagem);
    chamadoAtual = null;
});

btnVoltarVerificacao.addEventListener('click', function() {
    mostrarPagina(paginaListagem);
});

btnVoltarConfiguracoes.addEventListener('click', function() {
    mostrarPagina(paginaListagem);
});

btnVoltarEstoque.addEventListener('click', function() {
    mostrarPagina(paginaListagem);
});

// Login com Firebase
btnFazerLogin.addEventListener('click', async function() {
    const email = loginEmail.value;
    const password = loginPassword.value;
    
    if (!email || !password) {
        loginMessage.textContent = 'Por favor, preencha todos os campos.';
        loginMessage.classList.remove('hidden');
        return;
    }
    
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        user = userCredential.user;
        loginMessage.classList.add('hidden');
        
        // Carregar dados do usuário
        const userDoc = await db.collection('usuarios').doc(user.uid).get();
        if (userDoc.exists) {
            userData = userDoc.data();
        }
        
        // Carregar lista de usuários
        await atualizarListaUsuarios();
        
        // Redirecionar para a página de listagem após login bem-sucedido
        paginaLogin.classList.add('hidden');
        header.classList.remove('hidden');
        userMenu.classList.remove('hidden');
        
        // Mostrar dashboard como página inicial
        mostrarPagina(paginaDashboard);
        
        // Carregar chamados
        carregarChamadosTempoReal();
        
        showToast(`Bem-vindo(a), ${userData.nome || user.email}!`, 'success');
    } catch (error) {
        console.error("Erro no login:", error);
        loginMessage.textContent = 'Erro no login: ' + error.message;
        loginMessage.classList.remove('hidden');
        showToast('Erro no login: ' + error.message, 'error');
    }
});

// Criar conta
btnCriarConta.addEventListener('click', async function() {
    const name = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
    const confirmPassword = signupConfirmPassword.value;
    
    if (!name || !email || !password || !confirmPassword) {
        signupMessage.textContent = 'Por favor, preencha todos os campos.';
        signupMessage.classList.add('message-error');
        return;
    }
    
    if (password !== confirmPassword) {
        signupMessage.textContent = 'As senhas não coincidem.';
        signupMessage.classList.add('message-error');
        return;
    }
    
    if (password.length < 6) {
        signupMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        signupMessage.classList.add('message-error');
        return;
    }
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        user = userCredential.user;
        
        // Usar a nova função para adicionar usuário
        await adicionarUsuarioALista(user.uid, name);
        
        signupMessage.textContent = 'Conta criada com sucesso! Faça login para continuar.';
        signupMessage.classList.remove('message-error');
        signupMessage.classList.add('message-success');
        
        // Limpar campos
        signupName.value = '';
        signupEmail.value = '';
        signupPassword.value = '';
        signupConfirmPassword.value = '';
        
        showToast('Usuário cadastrado com sucesso!', 'success');
        
    } catch (error) {
        console.error("Erro ao criar conta:", error);
        signupMessage.textContent = 'Erro ao criar conta: ' + error.message;
        signupMessage.classList.add('message-error');
        showToast('Erro ao criar conta: ' + error.message, 'error');
    }
});

// Logout
btnLogout.addEventListener('click', function() {
    auth.signOut();
    showToast('Logout realizado com sucesso!', 'info');
});

// Monitorar estado de autenticação
auth.onAuthStateChanged(async (firebaseUser) => {
    if (firebaseUser) {
        // Usuário logado
        user = firebaseUser;
        
        // Carregar dados do usuário
        try {
            const userDoc = await db.collection('usuarios').doc(user.uid).get();
            if (userDoc.exists) {
                userData = userDoc.data();
                userName.textContent = userData.nome;
                
                // Definir iniciais para o avatar
                const iniciais = userData.nome.split(' ').map(n => n[0]).join('').toUpperCase();
                userInitials.textContent = iniciais.substring(0, 2);
            } else {
                // Fallback para email se não houver nome
                userName.textContent = user.email;
                userInitials.textContent = user.email.substring(0, 2).toUpperCase();
            }
        } catch (error) {
            console.error("Erro ao carregar dados do usuário:", error);
            userName.textContent = user.email;
            userInitials.textContent = user.email.substring(0, 2).toUpperCase();
        }
        
        header.classList.remove('hidden');
        userMenu.classList.remove('hidden');
        paginaLogin.classList.add('hidden');
        
        // Carregar lista de usuários
        await atualizarListaUsuarios();
        
        // Carregar chamados
        carregarChamadosTempoReal();
        
        // Mostrar dashboard como página inicial
        mostrarPagina(paginaDashboard);
        
        // Iniciar autenticação Ideris APENAS quando o usuário estiver logado
        try {
            await loginIderis();
            await loadMarketplaces();
            await loadTotals();
        } catch (error) {
            console.error("Erro ao conectar com API Ideris:", error);
            showToast('Erro ao conectar com API Ideris', 'error');
        }
    } else {
        // Usuário não logado
        user = null;
        userData = null;
        header.classList.add('hidden');
        userMenu.classList.add('hidden');
        paginaDashboard.classList.add('hidden');
        paginaListagem.classList.add('hidden');
        paginaFormulario.classList.add('hidden');
        paginaDetalhes.classList.add('hidden');
        paginaVerificacao.classList.add('hidden');
        paginaConfiguracoes.classList.add('hidden');
        paginaEstoque.classList.add('hidden');
        paginaLogin.classList.remove('hidden');
        
        // Aplicar configuração de ocultar cadastro
        aplicarConfiguracaoOcultarCadastro();
        
        // Resetar formulários de login
        loginForm.classList.remove('hidden');
        signupSection.classList.add('hidden');
        loginOptions.classList.remove('hidden');
        loginMessage.classList.add('hidden');
        signupMessage.textContent = '';
        signupMessage.className = 'message';
        
        // Limpar campos de login
        loginEmail.value = '';
        loginPassword.value = '';
        
        // Cancelar listener de chamados
        if (unsubscribeChamados) {
            unsubscribeChamados();
            unsubscribeChamados = null;
        }
    }
});

// Eventos para a página de verificação
btnBuscarVerificacao.addEventListener('click', buscarPedidoVerificacao);
btnLimparVerificacao.addEventListener('click', limparVerificacao);

verificacaoPedido.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        buscarPedidoVerificacao();
    }
});

btnAtualizarVerificacao.addEventListener('click', function() {
    loginIderisVerificacao();
    showToast('Atualizando autenticação...', 'info');
});

// Eventos para a página de estoque
btnBuscarEstoque.addEventListener('click', buscarSKUsEstoque);
btnLimparEstoque.addEventListener('click', limparListaEstoque);
btnAtualizarEstoques.addEventListener('click', atualizarEstoques);

skuInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        buscarSKUsEstoque();
    }
});

btnAtualizarEstoque.addEventListener('click', function() {
    loginIderisEstoque();
    showToast('Atualizando autenticação...', 'info');
});

// Atualizar dados Ideris automaticamente a cada 5 minutos
setInterval(() => {
    if (jwtToken && paginaDashboard.classList.contains('hidden') === false) {
        loadTotals();
    }
}, 15*60*1000);

// Função para aplicar configuração de ocultar cadastro
function aplicarConfiguracaoOcultarCadastro() {
    if (ocultarCadastro) {
        loginOptions.style.display = 'none';
    } else {
        loginOptions.style.display = 'block';
    }
}

// Função para salvar configuração de ocultar cadastro
function salvarConfiguracaoOcultarCadastro(valor) {
    ocultarCadastro = valor;
    localStorage.setItem('ocultarCadastro', valor);
    aplicarConfiguracaoOcultarCadastro();
}

// Eventos para a página de configurações
toggleOcultarCadastro.addEventListener('change', function() {
    if (this.checked) {
        configMensagemContato.style.display = 'block';
        salvarConfiguracaoOcultarCadastro(true);
        showToast('Opção de cadastro ocultada na tela de login', 'success');
    } else {
        configMensagemContato.style.display = 'none';
        salvarConfiguracaoOcultarCadastro(false);
        showToast('Opção de cadastro habilitada na tela de login', 'success');
    }
});

// ============================================
// FUNÇÕES PARA ALTERAÇÃO DO TIPO DE CHAMADO
// ============================================

/**
 * Limpa a interface de alteração de tipo
 */
function limparInterfaceAlteracaoTipo() {
    document.getElementById('alterarTipoForm').classList.add('hidden');
    document.getElementById('btnAlterarTipo').classList.remove('hidden');
    
    // Remove badges existentes
    const container = document.getElementById('detalhesTipoContainer');
    const badges = container.querySelectorAll('.status, .status-badge');
    badges.forEach(badge => badge.remove());
}

/**
 * Mostra o badge de "Alterado" no tipo
 */
function mostrarBadgeTipoAlterado() {
    const container = document.getElementById('detalhesTipoContainer');
    
    // Remove badge existente se houver
    const badges = container.querySelectorAll('.status, .status-badge');
    badges.forEach(badge => badge.remove());
    
    const badge = document.createElement('span');
    badge.className = 'status-badge';
    badge.innerHTML = '<i class="fas fa-lock"></i> Alterado';
    badge.style.marginLeft = '10px';
    badge.style.padding = '4px 8px';
    badge.style.backgroundColor = '#3b82f6';
    badge.style.color = 'white';
    badge.style.borderRadius = '12px';
    badge.style.fontSize = '11px';
    badge.style.fontWeight = '600';
    
    container.appendChild(badge);
    
    // Atualizar o estado no chamado atual
    chamadoAtual.tipoAlterado = true;
}

/**
 * Preenche o select de tipos
 */
function preencherSelectTipos() {
    const select = document.getElementById('novoTipo');
    select.innerHTML = '<option value="">Selecione o tipo</option>';
    
    const tipos = [
        'Devolucao', 'Reembolso', 'Fraude', 'Contatar MarketPlace',
        'Contatar Cliente', 'Interno', 'Defeito', 'Prejuizo',
        'Atraso na entrega', 'Produto errado', 'Faltou item',
        'Duvida tecnica', 'Cancelamento'
    ];
    
    tipos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo;
        option.textContent = tipo;
        select.appendChild(option);
    });
    
    // Selecionar o tipo atual
    select.value = chamadoAtual.tipo;
}

// ============================================
// EVENT LISTENERS PARA ALTERAÇÃO DO TIPO
// ============================================

document.getElementById('btnAlterarTipo').addEventListener('click', function() {
    if (chamadoAtual.tipoAlterado) {
        showToast('O tipo já foi alterado uma vez e não pode ser modificado novamente.', 'warning');
        return;
    }
    
    document.getElementById('alterarTipoForm').classList.remove('hidden');
    document.getElementById('btnAlterarTipo').classList.add('hidden');
    preencherSelectTipos();
});

document.getElementById('btnCancelarTipo').addEventListener('click', function() {
    limparInterfaceAlteracaoTipo();
});

document.getElementById('btnConfirmarTipo').addEventListener('click', async function() {
    const novoTipo = document.getElementById('novoTipo').value;
    
    if (!novoTipo) {
        showToast('Selecione um tipo', 'warning');
        return;
    }
    
    if (novoTipo === chamadoAtual.tipo) {
        showToast('O tipo é o mesmo atual', 'info');
        limparInterfaceAlteracaoTipo();
        return;
    }
    
    try {
        // Atualizar no Firebase
        await db.collection('chamados').doc(chamadoAtual.id).update({
            tipo: novoTipo,
            tipoAlterado: true // Adicionar campo para persistência
        });
        
        // Adicionar interação de sistema
        const interacaoAlteracao = {
            data: new Date().toISOString(),
            autor: 'Sistema',
            mensagem: `Tipo alterado de "${chamadoAtual.tipo}" para "${novoTipo}" por ${userData.nome}.`
        };
        
        await db.collection('chamados').doc(chamadoAtual.id).update({
            interacoes: firebase.firestore.FieldValue.arrayUnion(interacaoAlteracao)
        });
        
        // Atualizar a exibição
        document.getElementById('detalhesTipo').textContent = novoTipo;
        
        // Ocultar formulário e mostrar badge
        limparInterfaceAlteracaoTipo();
        mostrarBadgeTipoAlterado();
        
        // Atualizar o chamado atual
        chamadoAtual.tipo = novoTipo;
        chamadoAtual.tipoAlterado = true;
        
        // Esconder o botão de alterar tipo permanentemente
        document.getElementById('btnAlterarTipo').classList.add('hidden');
        
        showToast('Tipo alterado com sucesso!', 'success');
    } catch (error) {
        console.error("Erro ao alterar tipo:", error);
        showToast('Erro ao alterar tipo. Tente novamente.', 'error');
    }
});

// Event listeners (adicionar na seção de eventos)
document.getElementById('verificarDuplicados').addEventListener('change', function(e) {
    verificarApenasDuplicados = e.target.checked;
    
    if (verificarApenasDuplicados) {
        verificacaoStatus.textContent = "Modo: Verificação local de duplicados";
        btnBuscarVerificacao.disabled = false;
    } else {
        verificacaoStatus.textContent = "Modo: Consulta completa API Ideris";
        if (!jwtToken) {
            btnBuscarVerificacao.disabled = true;
        }
    }
});

// Adicione estes event listeners no final do arquivo JavaScript, antes do DOMContentLoaded
// Event Listener para alterar responsável - MODIFICADO
document.getElementById('btnAlterarResponsavel').addEventListener('click', function() {
    if (chamadoAtual.responsavelAlterado) {
        showToast('O responsável já foi alterado uma vez e não pode ser modificado novamente.', 'warning');
        return;
    }
    
    document.getElementById('alterarResponsavelForm').classList.remove('hidden');
    document.getElementById('btnAlterarResponsavel').classList.add('hidden');
    
    // Preencher o select with os usuários disponíveis
    const select = document.getElementById('novoResponsavel');
    select.innerHTML = '<option value="">Selecione um responsável</option>';
    listaUsuarios.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario;
        option.textContent = usuario;
        select.appendChild(option);
    });
});

document.getElementById('btnCancelarResponsavel').addEventListener('click', function() {
    document.getElementById('alterarResponsavelForm').classList.add('hidden');
    document.getElementById('btnAlterarResponsavel').classList.remove('hidden');
});

document.getElementById('btnConfirmarResponsavel').addEventListener('click', async function() {
    const novoResponsavel = document.getElementById('novoResponsavel').value;
    
    if (!novoResponsavel) {
        showToast('Selecione um responsável', 'warning');
        return;
    }
    
    try {
        // Atualizar no Firebase
        await db.collection('chamados').doc(chamadoAtual.id).update({
            responsavel: novoResponsavel,
            responsavelAlterado: true // Adicionar campo para persistência
        });
        
        // Adicionar interação de sistema
        const interacaoAlteracao = {
            data: new Date().toISOString(),
            autor: 'Sistema',
            mensagem: `Responsável alterado de "${chamadoAtual.responsavel}" para "${novoResponsavel}" por ${userData.nome}.`
        };
        
        await db.collection('chamados').doc(chamadoAtual.id).update({
            interacoes: firebase.firestore.FieldValue.arrayUnion(interacaoAlteracao)
        });
        
        // Atualizar a exibição
        document.getElementById('detalhesResponsavel').textContent = novoResponsavel;
        
        // Ocultar o formulário e mostrar que já foi alterado
        document.getElementById('alterarResponsavelForm').classList.add('hidden');
        document.getElementById('btnAlterarResponsavel').classList.add('hidden');
        
        // Marcar que o responsável já foi alterado
        chamadoAtual.responsavelAlterado = true;
        
        // Adicionar badge indicando que foi alterado
        const container = document.getElementById('detalhesResponsavelContainer');
        const badge = document.createElement('span');
        badge.className = 'status-badge';
        badge.innerHTML = '<i class="fas fa-lock"></i> Alterado';
        badge.style.marginLeft = '10px';
        badge.style.padding = '4px 8px';
        badge.style.backgroundColor = '#3b82f6';
        badge.style.color = 'white';
        badge.style.borderRadius = '12px';
        badge.style.fontSize = '11px';
        badge.style.fontWeight = '600';
        container.appendChild(badge);
        
        showToast('Responsável alterado com sucesso!', 'success');
    } catch (error) {
        console.error("Erro ao alterar responsável:", error);
        showToast('Erro ao alterar responsável. Tente novamente.', 'error');
    }
});

// Aplicar configuração ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    aplicarConfiguracaoOcultarCadastro();
    
    // Restaura última pesquisa do localStorage
    const last = localStorage.getItem("ideris:lastSearch");
    if (last && typeof last === "string") {
        skuInput.value = last;
        lastSearch.textContent = "Última pesquisa: " + last;
    } else {
        lastSearch.textContent = "Última pesquisa: —";
    }
});
