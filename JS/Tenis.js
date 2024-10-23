const productosContainer = document.querySelector('.products');

function scrollLeft123() {
    productosContainer.scrollBy({
    left: -500, // Ajusta la cantidad de desplazamiento a la izquierda
    behavior: 'smooth' //Hace que el despazamiento sea mas "suave"
});
};

function scrollRight() {
    productosContainer.scrollBy({
        left: +500,
        behavior: 'smooth'
    });
};
