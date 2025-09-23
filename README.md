# Sistema de Atendimentos

Sistema completo para gerenciamento de chamados de atendimento ao cliente com integração ao **Firebase** e **API Ideris**.

---

## 📋 Funcionalidades

### 🎯 Gestão de Chamados
- **Criação de Chamados**: Formulário completo com validação.
- **Acompanhamento**: Histórico de interações em tempo real.
- **Status Dinâmico**: `Aberto`, `Em andamento`, `Revisão`, `Fechado`.
- **Filtros Avançados**: Por responsável, tipo, marketplace e status.
- **Busca Inteligente**: Por código ou número de pedido.

### 📎 Sistema de Upload de Arquivos
- **Anexos em Chamados**: Suporte a múltiplos arquivos.
- **Limites Configuráveis**: Máximo 3 arquivos, 5MB no total.
- **Drag & Drop**: Interface intuitiva para upload.
- **Visualização**: Lista de arquivos com informações de tamanho.
- **Download**: Acesso direto aos anexos.

### 📊 Dashboard em Tempo Real
- **Estatísticas**: Chamados abertos (hoje / semana / mês).
- **Métricas por Responsável**: Distribuição de carga de trabalho.
- **Integração Ideris**: Status de pedidos por marketplace.
- **Atualização Automática**: Dados atualizados a cada 15 minutos.

### 🔄 Integração Ideris
- **Consulta de Pedidos**: Status em tempo real.
- **Gestão de Estoque**: Consulta e atualização de SKUs.
- **Verificação de Pedidos**: Sistema de check-in com detecção de duplicidade.
- **Autenticação Automática**: Renovação de token a cada 7h48min.

### 👥 Sistema de Autenticação
- **Login Seguro**: Autenticação via Firebase Authentication.
- **Múltiplos Usuários**: Gestão de perfis e responsáveis.
- **Persistência**: Manutenção de sessão entre reloads.
- **Cadastro Controlado**: Opção para ocultar registro público.

### 📱 Interface Responsiva
- **Mobile-First**: Design adaptável a todos os dispositivos.
- **Acessibilidade**: Suporte a preferências de contraste e redução de movimento.
- **Dark Mode**: Suporte opcional ao tema escuro.

---

## 🚀 Tecnologias Utilizadas

**Frontend**: HTML5, CSS3 (Grid, Flexbox, Variáveis, Animações), JavaScript ES6+  
**Backend & Serviços**: Firebase Firestore, Authentication, Storage; Ideris API v3  
**UI/UX**: Font Awesome 6.4.0, Google Fonts, CSS Variables  
**Deploy & DevOps**: GitHub Pages, GitHub Actions, Environment Secrets

---

## 📦 Estrutura do Projeto

```
sistema-atendimentos/
├── index.html                 # Página principal SPA
├── styles/
│   └── main.css               # Estilos principais (35KB)
├── scripts/
│   ├── app.js                 # Lógica principal (800+ linhas)
│   ├── firebase-config.js     # Configuração Firebase
│   └── ideris-api.js          # Integração API Ideris
├── assets/
│   └── images/
│       └── favicon.ico        # Ícone do sistema
└── README.md                  # Documentação
```

---

## ⚙️ Configuração

### 1. Pré-requisitos
- Conta no **Firebase Console**.  
- Chave API do **Ideris**.  
- Repositório no **GitHub**.

### 2. Configuração do Firebase
1. Criar projeto no Firebase Console.  
2. Ativar serviços:
   - **Authentication** → Método: Email/Senha (ativar).  
   - **Cloud Firestore** → Modo: Produção (configurar regras).  
   - **Storage** → Configuração padrão (ajustar regras).  
3. Configurar regras de segurança conforme necessário.

#### Exemplo: Regras Firestore
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /chamados/{chamadoId} {
      allow read, write: if request.auth != null;
    }
    match /usuarios/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

#### Exemplo: Regras Storage
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /chamados/{chamadoId}/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. Configuração no GitHub
- Em **Settings > Secrets > Actions**, adicione os secrets necessários (ex.: `FIREBASE_API_KEY`, `FIREBASE_PROJECT_ID`, `IDERIS_PRIVATE_KEY`, etc.).  
- Configure **GitHub Pages**: Branch `main`, pasta `/` (root).

#### Tabela de exemplo para os Secrets
| Secret                    | Descrição                                | Onde obter                       |
|--------------------------:|------------------------------------------|----------------------------------|
| `FIREBASE_API_KEY`        | Chave pública do Firebase                | Firebase Console > Configuração  |
| `FIREBASE_AUTH_DOMAIN`    | Domínio de autenticação                   | Firebase Console                 |
| `FIREBASE_PROJECT_ID`     | ID do projeto                             | Firebase Console                 |
| `FIREBASE_STORAGE_BUCKET` | Bucket do storage                         | Firebase Console > Storage       |
| `FIREBASE_APP_ID`         | ID do app                                 | Firebase Console                 |
| `IDERIS_PRIVATE_KEY`      | Chave de API privada Ideris               | Painel Ideris > Configurações    |

### 4. Deploy Automático
O deploy é acionado automaticamente via GitHub Actions quando:
- Push para a branch `main`.  
- Secrets configurados corretamente.  
- Estrutura de arquivos válida.

---

## 🎯 Guia de Uso

### Primeiro Acesso
1. Acesse a URL do GitHub Pages do repositório.  
2. Clique em **"Clique aqui para cadastrar"** para criar a primeira conta (se habilitado).  
3. Faça login com email e senha.

### Criando um Chamado
- Clique em **"Novo Chamado"**.  
- Preencha os campos obrigatórios:
  - `pedido` (Número do pedido)  
  - `responsavel` (Responsável)  
  - `tipo` (Tipo de chamado)  
  - `titulo`, `descricao` (Assunto / Descrição)  
- Anexe arquivos (arrastar ou clicar).  
- Clique em **Salvar Chamado**.

### Gerenciando Chamados
- Use filtros por responsável, tipo, marketplace e status.  
- Busque por código ou número do pedido.  
- Abra o chamado para ver detalhes, adicionar interações ou anexos.  
- Altere o status entre `Aberto`, `Em andamento`, `Revisão`, `Fechado`.

### Sistema de Verificação
- Menu **Ferramentas > Verificação**.  
- Insira o código do pedido.  
- Escolha modo:
  - **Consulta API**: Busca completa via Ideris.  
  - **Verificação Local**: Checagem de duplicados locais.  
- Resultado: Lista com histórico e ações disponíveis.

### Gestão de Estoque
- Menu **Ferramentas > Estoque**.  
- Informe SKUs (separados por vírgula).  
- Consulte estoques atuais e atualize quantidades (se autorizado).

---

## 📊 Estrutura de Dados (exemplos)

### Coleção: `chamados`
```
{
  "codigo": "CH0001",
  "pedido": "12345",
  "titulo": "Problema com entrega",
  "tipo": "Devolução",
  "marketplace": "Mercado Livre",
  "status": "Aberto",
  "responsavel": "João Silva",
  "userId": "abc123",
  "dataAbertura": "2023-01-01T10:00:00Z",
  "dataUltimaAtualizacao": "2023-01-01T11:30:00Z",
  "descricao": "Descrição detalhada...",
  "anexos": [
    {
      "nome": "comprovante.pdf",
      "tamanho": 1024000,
      "url": "https://storage.com/...",
      "caminho": "chamados/CH0001/comprovante.pdf",
      "tipo": "chamado"
    }
  ],
  "interacoes": [
    {
      "data": "2023-01-01T10:00:00Z",
      "autor": "João Silva",
      "mensagem": "Chamado aberto",
      "anexos": []
    }
  ]
}
```

### Coleção: `usuarios`
```
{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "dataCriacao": "2023-01-01T10:00:00Z",
  "ultimoLogin": "2023-01-15T14:30:00Z",
  "ativo": true
}
```

---

## 🔧 Desenvolvimento Local

```
# Clonar repositório
git clone https://github.com/seu-usuario/sistema-atendimentos.git
cd sistema-atendimentos

# Criar arquivo de configuração local com as variáveis (exemplo)
echo '// Configurações locais para desenvolvimento
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "sua-app-id",
  measurementId: "G-XXXXXXXXXX"
};

const PRIVATE_KEY = "sua-chave-ideris";' > scripts/config.local.js

# Servidor de desenvolvimento
python -m http.server 8000
# ou
npx http-server -p 8000
# ou
php -S localhost:8000
```

Acesse: `http://localhost:8000`

---

## 🐛 Solução de Problemas

**Upload de Arquivos Não Funciona**  
- Verifique regras do Firebase Storage.  
- Confirme limite de 5MB não excedido.  
- Teste com arquivos menores.

**API Ideris Não Conecta**  
- Verifique o secret `IDERIS_PRIVATE_KEY`.  
- Teste a autenticação manualmente (curl / Postman).

**Dados Não Carregam**  
- Verifique as Firestore Rules.  
- Confirme que o usuário está autenticado.  
- Verifique erros no console do navegador.

**Logs de Depuração**
```
localStorage.setItem('debug', 'true');
location.reload();
```

---

## 📈 Monitoramento e Métricas

- **Tempo de Carregamento:** < 3s  
- **Tamanho Total:** ~500KB (otimizado)  
- **Compatibilidade:** Chrome, Firefox, Safari, Edge  
- **Dispositivos:** Desktop, Tablet, Mobile

**Performance**
- Leituras Firestore otimizadas com cache.  
- Uploads em paralelo com progresso no Storage.  
- Cache de pedidos Ideris: 15 minutos.  
- Funcionalidade básica offline disponível.

---

## 🔄 Atualizações e Manutenção

**Versionamento**
- Versão atual: `2.0.0`  
- Changelog mantido em GitHub Releases.  
- Backwards compatibility: prioridade.

**Backup**
```
# Backup automático do Firestore (configurar no Firebase Console)
# Exemplo: agendamento de exportações periódicas via Firebase/Cloud Functions ou Cloud Scheduler
```

---

## 🤝 Contribuição

**Fluxo recomendado**
1. Fork do projeto.  
2. Criar branch para feature: `git checkout -b feature/NovaFuncionalidade`.  
3. Commit das mudanças: `git commit -am 'Adiciona nova funcionalidade'`.  
4. Push para o branch: `git push origin feature/NovaFuncionalidade`.  
5. Abrir Pull Request.

**Padrões**
- HTML semântico e acessível.  
- CSS: metodologia BEM.  
- JavaScript: ES6+, async/await, tratamento de erros.  
- Commits: Conventional Commits.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para detalhes.

---

## 🆘 Suporte

**Canais**
- Documentação: este `README.md`.  
- Issues: GitHub Issues do repositório.  
- Email: `suporte@empresa.com`.

**SLA de Resposta**
- Crítico: 2 horas  
- Alta: 4 horas  
- Média: 24 horas  
- Baixa: 72 horas

---

**Última Atualização:** `2025-09-23`  
**Versão:** `2.0.0`  
**Desenvolvido por:** Equipe de Tecnologia  
**Status:** ✅ Produção
```
