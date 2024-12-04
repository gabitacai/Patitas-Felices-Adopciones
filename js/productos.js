document.addEventListener("DOMContentLoaded", () => {
    let productos = [];

    // Cargar JSON
    fetch("../json/productos.json")
        .then(response => response.json())
        .then(data => {
            productos = data.productos;
            mostrarProductos(productos);
        })
        .catch(error => console.error("Error al cargar el JSON:", error));

    // Mostrar productos en el DOM
    function mostrarProductos(lista) {
        if (!Array.isArray(lista)) {             console.error("La lista de productos no es un array");             return; }
        const contenedor = document.getElementById("productos");
        contenedor.innerHTML = ""; // Limpiar contenido
        lista.forEach(producto => {
            const card = document.createElement("div");
            card.className = "prod-card";
            card.innerHTML = `
          <div class="card-prod" style="width: 18rem">
        <img
          src="${producto.img}"
          class="card-img-top"
          alt="${producto.alt}"
        />
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">
            ${producto.descripcion}
          </p>
          <div class="card-price">
          <span>$ ${producto.precio}</span>
          </div>
          <button class="btn-prod">Comprar</button>
        </div>
      </div>
        `;
            contenedor.appendChild(card);
        });
    }

    // Filtros y Ordenamiento
    const categoriaSelect = document.getElementById("categoria");
    const ordenSelect = document.getElementById("orden");

    categoriaSelect.addEventListener("change", aplicarFiltros);
    ordenSelect.addEventListener("change", aplicarFiltros);

    function aplicarFiltros() {
        let productosFiltrados = [...productos];

        // Filtro por categoría
        const categoria = categoriaSelect.value;
        if (categoria !== "todos") {
            productosFiltrados = productosFiltrados.filter(
                producto => producto.categoria === categoria
            );
        }

        // Ordenamiento
        const orden = ordenSelect.value;
        if (orden === "asc") {
            productosFiltrados.sort((a, b) => a.precio - b.precio);
        } else if (orden === "desc") {
            productosFiltrados.sort((a, b) => b.precio - a.precio);
        }

        mostrarProductos(productosFiltrados);
    }
});