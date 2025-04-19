// Configuración de ejemplo - Copiar este archivo como config.js y establecer los valores correctos
const config = {
    // Obtener tu API key de https://www.remove.bg/
    apiKey: process.env.REMOVE_BG_API_KEY || 'TU_API_KEY_AQUI'
};

// Exportar la configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.config = config;
}