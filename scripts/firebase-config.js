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

// Funções específicas para o sistema de suporte
async function initializeSuporteDatabase() {
    try {
        // Verificar se a coleção existe e criar alguns dados de exemplo se estiver vazia
        const snapshot = await db.collection('erros_suporte').limit(1).get();
        
        if (snapshot.empty) {
            console.log('Inicializando banco de dados de suporte com dados de exemplo...');
            const currentDate = new Date().toISOString();
            
            const initialData = [];
            
            // Adicionar dados iniciais em lote
            const batch = db.batch();
            initialData.forEach(record => {
                const docRef = db.collection('erros_suporte').doc();
                batch.set(docRef, record);
            });
            
            await batch.commit();
            console.log('Dados iniciais de suporte adicionados com sucesso');
        }
    } catch (error) {
        console.error('Erro ao inicializar banco de dados de suporte:', error);
    }
}

// Função para buscar estatísticas do sistema de suporte
async function getSuporteStats() {
    try {
        const snapshot = await db.collection('erros_suporte').get();
        const totalRecords = snapshot.size;
        
        // Agrupar por localização
        const locations = {};
        snapshot.forEach(doc => {
            const data = doc.data();
            const location = data.location || 'Não especificado';
            if (!locations[location]) {
                locations[location] = 0;
            }
            locations[location]++;
        });
        
        return {
            totalRecords,
            locations,
            lastUpdate: new Date().toISOString()
        };
    } catch (error) {
        console.error('Erro ao buscar estatísticas de suporte:', error);
        return {
            totalRecords: 0,
            locations: {},
            lastUpdate: new Date().toISOString()
        };
    }
}

// Função para backup de dados
async function createBackup(collectionName) {
    try {
        const snapshot = await db.collection(collectionName).get();
        const backupData = [];
        
        snapshot.forEach(doc => {
            backupData.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        // Criar arquivo de backup
        const backupBlob = new Blob([JSON.stringify(backupData, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(backupBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `backup_${collectionName}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return true;
    } catch (error) {
        console.error('Erro ao criar backup:', error);
        return false;
    }
}

// Função para restaurar dados
async function restoreBackup(collectionName, backupData) {
    try {
        if (!Array.isArray(backupData)) {
            throw new Error('Dados de backup inválidos');
        }
        
        const batch = db.batch();
        let operationCount = 0;
        
        for (const item of backupData) {
            const docRef = db.collection(collectionName).doc(item.id);
            const { id, ...data } = item;
            batch.set(docRef, data);
            operationCount++;
            
            // Firebase limita batches a 500 operações
            if (operationCount >= 500) {
                await batch.commit();
                operationCount = 0;
                // Criar novo batch
                batch = db.batch();
            }
        }
        
        // Commit do batch final
        if (operationCount > 0) {
            await batch.commit();
        }
        
        return true;
    } catch (error) {
        console.error('Erro ao restaurar backup:', error);
        throw error;
    }
}

// Funções de utilidade para o sistema de chamados
async function getChamadosStats() {
    try {
        const snapshot = await db.collection('chamados').get();
        const stats = {
            total: snapshot.size,
            abertos: 0,
            pendentes: 0,
            revisao: 0,
            fechados: 0,
            porResponsavel: {},
            porTipo: {},
            porMarketplace: {}
        };
        
        snapshot.forEach(doc => {
            const data = doc.data();
            
            // Contar por status
            if (data.status === 'Aberto') stats.abertos++;
            else if (data.status === 'Pendente') stats.pendentes++;
            else if (data.status === 'Revisão') stats.revisao++;
            else if (data.status === 'Fechado') stats.fechados++;
            
            // Contar por responsável
            const responsavel = data.responsavel || 'Não atribuído';
            if (!stats.porResponsavel[responsavel]) {
                stats.porResponsavel[responsavel] = 0;
            }
            stats.porResponsavel[responsavel]++;
            
            // Contar por tipo
            const tipo = data.tipo || 'Não especificado';
            if (!stats.porTipo[tipo]) {
                stats.porTipo[tipo] = 0;
            }
            stats.porTipo[tipo]++;
            
            // Contar por marketplace
            const marketplace = data.marketplace || 'N/A';
            if (!stats.porMarketplace[marketplace]) {
                stats.porMarketplace[marketplace] = 0;
            }
            stats.porMarketplace[marketplace]++;
        });
        
        return stats;
    } catch (error) {
        console.error('Erro ao buscar estatísticas de chamados:', error);
        return null;
    }
}

// Função para buscar métricas de performance
async function getPerformanceMetrics() {
    try {
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        
        // Buscar chamados da última semana
        const weeklySnapshot = await db.collection('chamados')
            .where('dataAbertura', '>=', oneWeekAgo.toISOString())
            .get();
        
        // Buscar chamados do último mês
        const monthlySnapshot = await db.collection('chamados')
            .where('dataAbertura', '>=', oneMonthAgo.toISOString())
            .get();
        
        const metrics = {
            weekly: {
                total: weeklySnapshot.size,
                abertos: 0,
                resolvidos: 0
            },
            monthly: {
                total: monthlySnapshot.size,
                abertos: 0,
                resolvidos: 0
            },
            avgResolutionTime: 0
        };
        
        // Calcular métricas semanais
        weeklySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.status === 'Fechado') {
                metrics.weekly.resolvidos++;
            } else {
                metrics.weekly.abertos++;
            }
        });
        
        // Calcular métricas mensais
        monthlySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.status === 'Fechado') {
                metrics.monthly.resolvidos++;
            } else {
                metrics.monthly.abertos++;
            }
        });
        
        return metrics;
    } catch (error) {
        console.error('Erro ao buscar métricas de performance:', error);
        return null;
    }
}

// Listeners globais para estado de autenticação
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('Usuário autenticado:', user.uid);
        // Disparar evento personalizado para notificar outros componentes
        window.dispatchEvent(new CustomEvent('authStateChanged', { detail: { user, loggedIn: true } }));
        
        // Inicializar banco de dados de suporte quando usuário fizer login
        initializeSuporteDatabase();
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
        executeBatchOperations,
        initializeSuporteDatabase,
        getSuporteStats,
        createBackup,
        restoreBackup,
        getChamadosStats,
        getPerformanceMetrics
    }
};

// Log para debug
console.log('Firebase configurado com sucesso. Modo:', 
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? 'Desenvolvimento' : 'Produção');
