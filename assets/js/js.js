// Seleccionar la imagen
var imagen = document.getElementById('imagen');

// Agregar un evento al hacer click en la imagen
imagen.addEventListener('click', function() {
    // Alternar la clase borde-rojo
    this.classList.toggle('borde-rojo');
});
