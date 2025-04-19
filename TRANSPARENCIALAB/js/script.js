let imageURL;
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const loader = document.getElementById('loader');
const previewContainer = document.getElementById('previewContainer');

// Prevenir comportamiento por defecto del drag and drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight drop zone when dragging over it
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
    dropZone.classList.add('bg-light');
}

function unhighlight(e) {
    dropZone.classList.remove('bg-light');
}

// Handle dropped files
dropZone.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

fileInput.addEventListener('change', function() {
    handleFiles(this.files);
});

function handleFiles(files) {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
        // Mostrar preview original
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('originalPreview').src = e.target.result;
        }
        reader.readAsDataURL(file);
        
        // Procesar imagen
        processImage(file);
    }
}

function processImage(file) {
    loader.style.display = 'block';
    dropZone.style.display = 'none';

    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': config.apiKey
        },
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        imageURL = url;
        document.getElementById('resultPreview').src = url;
        loader.style.display = 'none';
        previewContainer.style.display = 'block';
    })
    .catch(error => {
        alert('Error al procesar la imagen. Por favor, intenta de nuevo.');
        resetAll();
    });
}

function downloadFile() {
    const a = document.createElement('a');
    a.href = imageURL;
    a.download = 'imagen_sin_fondo.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function resetAll() {
    fileInput.value = '';
    previewContainer.style.display = 'none';
    dropZone.style.display = 'block';
    loader.style.display = 'none';
}