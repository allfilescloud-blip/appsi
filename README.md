# Sistema de Atendimentos

Sistema para gerenciamento de chamados com integração ao Firebase e API Ideris.

## Configuração no GitHub

1. Faça o fork deste repositório
2. Configure os secrets no GitHub:
   - Vá em Settings > Secrets > Actions
   - Adicione os seguintes secrets:
     - `FIREBASE_API_KEY`
     - `FIREBASE_AUTH_DOMAIN`
     - `FIREBASE_PROJECT_ID`
     - `FIREBASE_STORAGE_BUCKET`
     - `FIREBASE_MESSAGING_SENDER_ID`
     - `FIREBASE_APP_ID`
     - `FIREBASE_MEASUREMENT_ID`
     - `IDERIS_PRIVATE_KEY`

3. Habilite o GitHub Pages:
   - Vá em Settings > Pages
   - Selecione a branch `main` e pasta `/ (root)`

## Desenvolvimento Local

Para desenvolvimento local, crie um arquivo `scripts/config.local.js` com:

```javascript
// Configurações locais para desenvolvimento
const firebaseConfig = {
    // suas configurações do Firebase
};

const PRIVATE_KEY = "sua-chave-ideris";