
  const productos = [
  {
    nombre: "Semillas de Pasto",
    categoria: "Semillas",
    imagen: "/img/pasto.avif",
    descripcion: "Semillas de alta calidad para forraje y pastoreo.",
    precio: 18000
  },
  {
    nombre: "Fertilizante Orgánico",
    categoria: "Insumos Agrícolas",
    imagen: "/img/fertilizante.webp",
    descripcion: "Mejora la salud del suelo y estimula el crecimiento vegetal.",
    precio: 25000
  },
  {
    nombre: "Abono Bocashi",
    categoria: "Insumos Agrícolas",
    imagen: "/img/abono.jpg",
    descripcion: "Abono fermentado ideal para cultivos orgánicos.",
    precio: 20000
  },
  {
    nombre: "Plaguicida Natural",
    categoria: "Insumos Agrícolas",
    imagen: "/img/insecticidas.avif",
    descripcion: "Controla plagas sin dañar el medio ambiente.",
    precio: 12000
  },
  {
    nombre: "Concentrado para Ganado",
    categoria: "Productos para Animales",
    imagen: "/img/Concentradoganado.png",
    descripcion: "Nutrición balanceada para bovinos en producción.",
    precio: 45000
  },
  {
    nombre: "Vitaminas para Aves",
    categoria: "Productos para Animales",
    imagen: "/img/Vitaminasaves.webp",
    descripcion: "Mejora la salud y producción de tus aves.",
    precio: 10000
  },
  {
    nombre: "Guadaña Manual",
    categoria: "Herramientas y Equipos",
    imagen: "/img/Guadaña.webp",
    descripcion: "Ideal para cortar pasto en zonas rurales.",
    precio: 30000
  },
  {
    nombre: "Pulverizador de Mochila",
    categoria: "Herramientas y Equipos",
    imagen: "/img/Pulverizador.webp",
    descripcion: "Perfecto para aplicar líquidos en cultivos.",
    precio: 75000
  },
  {
    nombre: "Tierra Abonada",
    categoria: "Jardinería",
    imagen: "/img/Tierraabonada.jpeg",
    descripcion: "Ideal para plantas ornamentales y cultivos urbanos.",
    precio: 15000
  },
  {
    nombre: "Maceta de Barro",
    categoria: "Jardinería",
    imagen: "/img/Maceta.jpeg",
    descripcion: "Clásica y decorativa para todo tipo de plantas.",
    precio: 6000
  },
  {
    nombre: "Desparasitante Bovino",
    categoria: "Veterinaria",
    imagen: "/img/Desparasitante.webp",
    descripcion: "Eficaz contra parásitos internos y externos.",
    precio: 22000
  },
  {
    nombre: "Shampoo para Perros",
    categoria: "Veterinaria",
    imagen: "/img/Shampooperros.jpg",
    descripcion: "Limpia, protege y da brillo al pelaje.",
    precio: 8000
  }
];


  const contenedor = document.getElementById("lista-productos");
  const busqueda = document.getElementById("busqueda");
  const categoria = document.getElementById("categoria");

  function mostrarProductos(filtrados) {
    contenedor.innerHTML = "";
    if (filtrados.length === 0) {
      contenedor.innerHTML = "<p class='text-center'>No se encontraron productos.</p>";
      return;
    }
    filtrados.forEach(prod => {
      const col = document.createElement("div");
      col.classList.add("col-md-4", "mb-4");
      col.innerHTML = `
        <div class="card product-card">
          <img src="${prod.imagen}" alt="${prod.nombre}" class="card-img-top" onclick='verProducto(${JSON.stringify(prod)})'>
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.categoria}</p>
          </div>
        </div>
      `;
      contenedor.appendChild(col);
    });
  }

  function verProducto(prod) {
    document.getElementById("modalTitulo").textContent = prod.nombre;
    document.getElementById("modalImagen").src = prod.imagen;
    document.getElementById("modalDescripcion").textContent = prod.descripcion;
    document.getElementById("modalPrecio").textContent = prod.precio.toLocaleString();
    const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
    modal.show();
  }

  function filtrar() {
    const texto = busqueda.value.toLowerCase();
    const cat = categoria.value;
    const filtrados = productos.filter(p =>
      p.nombre.toLowerCase().includes(texto) &&
      (cat === "" || p.categoria === cat)
    );
    mostrarProductos(filtrados);
  }

  // Inicial
  mostrarProductos(productos);

  // Eventos
  busqueda.addEventListener("input", filtrar);
  categoria.addEventListener("change", filtrar);
