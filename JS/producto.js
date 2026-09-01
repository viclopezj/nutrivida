const params = new URLSearchParams(window.location.search);
const idProducto = parseInt(params.get("id")) || 1;
const producto = productos.find(p => p.id === idProducto) || productos[0];

document.getElementById("nombre-producto").textContent = producto.nombre;
document.getElementById("categoria-producto").textContent = producto.categoria;
document.title = producto.nombre + " - NutriVida";
document.getElementById("precio-producto").textContent = formatoPrecio(producto.precio);
document.getElementById("descripcion-producto").textContent = producto.descripcion;

const imagenPrincipal = document.getElementById("imagen-principal");
const miniaturas = document.getElementById("miniaturas");

imagenPrincipal.src = producto.imagenes[0];
imagenPrincipal.alt = producto.nombre;

producto.imagenes.forEach((src, index) => {
	const miniatura = document.createElement("img");
	miniatura.src = src;
	miniatura.alt = producto.nombre + " vista " + (index + 1);
	if (index === 0) miniatura.classList.add("activa");

	function cambiarImagen(){
		imagenPrincipal.src = src;
		miniaturas.querySelectorAll("img").forEach(img => img.classList.remove("activa"));
		miniatura.classList.add("activa");
	}

	// En el producto marcado como hoverSwap, la imagen cambia solo al pasar el cursor
	if (producto.hoverSwap) {
		miniatura.addEventListener("mouseover", cambiarImagen);
	} else {
		miniatura.addEventListener("click", cambiarImagen);
	}

	miniaturas.appendChild(miniatura);
});

document.getElementById("btn-agregar-carrito").addEventListener("click", () => {
	const cantidad = parseInt(document.getElementById("cantidad-producto").value) || 1;
	agregarAlCarrito(cantidad);
	const mensaje = document.getElementById("mensaje-agregado");
	mensaje.textContent = "Se añadió " + cantidad + " producto(s) al carrito.";
	setTimeout(() => mensaje.textContent = "", 2000);
});

// Productos relacionados: el resto del catálogo, sin el producto actual
const relacionados = document.getElementById("relacionados-grid");
productos.filter(p => p.id !== producto.id).slice(0, 4).forEach(p => {
	const tarjeta = document.createElement("a");
	tarjeta.className = "relacionado-tarjeta";
	tarjeta.href = "producto.html?id=" + p.id;
	tarjeta.innerHTML = `
		<img src="${p.imagenes[0]}" alt="${p.nombre}">
		<h4>${p.nombre}</h4>
		<p>${formatoPrecio(p.precio)}</p>
	`;
	relacionados.appendChild(tarjeta);
});
