const grid = document.getElementById("productos-grid");

function renderizarProductos(){
    grid.innerHTML = "";
    productos.forEach(p => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto-tarjeta";
        tarjeta.innerHTML = `
            <a href="producto.html?id=${p.id}" class="producto-link">
                <div class="producto-imagen">
                    <img src="${p.imagenes[0]}" alt="${p.nombre}">
                </div>
                <div class="producto-info">
                    <span class="producto-categoria">${p.categoria}</span>
                    <h3>${p.nombre}</h3>
                    <p class="producto-descripcion">${p.descripcion}</p>
                </div>
            </a>
            <div class="producto-pie">
                <p class="producto-precio">${formatoPrecio(p.precio)}</p>
                <button class="btn-agregar" data-id="${p.id}">Añadir</button>
            </div>
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