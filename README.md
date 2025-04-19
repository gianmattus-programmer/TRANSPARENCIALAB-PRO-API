# 🎨 TransparenciaLab Pro - Removedor de Fondos con IA

<div align="center">
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo-success" alt="Estado del Proyecto" />
  <img src="https://img.shields.io/badge/Versión-1.0.0-blue" alt="Versión" />
</div>

## 📝 Descripción

TransparenciaLab Pro es una aplicación web moderna que permite eliminar fondos de imágenes utilizando inteligencia artificial avanzada. Esta herramienta está diseñada para ser fácil de usar, rápida y eficiente, perfecta tanto para usuarios casuales como profesionales.

## ✨ Características Principales

- 🤖 Eliminación de fondos mediante IA avanzada
- 💫 Procesamiento en tiempo real
- 📱 Interfaz responsive y amigable
- 💾 Descarga inmediata de resultados
- 🔄 Vista previa en tiempo real
- 🎨 Múltiples formatos de exportación

## 🛠️ Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🚀 Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/gianmattus-programmer/TRANSPARENCIALAB-PRO-API.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd TRANSPARENCIALAB-PRO-API
   ```

3. Abre `index.html` en tu navegador o utiliza un servidor local.

## 💡 Cómo Usar

1. Haz clic en "Seleccionar Imagen" o arrastra una imagen
2. Espera mientras la IA procesa tu imagen
3. Previsualiza el resultado
4. Descarga tu imagen sin fondo

## 🔧 Configuración del Entorno

1. Copia el archivo `task1/js/config.example.js` a `task1/js/config.js`
2. Obtén una API key de [Remove.bg](https://www.remove.bg/)

### Configuración Local
3. Crea un archivo `.env` en la raíz del proyecto y añade tu API key:
   ```
   REMOVE_BG_API_KEY=tu_api_key_aqui
   ```

### Configuración en GitHub
Para configurar la API key en GitHub de forma segura:

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings" (Configuración)
3. En el menú lateral, busca "Secrets and variables" > "Actions"
4. Haz clic en "New repository secret"
5. Nombre: `REMOVE_BG_API_KEY`
6. Valor: Tu API key de Remove.bg
7. Haz clic en "Add secret"

La API key ahora estará segura y disponible para las GitHub Actions si las utilizas.

⚠️ IMPORTANTE: Nunca compartas o hagas commit de los archivos `config.js` y `.env`

## 📄 API Documentation

La API está disponible en `api/v1` con los siguientes endpoints:

- `POST /api/v1/remove-background`: Elimina el fondo de una imagen
- `GET /api/v1/status`: Verifica el estado del servicio

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz Fork del proyecto
2. Crea tu rama de características
3. Haz commit de tus cambios
4. Empuja a la rama
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Soporte

Si tienes problemas o sugerencias, por favor abre un issue en el repositorio.

---

⭐️ Si te gusta este proyecto, ¡no olvides darle una estrella!