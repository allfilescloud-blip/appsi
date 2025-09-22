// Configuração do Firebase - será preenchida pelo GitHub Actions
const firebaseConfig = {
    apiKey: "FIREBASE_API_KEY",
    authDomain: "FIREBASE_AUTH_DOMAIN",
    projectId: "FIREBASE_PROJECT_ID",
    storageBucket: "FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
    appId: "FIREBASE_APP_ID",
    measurementId: "FIREBASE_MEASUREMENT_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Configuração de persistência de autenticação
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .catch((error) => {
        console.error("Erro ao configurar persistência de autenticação:", error);
    });

// Configurações do Firestore para desenvolvimento
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.log("Modo desenvolvimento: Configurando Firestore para localhost");
    db.settings({
        host: "localhost:8080",
        ssl: false
    });
}

// Função auxiliar para converter timestamps do Firestore
const converter = {
    toFirestore: (data) => {
        // Converte datas para Timestamp do Firestore
        Object.keys(data).forEach((key) => {
            if (data[key] instanceof Date) {
                data[key] = firebase.firestore.Timestamp.fromDate(data[key]);
            }
        });
        return data;
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        // Converte Timestamps do Firestore para datas JavaScript
        Object.keys(data).forEach((key) => {
            if (data[key] instanceof firebase.firestore.Timestamp) {
                data[key] = data[key].toDate();
            }
        });
        return data;
    }
};

// Exportar funções úteis
function getCurrentTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
}

function getNewDocRef(collectionPath) {
    return db.collection(collectionPath).doc();
}

// Função para fazer upload de arquivo com progresso
function uploadFileWithProgress(file, path, onProgress, onComplete, onError) {
    const storageRef = storage.ref().child(path);
    const uploadTask = storageRef.put(file);

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (onProgress) onProgress(progress);
        },
        (error) => {
            console.error('Erro no upload:', error);
            if (onError) onError(error);
        },
        async () => {
            try {
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                if (onComplete) onComplete(downloadURL);
            } catch (error) {
                console.error('Erro ao obter URL de download:', error);
                if (onError) onError(error);
            }
        }
    );

    return uploadTask;
}

// Função para deletar arquivo do Storage
async function deleteFileFromStorage(filePath) {
    try {
        const fileRef = storage.ref().child(filePath);
        await fileRef.delete();
        return true;
    } catch (error) {
        console.error('Erro ao deletar arquivo:', error);
        return false;
    }
}

// Função para buscar documentos com paginação
async function getDocumentsWithPagination(collectionPath, limit = 10, startAfter = null, orderByField = 'dataCriacao', orderDirection = 'desc') {
    try {
        let query = db.collection(collectionPath)
            .orderBy(orderByField, orderDirection)
            .limit(limit);

        if (startAfter) {
            query = query.startAfter(startAfter);
        }

        const snapshot = await query.get();
        const documents = [];
        let lastVisible = null;

        snapshot.forEach(doc => {
            documents.push({ id: doc.id, ...doc.data() });
        });

        if (!snapshot.empty) {
            lastVisible = snapshot.docs[snapshot.docs.length - 1];
        }

        return { documents, lastVisible };
    } catch (error) {
        console.error('Erro ao buscar documentos:', error);
        throw error;
    }
}

// Função para executar operações em lote
async function executeBatchOperations(operations) {
    const batch = db.batch();
    
    operations.forEach(operation => {
        const { type, collection, id, data } = operation;
        const docRef = db.collection(collection).doc(id);
        
        switch (type) {
            case 'set':
                batch.set(docRef, data);
                break;
            case 'update':
                batch.update(docRef, data);
                break;
            case 'delete':
                batch.delete(docRef);
                break;
            default:
                console.warn('Tipo de operação não reconhecido:', type);
        }
    });
    
    try {
        await batch.commit();
        return true;
    } catch (error) {
        console.error('Erro ao executar operações em lote:', error);
        throw error;
    }
}

// Listeners globais para estado de autenticação
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('Usuário autenticado:', user.uid);
        // Disparar evento personalizado para notificar outros componentes
        window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user, loggedIn: true } }));
    } else {
        console.log('Usuário não autenticado');
        window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user: null, loggedIn: false } }));
    }
});

// Tratamento de erros global do Firestore
db.enablePersistence()
    .catch((err) => {
        if (err.code === 'failed-precondition') {
            console.warn('Persistência do Firestore falhou: Múltiplas abas abertas');
        } else if (err.code === 'unimplemented') {
            console.warn('Persistência do Firestore não é suportada pelo navegador');
        }
    });

// Exportar configurações e funções
window.firebaseConfig = {
    config: firebaseConfig,
    db,
    auth,
    storage,
    converter,
    utils: {
        getCurrentTimestamp,
        getNewDocRef,
        uploadFileWithProgress,
        deleteFileFromStorage,
        getDocumentsWithPagination,
        executeBatchOperations
    }
};

// Log para debug
console.log('Firebase configurado com sucesso. Modo:', 
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? 'Desenvolvimento' : 'Produção');