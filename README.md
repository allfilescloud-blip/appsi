Sistema de Atendimentos
Sistema completo para gerenciamento de chamados de atendimento ao cliente com integração ao Firebase e API Ideris.

📋 Funcionalidades
Gestão de Chamados: Criação, edição, acompanhamento e encerramento de chamados

Upload de Arquivos: Anexos em chamados e interações com limite de 3 arquivos (5MB total)

Dashboard: Estatísticas em tempo real com gráficos e métricas

Integração Ideris: Consulta de pedidos, estoque e verificação de status

Verificação de Duplicados: Modo local para verificação rápida sem consultar API

Autenticação: Sistema de login com múltiplos usuários e perfis

Responsivo: Interface adaptável para desktop, tablet e mobile

🚀 Tecnologias Utilizadas
Frontend: HTML5, CSS3, JavaScript (ES6+)

Backend: Firebase (Firestore, Auth, Storage)

API: Ideris API v3

Ícones: Font Awesome 6.4.0

Deploy: GitHub Pages + GitHub Actions

📦 Estrutura do Projeto
text
sistema-atendimentos/
├── index.html          # Página principal
├── styles/
│   └── main.css       # Estilos principais
├── scripts/
│   ├── app.js         # Lógica principal da aplicação
│   ├── firebase-config.js # Configuração do Firebase
│   ├── ideris-api.js  # Integração com API Ideris
│   └── config.local.js # Configuração local (opcional)
├── assets/
│   └── images/
│       └── favicon.ico # Ícone do site
└── README.md          # Documentação
⚙️ Configuração
1. Configuração no GitHub
Faça o fork deste repositório

Configure os secrets no GitHub:

Vá em Settings > Secrets > Actions

Adicione os seguintes secrets:

FIREBASE_API_KEY

FIREBASE_AUTH_DOMAIN

FIREBASE_PROJECT_ID

FIREBASE_STORAGE_BUCKET

FIREBASE_MESSAGING_SENDER_ID

FIREBASE_APP_ID

FIREBASE_MEASUREMENT_ID

IDERIS_PRIVATE_KEY

Habilite o GitHub Pages:

Vá em Settings > Pages

Selecione a branch main e pasta / (root)

2. Configuração do Firebase
Crie um projeto no Firebase Console

Ative os serviços:

Authentication: Método Email/Senha

Firestore Database: Modo de produção

Storage: Configuração padrão

Configure as regras de segurança:

Firestore Rules:

javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permissões para coleção de chamados
    match /chamados/{chamadoId} {
      allow read, write: if request.auth != null;
    }
    
    // Permissões para coleção de usuários
    match /usuarios/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
Storage Rules:

javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /chamados/{chamadoId}/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
3. Configuração da API Ideris
Obtenha a chave API da Ideris

Adicione a chave como secret IDERIS_PRIVATE_KEY no GitHub

A API estará disponível após o primeiro login

🎯 Guia de Uso
Login e Primeiro Acesso
Acesse o sistema pela URL do GitHub Pages

Crie a primeira conta com o botão "Clique aqui para cadastrar"

Faça login com email e senha

Criando um Chamado
Clique em "Novo Chamado" na página de listagem

Preencha os campos obrigatórios:

Número do pedido

Responsável

Tipo de chamado

Assunto e descrição

Adicione anexos se necessário (arraste ou clique para selecionar)

Clique em "Salvar Chamado"

Gerenciando Chamados
Filtros: Use os filtros por responsável, tipo, marketplace ou status

Busca: Pesquise por código ou número de pedido

Ações: Clique em um chamado para ver detalhes, adicionar interações ou anexos

Integração Ideris
Dashboard: Veja estatísticas de pedidos em tempo real

Estoque: Consulte e atualize estoques de SKUs

Verificação: Verifique status de pedidos individualmente

Verificação de Duplicados
Acesse a página "Verificação" no menu Ferramentas

Digite o código do pedido

Marque "Verificar apenas duplicados" para modo rápido local

Clique em "Buscar" para verificar

Modos de Verificação:

Modo API: Consulta completa na Ideris (requer autenticação)

Modo Local: Verificação rápida de duplicados sem internet

🔧 Desenvolvimento Local
Para desenvolvimento local, crie um arquivo scripts/config.local.js com:

javascript
// Configurações locais para desenvolvimento
const firebaseConfig = {
    apiKey: "sua-api-key",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.firebasestorage.app",
    messagingSenderId: "123456789",
    appId: "sua-app-id",
    measurementId: "G-XXXXXXXXXX"
};

const PRIVATE_KEY = "sua-chave-ideris";
📊 Estrutura de Dados
Coleção: chamados
javascript
{
  codigo: "CH0001",           // Código sequencial
  pedido: "12345",            // Número do pedido
  titulo: "Problema com...",  // Assunto do chamado
  tipo: "Devolução",          // Tipo de chamado
  marketplace: "Mercado Livre", // Marketplace relacionado
  status: "Aberto",           // Status: Aberto/Em andamento/Revisão/Fechado
  responsavel: "João Silva",  // Responsável pelo chamado
  dataAbertura: "2023-01-01T10:00:00Z", // Data de criação
  descricao: "Descrição detalhada...", // Descrição inicial
  userId: "abc123",           // ID do usuário que criou
  interacoes: [               // Histórico de interações
    {
      data: "2023-01-01T10:00:00Z",
      autor: "João Silva",
      mensagem: "Chamado aberto",
      anexos: [] // Array de anexos
    }
  ],
  anexos: [                   // Anexos do chamado
    {
      nome: "arquivo.pdf",
      tamanho: 1024,
      url: "https://...",
      caminho: "chamados/CH0001/arquivo.pdf",
      tipo: "chamado"
    }
  ]
}
Coleção: usuarios
javascript
{
  nome: "João Silva",         // Nome completo
  email: "joao@empresa.com",  // Email de login
  dataCriacao: "2023-01-01T10:00:00Z", // Data de cadastro
  ultimoLogin: "2023-01-15T14:30:00Z"  // Último acesso
}
🎮 Funcionalidades de Verificação
Modo de Operação
🌐 Modo API: Consulta completa na Ideris (status real)

🔍 Modo Local: Verificação rápida de duplicados

Tipos de Duplicação Detectados
Código Duplicado: Mesmo número de pedido

Delivery Duplicado: Mesmo código de entrega

Pagamento Cancelado: Status específico da Ideris

Visualização
✅ Verde: Não duplicado

⚠️ Amarelo: Código duplicado

❌ Vermelho: Delivery duplicado

🔵 Azul: Consulta API completa

🐛 Solução de Problemas
Upload de Arquivos Não Funciona
Verifique as regras do Firebase Storage

Confirme que o tamanho total não excede 5MB

Verifique se há no máximo 3 arquivos

API Ideris Não Conecta
Verifique se a chave API está correta

Confirme se o secret IDERIS_PRIVATE_KEY foi configurado

Erro de Autenticação
Verifique se o Authentication está ativo no Firebase

Confirme se o método Email/Senha está habilitado

Dados Não Carregam
Verifique as regras do Firestore

Confirme a conexão com a internet

Verificação de Duplicados Não Funciona
Certifique-se de que há pedidos na lista para comparar

Verifique se o código foi digitado corretamente

📈 Melhorias Futuras
Notificações por email

Relatórios em PDF

API REST para integrações

App mobile

Sistema de prioridades

Tempo de resolução (SLA)

Exportação de dados

Backup automático

Logs de auditoria

🤝 Contribuição
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

Padrões de Código
Use ESLint para verificação de código

Mantenha a consistência de estilo

Documente novas funcionalidades

Teste em múltiplos navegadores

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

🆘 Suporte
Para dúvidas ou problemas:

Verifique a documentação acima

Consulte as issues do GitHub

Entre em contato com a equipe de desenvolvimento

Canais de Suporte
Issues GitHub: Para bugs e melhorias

Email: suporte@empresa.com

Documentação: Wiki do projeto

🔄 Atualizações Recentes
Versão 2.1.0
✅ Adicionada verificação local de duplicados

✅ Melhorias de desempenho na consulta API

✅ Interface redesenhada para verificação

✅ Novos indicadores visuais

✅ Tooltips informativos

Versão 2.0.0
✅ Sistema completo de upload de arquivos

✅ Integração com Firebase Storage

✅ Dashboard com estatísticas em tempo real

✅ Sistema de autenticação robusto

✅ Design responsivo completo

Versão: 2.1.0
Última atualização: 2023
Desenvolvido por: Equipe de Tecnologia
Status: Produção ✅

Links Úteis:

Aplicação

Documentação

Issues

Releases
