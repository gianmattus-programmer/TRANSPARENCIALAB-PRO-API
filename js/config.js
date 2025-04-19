// ADVERTENCIA: En producción, esta API key debe ser manejada de forma segura a través de variables de entorno del servidor
const config = {
    apiKey: process.env.REMOVE_BG_API_KEY || 'reLjTRnZJcUxh6wqPKKpF5de'
};

// Exportar la configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.config = config;
}