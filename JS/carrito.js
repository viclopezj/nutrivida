function obtenerCantidadCarrito() {
    return parseInt(localStorage.getItem("carritoCantidad")) || 0;
}

function actualizarContadorCarrito() {
    const contador = document.getElementById("carrito-num");
    if (contador) contador.textContent = obtenerCantidadCarrito();
}

function agregarAlCarrito(cantidad) {
    const nuevaCantidad = obtenerCantidadCarrito() + cantidad;
    localStorage.setItem("carritoCantidad", nuevaCantidad);
    actualizarContadorCarrito();
}

document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);
