const fila = document.querySelector(".contenedor--carousel");
const pelicula = document.querySelector(".pelicula");

const flechaIzquierda = document.getElementById("flecha--izquierda");
const flechaDerecha = document.getElementById("flecha--derecha");

// ? ------------- Event Listener flecha derecha -----------------

flechaDerecha.addEventListener ("click", () => {
    fila.scrollLeft += fila.offsetWidth;

})

// ? ------------- Event Listener flecha izquierda -----------------

flechaIzquierda.addEventListener ("click", () => {
    fila.scrollLeft -= fila.offsetWidth;

})