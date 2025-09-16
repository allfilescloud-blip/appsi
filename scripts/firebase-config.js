// Configuração do Firebase (será preenchida pelo GitHub Actions)
const firebaseConfig = {
    apiKey: "%%FIREBASE_API_KEY%%",
    authDomain: "%%FIREBASE_AUTH_DOMAIN%%",
    projectId: "%%FIREBASE_PROJECT_ID%%",
    storageBucket: "%%FIREBASE_STORAGE_BUCKET%%",
    messagingSenderId: "%%FIREBASE_MESSAGING_SENDER_ID%%",
    appId: "%%FIREBASE_APP_ID%%",
    measurementId: "%%FIREBASE_MEASUREMENT_ID%%"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();