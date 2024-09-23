// Seleccionar la imagen
var imagen = document.getElementById('imagen');

// Agregar un evento al hacer click en la imagen
imagen.addEventListener('click', function() {
    // Alternar la clase borde-rojo
    this.classList.toggle('borde-rojo');
});

function calcularStickers() {
    // Obtener los valores de los inputs
    const cantidad1 = parseInt(document.getElementById('sticker1').value) || 0;
    const cantidad2 = parseInt(document.getElementById('sticker2').value) || 0;
    const cantidad3 = parseInt(document.getElementById('sticker3').value) || 0;

    // Sumar las cantidades
    const total = cantidad1 + cantidad2 + cantidad3;

    // Referencia al párrafo de resultado
    const resultado = document.getElementById('resultado');

    // Verificar si la cantidad es válida o excede el límite
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Llevas demasiados stickers';
        resultado.style.color = 'red';
    }
}