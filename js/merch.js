// Selecciona los botones "Comprar ahora"
var comprarButtons = document.querySelectorAll('.btn-primary');

// Selecciona las cajas de entrada de cantidad y el selector de tamaño para el primer producto
var quantityInputs = [document.querySelector('#quantity'), document.querySelector('#quantity2')];
var sizeSelect = document.querySelector('#size');

// Inicializa el Modal de Bootstrap
var myModal = document.getElementById('myModal');
var modal = new bootstrap.Modal(myModal, {keyboard: false, backdrop: 'static'});

// Agrega un escuchador de eventos a cada botón "Comprar ahora"
comprarButtons.forEach(function(comprarButton, index) {
    comprarButton.addEventListener('click', function(event) {
        // Verifica si la caja de entrada de cantidad correspondiente tiene un valor
        if (!quantityInputs[index].value) {
            // Si no tiene un valor, muestra una indicación visual
            alert('Por favor, selecciona una cantidad');
        } else if (index === 0 && !sizeSelect.value) {
            // Si no se ha seleccionado un tamaño para el primer producto, muestra una indicación visual
            alert('Por favor, selecciona una talla');
        } else {
            // Si tiene un valor, muestra el modal
            modal.show();
        }
    });
});

// Inicializa los Carruseles de Bootstrap
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
})

var myCarousel2 = document.querySelector('#myCarousel2')
var carousel2 = new bootstrap.Carousel(myCarousel2, {
  interval: 2000,
  wrap: true
})