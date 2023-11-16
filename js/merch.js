// Selecciona los botones "Comprar ahora"
var comprarButtons = document.querySelectorAll('.btn-primary');

// Selecciona las cajas de entrada de cantidad y el selector de tamaño para el primer producto
var quantityInputs = [document.querySelector('#quantity'), document.querySelector('#quantity2')];
var sizeSelect = document.querySelector('#size');

// Inicializa el Modal de Bootstrap para el primer producto
var myModal = document.getElementById('myModal');
var modal = new bootstrap.Modal(myModal, {keyboard: false, backdrop: 'static'});

// Inicializa el Modal de Bootstrap para el segundo producto (Disco)
var discoModalElement = document.getElementById('discoModal');
var discoModal = new bootstrap.Modal(discoModalElement, {keyboard: false, backdrop: 'static'});

// Agrega un escuchador de eventos al botón "Comprar ahora" del primer producto
comprarButtons[0].addEventListener('click', function(event) {
    // Verifica si la caja de entrada de cantidad tiene un valor y si se ha seleccionado un tamaño
    if (!quantityInputs[0].value || !sizeSelect.value) {
        // Si no tiene un valor o no se ha seleccionado un tamaño, muestra una indicación visual
        alert('Por favor, selecciona una cantidad y una talla');
    } else {
        // Si tiene un valor y se ha seleccionado un tamaño, muestra el modal
        modal.show();
    }
});

// Agrega un escuchador de eventos al botón "Comprar ahora" del segundo producto
comprarButtons[1].addEventListener('click', function(event) {
    // Verifica si la caja de entrada de cantidad tiene un valor
    if (!quantityInputs[1].value) {
        // Si no tiene un valor, muestra una indicación visual
        alert('Por favor, selecciona una cantidad');
    } else {
        // Si tiene un valor, muestra el modal
        discoModal.show();
    }
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