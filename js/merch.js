// seleccionar elementos bootstrap y js
var comprarButton = document.querySelector('.btn-primary');
var sizeSelect = document.querySelector('#size');
var quantityInput = document.querySelector('#quantity');
var myModal = document.getElementById('myModal');

// INICIAR MODAL
var modal = new bootstrap.Modal(myModal, {keyboard: false, backdrop: 'static'});

// EVENT LISTENER BOTON
comprarButton.addEventListener('click', function(event) {
    if (!sizeSelect.value || !quantityInput.value) {
        alert('Por favor, selecciona una talla y una cantidad');
    } else {
        modal.show();
    }
});

// INICIAR CARRUSEL
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
})