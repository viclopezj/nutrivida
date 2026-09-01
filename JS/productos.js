const productos = [
	{ nombre: "Martillo Schmidt 3", categoria: "manuales", marca: "Proceq", precio: 45000, disponibilidad: "web", img: "img/SCHMIDT.png" },
	{ nombre: "Martillo Schmidt HT-225", categoria: "brocas", marca: "Boart Longyear", precio: 52000, disponibilidad: "ambos", img: "img/SCHMIDT.png" },
	{ nombre: "Tricono Boart 8 1/2\"", categoria: "triconos", marca: "Boart Longyear", precio: 320000, disponibilidad: "tienda", img: "img/tricono.jpg" },
	{ nombre: "Tricono Sandvik 9 5/8\"", categoria: "triconos", marca: "Sandvik", precio: 410000, disponibilidad: "web", img: "img/tricono.jpg" },
	{ nombre: "Corona Diamantada NQ", categoria: "coronas", marca: "Boart Longyear", precio: 180000, disponibilidad: "ambos", img: "img/diamantada.png" },
	{ nombre: "Corona Diamantada HQ", categoria: "coronas", marca: "Sandvik", precio: 210000, disponibilidad: "web", img: "img/diamantada.png" },
	{ nombre: "Disco de Corte 14\"", categoria: "discos", marca: "Schmidt", precio: 25000, disponibilidad: "tienda", img: "img/diamantada.png" },
	{ nombre: "Disco de Corte 18\"", categoria: "discos", marca: "Sandvik", precio: 31000, disponibilidad: "web", img: "img/diamantada.png" },
	{ nombre: "Repuesto Estabilizador", categoria: "repuestos", marca: "Boart Longyear", precio: 15000, disponibilidad: "ambos", img: "img/tricono.jpg" },
	{ nombre: "Repuesto Rodamiento", categoria: "repuestos", marca: "Schmidt", precio: 9000, disponibilidad: "tienda", img: "img/SCHMIDT.png" },
	{ nombre: "Llave de Torque Manual", categoria: "manuales", marca: "Sandvik", precio: 38000, disponibilidad: "web", img: "img/SCHMIDT.png" },
	{ nombre: "Set Herramientas Manuales", categoria: "manuales", marca: "Boart Longyear", precio: 62000, disponibilidad: "ambos", img: "img/tricono.jpg" },
];

const PRODUCTOS_POR_PAGINA = 6;
let paginaActual = 1;

const grid = document.getElementById("productos-grid");
const paginacion = document.getElementById("paginacion");
const contador = document.getElementById("contador-resultados");

function obtenerFiltros(){
	const busqueda = document.getElementById("buscador").value.trim().toLowerCase();

	const categorias = Array.from(document.querySelectorAll(".chk-categoria:checked")).map(c => c.value);
	const marcas = Array.from(document.querySelectorAll(".chk-marca:checked")).map(c => c.value);
	const disponibilidad = Array.from(document.querySelectorAll(".chk-disp:checked")).map(c => c.value);

	const precioMin = parseFloat(document.getElementById("precio-min").value) || 0;
	const precioMax = parseFloat(document.getElementById("precio-max").value) || Infinity;

	const orden = document.getElementById("orden").value;

	return { busqueda, categorias, marcas, disponibilidad, precioMin, precioMax, orden };
}

function filtrarProductos(){
	const f = obtenerFiltros();

	let resultado = productos.filter(p => {
		const coincideBusqueda = p.nombre.toLowerCase().includes(f.busqueda);
		const coincideCategoria = f.categorias.length === 0 || f.categorias.includes(p.categoria);
		const coincideMarca = f.marcas.length === 0 || f.marcas.includes(p.marca);
		const coincidePrecio = p.precio >= f.precioMin && p.precio <= f.precioMax;
		const coincideDisponibilidad =
			f.disponibilidad.length === 0 ||
			f.disponibilidad.some(d => p.disponibilidad === d || p.disponibilidad === "ambos");

		return coincideBusqueda && coincideCategoria && coincideMarca && coincidePrecio && coincideDisponibilidad;
	});

	if (f.orden === "precio-asc") resultado.sort((a, b) => a.precio - b.precio);
	if (f.orden === "precio-desc") resultado.sort((a, b) => b.precio - a.precio);
	if (f.orden === "nombre") resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));

	return resultado;
}

function textoDisponibilidad(valor){
	if (valor === "web") return "Solo web";
	if (valor === "tienda") return "Solo tienda";
	return "Web y tienda";
}

function renderizarProductos(){
	const resultado = filtrarProductos();
	const totalPaginas = Math.max(1, Math.ceil(resultado.length / PRODUCTOS_POR_PAGINA));

	if (paginaActual > totalPaginas) paginaActual = totalPaginas;

	const inicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
	const productosPagina = resultado.slice(inicio, inicio + PRODUCTOS_POR_PAGINA);

	contador.textContent = resultado.length + " artículo(s) encontrado(s)";

	grid.innerHTML = "";
	productosPagina.forEach(p => {
		const tarjeta = document.createElement("article");
		tarjeta.className = "producto-tarjeta";
		tarjeta.innerHTML = `
			<img src="${p.img}" alt="${p.nombre}">
			<h3>${p.nombre}</h3>
			<p>Marca: ${p.marca}</p>
			<p class="producto-precio">$${p.precio.toLocaleString("es-CL")}</p>
			<span class="producto-disponibilidad">${textoDisponibilidad(p.disponibilidad)}</span>
		`;
		grid.appendChild(tarjeta);
	});

	renderizarPaginacion(totalPaginas);
}

function renderizarPaginacion(totalPaginas){
	paginacion.innerHTML = "";
	for (let i = 1; i <= totalPaginas; i++){
		const boton = document.createElement("button");
		boton.textContent = i;
		if (i === paginaActual) boton.classList.add("activo");
		boton.addEventListener("click", () => {
			paginaActual = i;
			renderizarProductos();
		});
		paginacion.appendChild(boton);
	}
}

document.getElementById("buscador").addEventListener("input", () => { paginaActual = 1; renderizarProductos(); });
document.getElementById("precio-min").addEventListener("input", () => { paginaActual = 1; renderizarProductos(); });
document.getElementById("precio-max").addEventListener("input", () => { paginaActual = 1; renderizarProductos(); });
document.getElementById("orden").addEventListener("change", renderizarProductos);

document.querySelectorAll(".chk-categoria, .chk-marca, .chk-disp").forEach(chk => {
	chk.addEventListener("change", () => { paginaActual = 1; renderizarProductos(); });
});

document.getElementById("limpiar-filtros").addEventListener("click", () => {
	document.getElementById("buscador").value = "";
	document.getElementById("precio-min").value = "";
	document.getElementById("precio-max").value = "";
	document.getElementById("orden").value = "relevancia";
	document.querySelectorAll(".chk-categoria, .chk-marca, .chk-disp").forEach(chk => chk.checked = false);
	paginaActual = 1;
	renderizarProductos();
});

renderizarProductos();
