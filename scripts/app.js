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
const paginaSuporte = document.getElementById('paginaSuporte');
const btnNavDashboard = document.getElementById('btnNavDashboard');
const btnNavListagem = document.getElementById('btnNavListagem');
const btnNavSuporte = document.getElementById('btnNavSuporte');
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

// Elementos para a página de suporte
const searchInputSuporte = document.getElementById('searchInputSuporte');
const newRecordBtn = document.getElementById('newRecordBtn');
const errorsTableBody = document.getElementById('errorsTableBody');
const mobileErrorsList = document.getElementById('mobileErrorsList');
const noResultsSuporte = document.getElementById('noResultsSuporte');
const recordModal = document.getElementById('recordModal');
const viewModal = document.getElementById('viewModal');
const recordForm = document.getElementById('recordForm');
const recordId = document.getElementById('recordId');
const autoCode = document.getElementById('autoCode');
const code = document.getElementById('code');
const locationInput = document.getElementById('location');
const description = document.getElementById('description');
const correction = document.getElementById('correction');
const notes = document.getElementById('notes');
const autoCodeInfo = document.getElementById('autoCodeInfo');
const codePreview = document.getElementById('codePreview');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');
const closeViewBtn = document.getElementById('closeViewBtn');
const editFromViewBtn = document.getElementById('editFromViewBtn');
const viewCode = document.getElementById('viewCode');
const viewLocation = document.getElementById('viewLocation');
const viewDescription = document.getElementById('viewDescription');
const viewCorrection = document.getElementById('viewCorrection');
const viewNotes = document.getElementById('viewNotes');
const viewCreatedAt = document.getElementById('viewCreatedAt');
const viewUpdatedAt = document.getElementById('viewUpdatedAt');

// Elementos da página Kanban
const paginaKanban = document.getElementById('paginaKanban');
const btnNavKanban = document.getElementById('btnNavKanban');
const btnNovaTarefa = document.getElementById('btnNovaTarefa');
const btnLimparKanban = document.getElementById('btnLimparKanban');
const modalTarefa = document.getElementById('modalTarefa');
const formTarefa = document.getElementById('formTarefa');
const tarefaId = document.getElementById('tarefaId');
const tarefaTitulo = document.getElementById('tarefaTitulo');
const tarefaDescricao = document.getElementById('tarefaDescricao');
const tarefaPrioridade = document.getElementById('tarefaPrioridade');
const btnAddTodo = document.getElementById('btnAddTodo');
const novaTarefaTodo = document.getElementById('novaTarefaTodo');
const todoList = document.getElementById('todoList');

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

// Variáveis para upload de imagens
let imagensSelecionadas = [];
let MAX_IMAGENS = 3;
let MAX_TAMANHO_IMAGEM = 2 * 1024 * 1024; // 2MB

// Variáveis para verificação de pedidos
let pedidosVerificados = [];

// Variáveis globais do Kanban
let tarefas = [];
let todoItems = [];
let tarefaArrastada = null;

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

// Função auxiliar para capitalizar texto
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função para alternar entre páginas
function mostrarPagina(pagina) {
    // Esconder todas as páginas (ADICIONE paginaKanban NA LISTA)
    paginaDashboard.classList.add('hidden');
    paginaListagem.classList.add('hidden');
    paginaFormulario.classList.add('hidden');
    paginaDetalhes.classList.add('hidden');
    paginaVerificacao.classList.add('hidden');
    paginaConfiguracoes.classList.add('hidden');
    paginaEstoque.classList.add('hidden');
    paginaSuporte.classList.add('hidden');
    paginaKanban.classList.add('hidden'); // <- ADICIONE ESTA LINHA
    
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
    } else if (pagina === paginaSuporte) {
        btnNavSuporte.classList.add('active');
        // Carregar registros quando acessar a página
        carregarRegistrosSuporte();
    } else if (pagina === paginaKanban) { // <- ADICIONE ESTE BLOCO
        btnNavKanban.classList.add('active');
        atualizarContadores();
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
                    mensagem: `Chamado aberto por ${userData.nome}`
                    // ${responsavelField.value}
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

btnNavSuporte.addEventListener('click', function() {
    mostrarPagina(paginaSuporte);
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
		
        // INICIALIZAR SISTEMA KANBAN - ADICIONE ESTA LINHA
        inicializarKanban();    
		
        // Iniciar autenticação Ideris APENAS quando o usuário estiver logado
        try {
            await loginIderis();
            await loadMarketplaces();
            await loadTotals();
        } catch (error) {
            console.error("Erro ao conectar com API Ideris:", error);
            showToast('Erro ao conectar com API Ideris', 'error');
        }

        // Inicializar sistema de suporte
        initializeSuporteSystem();
		
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
        paginaSuporte.classList.add('hidden');
        paginaKanban.classList.add('hidden'); // ADICIONE ESTA LINHA
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

        // LIMPAR DADOS DO KANBAN AO FAZER LOGOUT - ADICIONE ESTE BLOCO
        tarefas = [];
        todoItems = [];
        tarefaArrastada = null;
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
// SISTEMA KANBAN - FUNÇÕES PRINCIPAIS
// ============================================

// Inicializar sistema Kanban
function inicializarKanban() {
    carregarTarefas();
    carregarTodoList();
    configurarEventosKanban();
}

// Configurar eventos do Kanban
function configurarEventosKanban() {
    // Navegação
    btnNavKanban.addEventListener('click', () => {
        mostrarPagina(paginaKanban);
        atualizarContadores();
    });

    // Modal de tarefas
    btnNovaTarefa.addEventListener('click', abrirModalTarefa);
    document.getElementById('cancelarTarefa').addEventListener('click', fecharModalTarefa);
    document.querySelector('#modalTarefa .close').addEventListener('click', fecharModalTarefa);

    // Formulário de tarefa
    formTarefa.addEventListener('submit', salvarTarefa);

    // Todo List
    btnAddTodo.addEventListener('click', adicionarTodo);
    novaTarefaTodo.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') adicionarTodo();
    });

    // Limpar quadro
    btnLimparKanban.addEventListener('click', limparQuadro);

    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === modalTarefa) fecharModalTarefa();
    });
}

// Carregar tarefas do Firebase
async function carregarTarefas() {
    if (!user) return;

    try {
        // Consulta simplificada que não requer índice composto
        const snapshot = await db.collection('kanban_tarefas')
            .where('userId', '==', user.uid)
            .get();

        tarefas = [];
        snapshot.forEach(doc => {
            tarefas.push({ id: doc.id, ...doc.data() });
        });

        // Ordenar localmente por data de criação
        tarefas.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

        renderizarTarefas();
        atualizarContadores();
    } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
        showToast('Erro ao carregar tarefas', 'error');
    }
}

// Carregar todo list do Firebase
async function carregarTodoList() {
    if (!user) return;

    try {
        // Consulta simplificada que não requer índice composto
        const snapshot = await db.collection('kanban_todo')
            .where('userId', '==', user.uid)
            .get();

        todoItems = [];
        snapshot.forEach(doc => {
            todoItems.push({ id: doc.id, ...doc.data() });
        });

        // Ordenar localmente por data de criação
        todoItems.sort((a, b) => new Date(a.dataCriacao) - new Date(b.dataCriacao));

        renderizarTodoList();
    } catch (error) {
        console.error('Erro ao carregar todo list:', error);
    }
}

// Renderizar tarefas no quadro
function renderizarTarefas() {
    // Limpar containers
    document.getElementById('tasksIniciar').innerHTML = '';
    document.getElementById('tasksAndamento').innerHTML = '';
    document.getElementById('tasksAnalisar').innerHTML = '';
    document.getElementById('tasksFinalizado').innerHTML = '';

    tarefas.forEach(tarefa => {
        const taskElement = criarElementoTarefa(tarefa);
        document.getElementById(`tasks${capitalize(tarefa.status)}`).appendChild(taskElement);
    });

    configurarDragAndDrop();
}

// Criar elemento HTML para tarefa
function criarElementoTarefa(tarefa) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'kanban-task';
    taskDiv.draggable = true;
    taskDiv.dataset.id = tarefa.id;

    const dataCriacao = new Date(tarefa.dataCriacao).toLocaleDateString('pt-BR');
    const dataAtualizacao = tarefa.dataAtualizacao ? 
        new Date(tarefa.dataAtualizacao).toLocaleDateString('pt-BR') : dataCriacao;

    taskDiv.innerHTML = `
        <div class="task-header">
            <div class="task-titulo">${tarefa.titulo}</div>
            <span class="task-prioridade prioridade-${tarefa.prioridade}">${tarefa.prioridade}</span>
        </div>
        ${tarefa.descricao ? `<div class="task-descricao">${tarefa.descricao}</div>` : ''}
        <div class="task-footer">
            <div class="task-datas">
                <div>Criado: ${dataCriacao}</div>
                ${dataAtualizacao !== dataCriacao ? `<div>Atualizado: ${dataAtualizacao}</div>` : ''}
            </div>
            <div class="task-actions">
                <button class="task-action editar" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="task-action excluir" title="Excluir">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;

    // Eventos dos botões
    taskDiv.querySelector('.editar').addEventListener('click', () => editarTarefa(tarefa.id));
    taskDiv.querySelector('.excluir').addEventListener('click', () => excluirTarefa(tarefa.id));

    return taskDiv;
}

// Configurar drag and drop
function configurarDragAndDrop() {
    const tasks = document.querySelectorAll('.kanban-task');
    const columns = document.querySelectorAll('.kanban-column');

    tasks.forEach(task => {
        task.addEventListener('dragstart', (e) => {
            tarefaArrastada = task;
            task.classList.add('dragging');
            e.dataTransfer.setData('text/plain', task.dataset.id);
        });

        task.addEventListener('dragend', () => {
            task.classList.remove('dragging');
            tarefaArrastada = null;
        });
    });

    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(column, e.clientY);
            const dragging = document.querySelector('.dragging');
            
            if (afterElement == null) {
                column.querySelector('.tasks-container').appendChild(dragging);
            } else {
                column.querySelector('.tasks-container').insertBefore(dragging, afterElement);
            }
        });

        column.addEventListener('drop', (e) => {
            e.preventDefault();
            const taskId = e.dataTransfer.getData('text/plain');
            const novoStatus = column.dataset.status;
            
            atualizarStatusTarefa(taskId, novoStatus);
        });
    });
}

// Função auxiliar para posicionamento do drag and drop
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.kanban-task:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Atualizar status da tarefa
async function atualizarStatusTarefa(taskId, novoStatus) {
    try {
        const tarefa = tarefas.find(t => t.id === taskId);
        if (!tarefa || tarefa.status === novoStatus) return;

        await db.collection('kanban_tarefas').doc(taskId).update({
            status: novoStatus,
            dataAtualizacao: new Date().toISOString()
        });

        // Atualizar localmente
        tarefa.status = novoStatus;
        tarefa.dataAtualizacao = new Date().toISOString();

        renderizarTarefas();
        atualizarContadores();
        showToast('Tarefa movida com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao atualizar status:', error);
        showToast('Erro ao mover tarefa', 'error');
        // Recarregar para sincronizar
        carregarTarefas();
    }
}

// Abrir modal para nova tarefa
function abrirModalTarefa() {
    tarefaId.value = '';
    tarefaTitulo.value = '';
    tarefaDescricao.value = '';
    tarefaPrioridade.value = 'media';
    document.getElementById('modalTarefaTitle').innerHTML = '<i class="fas fa-plus-circle"></i> Nova Tarefa';
    modalTarefa.style.display = 'flex';
    tarefaTitulo.focus();
}

// Fechar modal
function fecharModalTarefa() {
    modalTarefa.style.display = 'none';
}

// Salvar tarefa
async function salvarTarefa(e) {
    e.preventDefault();

    const tarefaData = {
        titulo: tarefaTitulo.value.trim(),
        descricao: tarefaDescricao.value.trim(),
        prioridade: tarefaPrioridade.value,
        status: 'iniciar',
        userId: user.uid,
        dataCriacao: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString()
    };

    try {
        if (tarefaId.value) {
            // Editar tarefa existente
            await db.collection('kanban_tarefas').doc(tarefaId.value).update({
                ...tarefaData,
                dataAtualizacao: new Date().toISOString()
            });
            showToast('Tarefa atualizada com sucesso!', 'success');
        } else {
            // Nova tarefa
            await db.collection('kanban_tarefas').add(tarefaData);
            showToast('Tarefa criada com sucesso!', 'success');
        }

        fecharModalTarefa();
        await carregarTarefas();
    } catch (error) {
        console.error('Erro ao salvar tarefa:', error);
        showToast('Erro ao salvar tarefa', 'error');
    }
}

// Editar tarefa
async function editarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa) return;

    tarefaId.value = tarefa.id;
    tarefaTitulo.value = tarefa.titulo;
    tarefaDescricao.value = tarefa.descricao || '';
    tarefaPrioridade.value = tarefa.prioridade;
    
    document.getElementById('modalTarefaTitle').innerHTML = '<i class="fas fa-edit"></i> Editar Tarefa';
    modalTarefa.style.display = 'flex';
    tarefaTitulo.focus();
}

// Excluir tarefa
async function excluirTarefa(id) {
    if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

    try {
        await db.collection('kanban_tarefas').doc(id).delete();
        showToast('Tarefa excluída com sucesso!', 'success');
        await carregarTarefas();
    } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
        showToast('Erro ao excluir tarefa', 'error');
    }
}

// Atualizar contadores
function atualizarContadores() {
    const counts = {
        iniciar: tarefas.filter(t => t.status === 'iniciar').length,
        andamento: tarefas.filter(t => t.status === 'andamento').length,
        analisar: tarefas.filter(t => t.status === 'analisar').length,
        finalizado: tarefas.filter(t => t.status === 'finalizado').length
    };

    document.getElementById('countIniciar').textContent = counts.iniciar;
    document.getElementById('countAndamento').textContent = counts.andamento;
    document.getElementById('countAnalisar').textContent = counts.analisar;
    document.getElementById('countFinalizado').textContent = counts.finalizado;
}

// Limpar quadro
async function limparQuadro() {
    if (!confirm('Tem certeza que deseja limpar todo o quadro? Esta ação não pode ser desfeita.')) return;

    try {
        const batch = db.batch();
        const snapshot = await db.collection('kanban_tarefas')
            .where('userId', '==', user.uid)
            .get();

        snapshot.forEach(doc => {
            batch.delete(doc.ref);
        });

        await batch.commit();
        showToast('Quadro limpo com sucesso!', 'success');
        await carregarTarefas();
    } catch (error) {
        console.error('Erro ao limpar quadro:', error);
        showToast('Erro ao limpar quadro', 'error');
    }
}

// Todo List functions
async function adicionarTodo() {
    const texto = novaTarefaTodo.value.trim();
    if (!texto) return;

    try {
        await db.collection('kanban_todo').add({
            texto: texto,
            concluida: false,
            userId: user.uid,
            dataCriacao: new Date().toISOString()
        });

        novaTarefaTodo.value = '';
        await carregarTodoList();
        showToast('Tarefa adicionada!', 'success');
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
        showToast('Erro ao adicionar tarefa', 'error');
    }
}

function renderizarTodoList() {
    todoList.innerHTML = '';

    // Ordenar: não concluídas primeiro, depois concluídas
    const todoItemsOrdenados = [...todoItems].sort((a, b) => {
        if (a.concluida && !b.concluida) return 1; // a (concluída) vai depois
        if (!a.concluida && b.concluida) return -1; // a (não concluída) vai antes
        return new Date(a.dataCriacao) - new Date(b.dataCriacao); // ordenar por data
    });

    todoItemsOrdenados.forEach(item => {
        const todoItem = document.createElement('div');
        todoItem.className = `todo-item ${item.concluida ? 'concluida' : ''}`;
        todoItem.dataset.id = item.id;

        todoItem.innerHTML = `
            <div class="todo-checkbox ${item.concluida ? 'checked' : ''}">
                ${item.concluida ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <div class="todo-text">${item.texto}</div>
            <button class="todo-remove">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Eventos
        todoItem.querySelector('.todo-checkbox').addEventListener('click', () => toggleTodo(item.id));
        todoItem.querySelector('.todo-remove').addEventListener('click', () => removerTodo(item.id));

        todoList.appendChild(todoItem);
    });
}

async function toggleTodo(id) {
    const item = todoItems.find(i => i.id === id);
    if (!item) return;

    try {
        await db.collection('kanban_todo').doc(id).update({
            concluida: !item.concluida
        });

        await carregarTodoList();
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
        showToast('Erro ao atualizar tarefa', 'error');
    }
}

async function removerTodo(id) {
    try {
        await db.collection('kanban_todo').doc(id).delete();
        await carregarTodoList();
        showToast('Tarefa removida!', 'success');
    } catch (error) {
        console.error('Erro ao remover tarefa:', error);
        showToast('Erro ao remover tarefa', 'error');
    }
}

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

// ============================================
// SISTEMA DE SUPORTE - CADASTRO DE ERROS
// ============================================

// Função para gerar código automático no formato ERR0001
async function generateAutoCode() {
    try {
        const snapshot = await db.collection('erros_suporte')
            .orderBy('code', 'desc')
            .limit(1)
            .get();
        
        let nextNumber = 1;
        
        if (!snapshot.empty) {
            snapshot.forEach(doc => {
                const code = doc.data().code;
                if (code && code.startsWith('ERR')) {
                    const numStr = code.substring(3);
                    const num = parseInt(numStr);
                    if (!isNaN(num)) {
                        nextNumber = num + 1;
                    }
                }
            });
        }
        
        return `ERR${nextNumber.toString().padStart(4, '0')}`;
    } catch (error) {
        console.error("Erro ao gerar código automático:", error);
        // Fallback
        const snapshot = await db.collection('erros_suporte').get();
        return `ERR${(snapshot.size + 1).toString().padStart(4, '0')}`;
    }
}

// Função para capitalizar texto
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função para formatar data
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR') + ' às ' + 
           date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});
}

// Obter todos os registros
async function getAllRecordsSuporte() {
    try {
        const snapshot = await db.collection('erros_suporte')
            .orderBy('createdAt', 'desc')
            .get();
        
        const records = [];
        snapshot.forEach(doc => {
            records.push({ id: doc.id, ...doc.data() });
        });
        return records;
    } catch (error) {
        console.error("Erro ao carregar registros:", error);
        showToast('Erro ao carregar registros', 'error');
        return [];
    }
}

// Função para salvar registro - VERSÃO COM CONFIRMAÇÕES COMPLETAS
async function saveRecordSuporte(record) {
    try {
        showToast('Salvando registro...', 'info');
        const currentDate = new Date().toISOString();
        const { id, ...dataToSave } = record;
        
        let recordData = {
            ...dataToSave,
            updatedAt: currentDate
        };

        if (id) {
            // EDITAR REGISTRO EXISTENTE
            const docAtual = await db.collection('erros_suporte').doc(id).get();
            const registroAtual = docAtual.data();
            const imagensAntigas = registroAtual.imagens || [];
            
            // Identificar imagens que foram removidas
            const imagensRemovidas = imagensAntigas.filter(imgAntiga => 
                !imagensSelecionadas.some(imgNova => imgNova.url === imgAntiga.url)
            );
            
            // Deletar imagens removidas do Storage
            if (imagensRemovidas.length > 0) {
                showToast(`Excluindo ${imagensRemovidas.length} imagem(ns) removida(s)...`, 'info');
                await deletarImagens(imagensRemovidas);
            }
            
            // Upload de novas imagens
            const novasImagens = [];
            const novasImagensCount = imagensSelecionadas.filter(img => !img.isExisting).length;
            
            if (novasImagensCount > 0) {
                showToast(`Enviando ${novasImagensCount} nova(s) imagem(ns)...`, 'info');
            }
            
            for (const imagem of imagensSelecionadas) {
                if (!imagem.isExisting) {
                    const imagemUploaded = await uploadImagem(id, imagem);
                    novasImagens.push(imagemUploaded);
                } else {
                    novasImagens.push(imagem);
                }
            }
            
            // Atualizar com as imagens finais
            recordData.imagens = novasImagens;
            await db.collection('erros_suporte').doc(id).update(recordData);
            
            showToast('Registro atualizado com sucesso!', 'success');
            return { id, ...recordData };
            
        } else {
            // NOVO REGISTRO
            const docRef = await db.collection('erros_suporte').add({
                ...recordData,
                createdAt: currentDate
            });
            
            // Upload de imagens para o novo registro
            if (imagensSelecionadas.length > 0) {
                showToast(`Enviando ${imagensSelecionadas.length} imagem(ns)...`, 'info');
                
                const imagens = [];
                for (const imagem of imagensSelecionadas) {
                    const imagemUploaded = await uploadImagem(docRef.id, imagem);
                    imagens.push(imagemUploaded);
                }
                
                await db.collection('erros_suporte').doc(docRef.id).update({
                    imagens: imagens
                });
                recordData.imagens = imagens;
            }
            
            showToast('Registro criado com sucesso!', 'success');
            return { 
                id: docRef.id, 
                ...recordData,
                createdAt: currentDate 
            };
        }
    } catch (error) {
        console.error("Erro ao salvar registro:", error);
        showToast(`Erro ao salvar registro: ${error.message}`, 'error');
        throw error;
    }
}

// Função para upload de uma única imagem - VERSÃO COM CONFIRMAÇÕES
async function uploadImagem(recordId, imagem) {
    try {
        // showToast(`Enviando imagem: ${imagem.nome}...`, 'info');
        
        const extensao = imagem.nome.split('.').pop();
        const nomeArquivo = `suporte/${recordId}/${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${extensao}`;
        const storageRef = storage.ref().child(nomeArquivo);
        
        const snapshot = await storageRef.put(imagem.file);
        const downloadURL = await snapshot.ref.getDownloadURL();
        
        // showToast(`Imagem ${imagem.nome} enviada com sucesso!`, 'success');
        
        return {
            nome: imagem.nome,
            url: downloadURL,
            caminho: nomeArquivo,
            tamanho: imagem.tamanho
        };
    } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
        showToast(`Erro ao enviar "${imagem.nome}": ${error.message}`, 'error');
        throw error;
    }
}

// Excluir registro
async function deleteRecordSuporte(id) {
    try {
        await db.collection('erros_suporte').doc(id).delete();
        return true;
    } catch (error) {
        console.error("Erro ao excluir registro:", error);
        throw error;
    }
}

// Pesquisar registros
async function searchRecordsSuporte(query) {
    try {
        const records = await getAllRecordsSuporte();
        if (!query) return records;
        
        const lowerQuery = query.toLowerCase();
        return records.filter(record => 
            record.code.toLowerCase().includes(lowerQuery) || 
            record.description.toLowerCase().includes(lowerQuery) ||
            (record.location && record.location.toLowerCase().includes(lowerQuery))
        );
    } catch (error) {
        console.error("Erro ao pesquisar registros:", error);
        return [];
    }
}

// Limitar o tamanho do texto exibido
const truncateText = (text, maxLength) => {
    if (!text) return 'Não informado';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

// Renderizar listagem
function renderTableSuporte(records) {
    const tbody = document.getElementById('errorsTableBody');
    const mobileList = document.getElementById('mobileErrorsList');
    const noResults = document.getElementById('noResultsSuporte');
    
    tbody.innerHTML = '';
    mobileList.innerHTML = '';
    
    if (records.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    records.forEach(record => {
        // Renderizar para desktop (tabela)
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${record.code}</td>
            <td>${truncateText(record.location, 20)}</td>
            <td>${truncateText(record.description, 50)}</td>
            <td>${truncateText(record.correction, 50)}</td>
            <td class="actions-cell">
                <button class="icon-btn view" data-id="${record.id}" title="Visualizar">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="icon-btn edit" data-id="${record.id}" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="icon-btn delete" data-id="${record.id}" title="Excluir">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
        
        // Renderizar para mobile (cards)
        const card = document.createElement('div');
        card.className = 'mobile-card';
        card.innerHTML = `
            <div class="card-field">
                <div class="card-label">Código</div>
                <div class="card-value">${record.code}</div>
            </div>
            <div class="card-field">
                <div class="card-label">Local</div>
                <div class="card-value">${record.location || 'Não informado'}</div>
            </div>
            <div class="card-field">
                <div class="card-label">Descrição do Erro</div>
                <div class="card-value">${record.description}</div>
            </div>
            <div class="card-field">
                <div class="card-label">Correção</div>
                <div class="card-value">${truncateText(record.correction, 100)}</div>
            </div>
            <div class="mobile-actions">
                <button class="icon-btn view" data-id="${record.id}" title="Visualizar">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="icon-btn edit" data-id="${record.id}" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="icon-btn delete" data-id="${record.id}" title="Excluir">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        mobileList.appendChild(card);
    });
    
    // Adicionar event listeners para os botões de ação
    attachEventListenersSuporte();
}

// Anexar event listeners aos botões
function attachEventListenersSuporte() {
    document.querySelectorAll('.icon-btn.view').forEach(btn => {
        btn.addEventListener('click', () => viewRecordSuporte(btn.getAttribute('data-id')));
    });
    
    document.querySelectorAll('.icon-btn.edit').forEach(btn => {
        btn.addEventListener('click', () => editRecordSuporte(btn.getAttribute('data-id')));
    });
    
    document.querySelectorAll('.icon-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => deleteRecordHandlerSuporte(btn.getAttribute('data-id')));
    });
}

// Visualizar registro - VERSÃO CORRIGIDA COM IMAGENS
async function viewRecordSuporte(id) {
    try {
        const doc = await db.collection('erros_suporte').doc(id).get();
        
        if (doc.exists) {
            const record = doc.data();
            
            // Preencher campos básicos
            document.getElementById('viewCode').textContent = record.code;
            document.getElementById('viewLocation').textContent = record.location || 'Não informado';
            document.getElementById('viewDescription').textContent = record.description;
            document.getElementById('viewCorrection').textContent = record.correction;
            document.getElementById('viewNotes').textContent = record.notes || 'Nenhuma anotação';
            document.getElementById('viewCreatedAt').textContent = formatDate(record.createdAt);
            document.getElementById('viewUpdatedAt').textContent = formatDate(record.updatedAt);
            
            // CORREÇÃO: Remover seção de imagens anterior se existir
            const existingImagesSection = document.getElementById('viewImagesSection');
            if (existingImagesSection) {
                existingImagesSection.remove();
            }
            
            // CORREÇÃO: Criar nova seção de imagens
            const viewContent = document.querySelector('.view-content');
            const imagesSection = document.createElement('div');
            imagesSection.className = 'view-field';
            imagesSection.id = 'viewImagesSection';
            
            let imagesHTML = '';
            if (record.imagens && record.imagens.length > 0) {
                imagesHTML = `
                    <div class="view-label"><i class="fas fa-images"></i> Imagens (${record.imagens.length})</div>
                    <div class="image-thumbs">
                        ${record.imagens.map((img, index) => `
                            <div class="image-thumb">
                                <img src="${img.url}" alt="${img.nome}" 
                                     onclick="expandViewImage('${img.url}')"
                                     style="cursor: pointer;">
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                imagesHTML = `
                    <div class="view-label"><i class="fas fa-images"></i> Imagens</div>
                    <div class="view-value">Nenhuma imagem anexada</div>
                `;
            }
            
            imagesSection.innerHTML = imagesHTML;
            viewContent.appendChild(imagesSection);
            
            // Armazenar o ID do registro para uso no botão "Editar"
            document.getElementById('viewModal').setAttribute('data-current-id', id);
            
            openViewModalSuporte();
        }
    } catch (error) {
        console.error("Erro ao visualizar registro:", error);
        showToast('Erro ao carregar registro', 'error');
    }
}

// Função para expandir imagem na visualização - VERSÃO CORRIGIDA
function expandViewImage(imageUrl) {
    const imageModal = document.getElementById('imageModal');
    const expandedImage = document.getElementById('expandedImage');
    const prevBtn = document.querySelector('.image-modal-prev');
    const nextBtn = document.querySelector('.image-modal-next');
    
    expandedImage.src = imageUrl;
    imageModal.style.display = 'flex';
    
    // CORREÇÃO: Esconder navegação na visualização (apenas uma imagem)
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    
    // CORREÇÃO: Fechar modal ao clicar no X ou fora da imagem
    const closeModal = () => {
        imageModal.style.display = 'none';
        // Restaurar navegação para quando for usado na edição
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    };
    
    document.querySelector('.image-modal-close').onclick = closeModal;
    imageModal.onclick = (e) => {
        if (e.target === imageModal) closeModal();
    };
}

// Manipulador para exclusão de registro
async function deleteRecordHandlerSuporte(id) {
    if (confirm('Tem certeza que deseja excluir este registro?')) {
        try {
            await deleteRecordSuporte(id);
            await carregarRegistrosSuporte();
            showToast('Registro excluído com sucesso!', 'success');
        } catch (error) {
            console.error("Erro ao excluir registro:", error);
            showToast('Erro ao excluir registro', 'error');
        }
    }
}

// Função para inicializar sistema de upload de imagens
function initializeImageUpload() {
    const imageUpload = document.getElementById('imageUpload');
    const imageUploadArea = document.getElementById('imageUploadArea');
    
    // Event listeners para upload
    imageUpload.addEventListener('change', handleImageSelect);
    
    imageUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        imageUploadArea.classList.add('dragover');
    });
    
    imageUploadArea.addEventListener('dragleave', () => {
        imageUploadArea.classList.remove('dragover');
    });
    
	// Modifique a parte do drag & drop na initializeImageUpload():
	imageUploadArea.addEventListener('drop', (e) => {
		e.preventDefault();
		imageUploadArea.classList.remove('dragover');
		handleImageSelect({ target: { files: e.dataTransfer.files } });
		// showToast('Imagens soltas com sucesso!', 'success');
	});
    
    // Modal de visualização
    const imageModal = document.getElementById('imageModal');
    const closeModal = imageModal.querySelector('.image-modal-close');
    
    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });
    
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
}

// Função para lidar com seleção de imagens - VERSÃO COM CONFIRMAÇÕES
function handleImageSelect(e) {
    const files = Array.from(e.target.files);
    
    // Verificar arquivos inválidos
    const invalidFiles = files.filter(file => 
        !file.type.startsWith('image/')
    );
    
    const largeFiles = files.filter(file => 
        file.size > MAX_TAMANHO_IMAGEM
    );
    
    const validFiles = files.filter(file => 
        file.type.startsWith('image/') && file.size <= MAX_TAMANHO_IMAGEM
    );
    
    // Mostrar alertas para arquivos problemáticos
    if (invalidFiles.length > 0) {
        showToast(`${invalidFiles.length} arquivo(s) ignorado(s) - apenas imagens são permitidas`, 'error');
    }
    
    if (largeFiles.length > 0) {
        showToast(`${largeFiles.length} imagem(s) muito grande(s) - máximo 2MB por imagem`, 'error');
    }
    
    if (validFiles.length === 0) {
        if (files.length > 0) {
            showToast('Nenhuma imagem válida selecionada', 'warning');
        }
        return;
    }
    
    if (imagensSelecionadas.length + validFiles.length > MAX_IMAGENS) {
        showToast(`Máximo de ${MAX_IMAGENS} imagens permitidas. Você já tem ${imagensSelecionadas.length} imagem(ns) selecionada(s).`, 'error');
        return;
    }
    
    let loadedCount = 0;
    validFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagensSelecionadas.push({
                file: file,
                url: e.target.result,
                nome: file.name,
                tamanho: file.size
            });
            loadedCount++;
            
            if (loadedCount === validFiles.length) {
                updateImagePreview();
                // showToast(`${validFiles.length} imagem(ns) adicionada(s) com sucesso!`, 'success');
            }
        };
        reader.onerror = () => {
            showToast(`Erro ao carregar a imagem ${file.name}`, 'error');
        };
        reader.readAsDataURL(file);
    });
    
    // Limpa o input para permitir selecionar as mesmas imagens novamente
    e.target.value = '';
}

// Função para atualizar a pré-visualização das imagens
function updateImagePreview() {
    const imagePreview = document.getElementById('imagePreview');
    const imageThumbs = document.getElementById('imageThumbs');
    const uploadStatus = document.getElementById('imageUploadStatus');
    
    imageThumbs.innerHTML = '';
    
    if (imagensSelecionadas.length === 0) {
        imagePreview.style.display = 'none';
        uploadStatus.textContent = 'Nenhuma imagem selecionada';
        return;
    }
    
    imagePreview.style.display = 'block';
    uploadStatus.textContent = `${imagensSelecionadas.length} de ${MAX_IMAGENS} imagens selecionadas`;
    
    imagensSelecionadas.forEach((imagem, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'image-thumb';
        thumb.innerHTML = `
            <img src="${imagem.url}" alt="${imagem.nome}">
            <button type="button" class="image-thumb-remove" data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Evento para visualizar imagem
        thumb.querySelector('img').addEventListener('click', () => {
            expandImage(index);
        });
        
        // Evento para remover imagem
        thumb.querySelector('.image-thumb-remove').addEventListener('click', (e) => {
            e.stopPropagation();
            removeImage(index);
        });
        
        imageThumbs.appendChild(thumb);
    });
}

// Função para remover imagem - VERSÃO COM CONFIRMAÇÕES VISUAIS
function removeImage(index) {
    const imagemRemovida = imagensSelecionadas[index];
    
    if (imagemRemovida.isExisting && imagemRemovida.caminho) {
        if (confirm('Tem certeza que deseja remover esta imagem? Esta ação não pode ser desfeita.')) {
            imagensSelecionadas.splice(index, 1);
            updateImagePreview();
            // showToast('Imagem removida da seleção. Será excluída permanentemente ao salvar.', 'warning');
        }
    } else {
        imagensSelecionadas.splice(index, 1);
        updateImagePreview();
        showToast('Imagem removida da seleção', 'info');
    }
}

// Função para expandir imagem
function expandImage(index) {
    const imageModal = document.getElementById('imageModal');
    const expandedImage = document.getElementById('expandedImage');
    const prevBtn = document.querySelector('.image-modal-prev');
    const nextBtn = document.querySelector('.image-modal-next');
    
    let currentIndex = index;
    
    function showImage() {
        expandedImage.src = imagensSelecionadas[currentIndex].url;
    }
    
    showImage();
    
    // Navegação
    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + imagensSelecionadas.length) % imagensSelecionadas.length;
        showImage();
    };
    
    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % imagensSelecionadas.length;
        showImage();
    };
    
    imageModal.style.display = 'flex';
}

// Função para fazer upload das imagens
async function uploadImagens(recordId) {
    const imagens = [];
    
    for (const imagem of imagensSelecionadas) {
        try {
            const extensao = imagem.nome.split('.').pop();
            const nomeArquivo = `suporte/${recordId}/${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${extensao}`;
            const storageRef = storage.ref().child(nomeArquivo);
            
            const snapshot = await storageRef.put(imagem.file);
            const downloadURL = await snapshot.ref.getDownloadURL();
            
            imagens.push({
                nome: imagem.nome,
                url: downloadURL,
                caminho: nomeArquivo,
                tamanho: imagem.tamanho
            });
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            showToast(`Erro ao enviar "${imagem.nome}"`, 'error');
        }
    }
    
    return imagens;
}

// Função para carregar imagens existentes - VERSÃO CORRIGIDA
function carregarImagensExistentes(imagens) {
    imagensSelecionadas = imagens.map(img => ({
        url: img.url,
        nome: img.nome,
        tamanho: img.tamanho,
        caminho: img.caminho, // ✅ AGORA INCLUI O CAMINHO
        isExisting: true // ✅ MARCA COMO IMAGEM EXISTENTE
    }));
    updateImagePreview();
}

// Função para deletar imagens do storage - VERSÃO COM CONFIRMAÇÕES
async function deletarImagens(imagens) {
    let deletedCount = 0;
    let errorCount = 0;
    
    for (const imagem of imagens) {
        try {
            await storage.ref().child(imagem.caminho).delete();
            deletedCount++;
            showToast(`Imagem ${imagem.nome} excluída permanentemente`, 'info');
        } catch (error) {
            console.error('Erro ao deletar imagem:', error);
            errorCount++;
            showToast(`Erro ao excluir "${imagem.nome}"`, 'error');
        }
    }
    
    if (deletedCount > 0) {
        showToast(`${deletedCount} imagem(ns) excluída(s) permanentemente do sistema`, 'success');
    }
    
    if (errorCount > 0) {
        showToast(`${errorCount} imagem(ns) não puderam ser excluídas`, 'warning');
    }
}

// Abrir modal para edição - MANTIDO (checkbox MARCADO e travado)
async function editRecordSuporte(id) {
    try {
        const doc = await db.collection('erros_suporte').doc(id).get();
        
        if (doc.exists) {
            const record = doc.data();
            
            document.getElementById('recordId').value = id;
            document.getElementById('code').value = record.code;
            document.getElementById('location').value = record.location || '';
            document.getElementById('description').value = record.description;
            document.getElementById('correction').value = record.correction;
            document.getElementById('notes').value = record.notes || '';
            
            // MANTIDO: Durante edição, checkbox MARCADO e travado
            const autoCodeCheckbox = document.getElementById('autoCode');
            const codeInput = document.getElementById('code');
            
            autoCodeCheckbox.checked = true; // MARCADO na edição
            autoCodeCheckbox.disabled = true; // Travado durante edição
            
            codeInput.disabled = true; // Código não editável
            codeInput.maxLength = 7;
            
            document.getElementById('codePreview').textContent = record.code;
            document.getElementById('autoCodeInfo').style.display = 'block';
            
            document.getElementById('modalTitle').innerHTML = '<i class="fas fa-edit"></i> Editar Registro';
            openModalSuporte();
        }
		
		// Carrega imagens existentes
		if (record.imagens && record.imagens.length > 0) {
			carregarImagensExistentes(record.imagens);
		} else {
			imagensSelecionadas = [];
			updateImagePreview();
		}

		// Inicializa o upload de imagens
		initializeImageUpload();
		
    } catch (error) {
        console.error("Erro ao carregar registro para edição:", error);
        showToast('Erro ao carregar registro', 'error');
    }
}

// Abrir modal para novo registro - VERSÃO CORRIGIDA (checkbox DESMARCADO por padrão)
async function newRecordSuporte() {
    document.getElementById('recordForm').reset();
    document.getElementById('recordId').value = '';
    
    // CONFIGURAÇÃO CORRIGIDA: Checkbox DESMARCADO por padrão
    const codeInput = document.getElementById('code');
    const autoCodeCheckbox = document.getElementById('autoCode');
    
    // NOVO: Checkbox DESMARCADO por padrão
    autoCodeCheckbox.checked = false;
    autoCodeCheckbox.disabled = false;
    
    // Configuração para código manual
    codeInput.value = '';
    codeInput.disabled = false;
    codeInput.maxLength = 15; // Limite de 15 caracteres para manual
    codeInput.placeholder = 'Digite o código (máx. 15 caracteres)';
    codeInput.focus(); // Foca no campo para digitação
    
    document.getElementById('autoCodeInfo').style.display = 'none';
    
    document.getElementById('modalTitle').innerHTML = '<i class="fas fa-plus-circle"></i> Novo Registro';
    openModalSuporte();
	
	// Limpa as imagens selecionadas
	imagensSelecionadas = [];
	updateImagePreview();

	// Inicializa o upload de imagens
	initializeImageUpload();
}

// Abrir modal de edição/criação
function openModalSuporte() {
    document.getElementById('recordModal').style.display = 'flex';
}

// Fechar modal de edição/criação
function closeModalSuporte() {
    document.getElementById('recordModal').style.display = 'none';
}

// Abrir modal de visualização
function openViewModalSuporte() {
    document.getElementById('viewModal').style.display = 'flex';
}

// Fechar modal de visualização
function closeViewModalSuporte() {
    document.getElementById('viewModal').style.display = 'none';
}

// Carregar registros
async function carregarRegistrosSuporte() {
    try {
        const records = await getAllRecordsSuporte();
        renderTableSuporte(records);
    } catch (error) {
        console.error("Erro ao carregar registros:", error);
    }
}

// Função para limpar imagens selecionadas - VERSÃO CORRIGIDA
function limparImagensSelecionadas() {
    // IMPORTANTE: Não deleta imagens existentes, apenas limpa a seleção atual
    imagensSelecionadas = imagensSelecionadas.filter(img => !img.isExisting);
    updateImagePreview();
}

// Função para inicializar sistema de suporte - VERSÃO MELHORADA
function initializeSuporteSystem() {
    // Event listeners
    document.getElementById('newRecordBtn').addEventListener('click', newRecordSuporte);
    
    document.getElementById('searchInputSuporte').addEventListener('input', async function() {
        const results = await searchRecordsSuporte(this.value);
        renderTableSuporte(results);
    });
    
	// CORREÇÃO: Inicializar sistema de imagens
    initializeImageUpload();
	
    // Controle do checkbox de código automático - MELHORADO
    document.getElementById('autoCode').addEventListener('change', async function() {
        const codeInput = document.getElementById('code');
        const autoCodeInfo = document.getElementById('autoCodeInfo');
        
        if (this.checked) {
            const autoCode = await generateAutoCode();
            codeInput.value = autoCode;
            codeInput.disabled = true;
            codeInput.maxLength = 7; // Mantém para código automático
            document.getElementById('codePreview').textContent = autoCode;
            autoCodeInfo.style.display = 'block';
        } else {
            codeInput.value = '';
            codeInput.disabled = false;
            codeInput.maxLength = 15; // NOVO: Limite de 15 caracteres para manual
            codeInput.focus();
            autoCodeInfo.style.display = 'none';
        }
    });
    
    // NOVO: Validação em tempo real para limite de caracteres
    document.getElementById('code').addEventListener('input', function() {
        if (!document.getElementById('autoCode').checked && this.value.length > 15) {
            this.value = this.value.substring(0, 15);
            showToast('Código limitado a 15 caracteres', 'warning');
        }
    });
    
    // Fechar modais
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            if (this.closest('#recordModal')) {
                closeModalSuporte();
            } else if (this.closest('#viewModal')) {
                closeViewModalSuporte();
            }
        });
    });
    
    document.getElementById('cancelBtn').addEventListener('click', function() {
		limparImagensSelecionadas();
		closeModalSuporte();
	});
	
	document.querySelector('#recordModal .close').addEventListener('click', function() {
		limparImagensSelecionadas();
		closeModalSuporte();
	});
	
    document.getElementById('closeViewBtn').addEventListener('click', closeViewModalSuporte);
    
    // Botão "Editar" no modal de visualização
    document.getElementById('editFromViewBtn').addEventListener('click', function() {
        const id = document.getElementById('viewModal').getAttribute('data-current-id');
        closeViewModalSuporte();
        editRecordSuporte(id);
    });
    
    // Salvar formulário
    document.getElementById('recordForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // NOVO: Validação final do código manual
        const codeValue = document.getElementById('code').value;
        const isAutoCode = document.getElementById('autoCode').checked;
        
        if (!isAutoCode && codeValue.length > 15) {
            showToast('Código não pode ter mais de 15 caracteres', 'error');
            return;
        }
        
        const record = {
            id: document.getElementById('recordId').value || null,
            code: codeValue,
            location: document.getElementById('location').value,
            description: document.getElementById('description').value,
            correction: document.getElementById('correction').value,
            notes: document.getElementById('notes').value
        };
        
        try {
            await saveRecordSuporte(record);
            await carregarRegistrosSuporte();
            closeModalSuporte();
            showToast('Registro salvo com sucesso!', 'success');
        } catch (error) {
            console.error("Erro ao salvar registro:", error);
            showToast('Erro ao salvar registro', 'error');
        }
    });
    
    // Fechar modais ao clicar fora deles
    window.addEventListener('click', function(e) {
        if (e.target === document.getElementById('recordModal')) {
            closeModalSuporte();
        } else if (e.target === document.getElementById('viewModal')) {
            closeViewModalSuporte();
        }
    });
}
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
