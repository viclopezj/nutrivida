const grid = document.getElementById("productos-grid");

function renderizarProductos(){
	grid.innerHTML = "";
	productos.forEach(p => {
		const tarjeta = document.createElement("article");
		tarjeta.className = "producto-tarjeta";
		tarjeta.innerHTML = `
			<a href="producto.html?id=${p.id}" class="producto-link">
				<img src="${p.imagenes[0]}" alt="${p.nombre}">
				<h3>${p.nombre}</h3>
			</a>
			<p class="producto-precio">${formatoPrecio(p.precio)}</p>
			<button class="btn-agregar" data-id="${p.id}">Añadir</button>
		`;
		grid.appendChild(tarjeta);
	});

	document.querySelectorAll(".btn-agregar").forEach(boton => {
		boton.addEventListener("click", () => {
			agregarAlCarrito(1);
			boton.textContent = "Añadido ✓";
			setTimeout(() => boton.textContent = "Añadir", 1000);
		});
	});
}

renderizarProductos();
