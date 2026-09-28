const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-manos.webp",
  },
];

/**
 * Mostrar un modal con el detalle de Producto
 * @method mostrarModal
 * @param num - Id del producto(const)
 */
mostrarModal = (num) => {
  document.getElementById("nombre-producto").innerText = productos[num].nombre;
  document.getElementById("descripcion-producto").innerText = productos[num].description;
  document.getElementById("modal").style.display = "block";
}

/**
 * Ocultar un modal con el detalle de Producto
 * @method cerrarModal
 */
cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
}

/**
 * Agregar al carrito(local storage) el id de un producto
 * @method agregarAlCarrito
 * @param num - Id del producto(const)
 */
agregarAlCarrito = (num) => {
  let carritoList = localStorage.getItem("carrito");
  console.log(carritoList);

  if(carritoList==[] || carritoList==null) {
    carritoList = [];
  }else{
    carritoList = JSON.parse(carritoList);

  }
  carritoList.push(num);
  console.log(carritoList);
  localStorage.setItem("carrito", JSON.stringify(carritoList));
  contarProductos();
}

/**
 * Mostrar el catalogo del producto en la seccion main
 * @method mostrarCatalogo
 * @param list - lista de productos(por defecto la lista completa)
 */
mostrarCatalogo = (list = productos) => {
  let contenido = "";

  list.forEach((producto, id) => {
    contenido += `
                <div>
                    <img src=" https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}" alt="${producto.nombre}" />
                    <h3>${producto.nombre}</h3>
                    <p>${formatPrice(producto.precio)}</p>
                    <button type="button" onclick="mostrarModal(${id})">Ver detalle de producto</button>
                    <button type="button" onclick="agregarAlCarrito(${id})">Agregar al Carrito</button>
                </div>`
  })

  document.getElementById("catalogo").innerHTML = contenido;
}

/**
 * Muestra dinamicamente los productos que estan en el localstorage
 * @method mostrarCarrito
 */
mostrarCarrito = () => {
  let carritoList = localStorage.getItem("carrito");
  let contenido = "";

  if(carritoList==null) {
    contenido = `<div>Su carrito de compras esta vacio</div>`;
  }else {

    carritoList = JSON.parse(carritoList);
    carritoList.forEach((num, id) => {
      contenido += `<div>
                  <h3>${productos[num].nombre}</h3>
                  <p>${formatPrice(productos[num].precio)}</p>
                  <button type="button" onclick="eliminarProducto(${id})">Eliminar Producto</button>
                  </div>`
    });

    contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar Carrito</button>`
  }

  document.getElementById("carrito").innerHTML = contenido;
}

/**
 * Borra del localstorage el elemento carrito y recarga la pagina
 * @method vaciarCarrito
 */
let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
}

/**
 * Elimina un producto del local storage seleccionado por el usuario
 * @method eliminarProducto
 * @param id - id(posicion) del producto en el local storage
 */
let eliminarProducto = (id) => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);

  carritoList.splice(id, 1);

  if(carritoList.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carritoList));
  }else{
    localStorage.removeItem("carrito");
  }
  window.location.reload();
}

/**
 * Filtra el catalogo de productos segun los valores ingresados por el usuario
 * @method filtrarProductos
 */
let filtrarProductos = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("price-min").value;
  let max = document.getElementById("price-max").value;
  let marca = document.getElementById("marca").value;
  let protec = document.getElementById("protectores").checked;
  let entren = document.getElementById("entrenamiento").checked;
  let dobok = document.getElementById("dobok").checked;
  let newLista = productos;

  if(searchWord){
    newLista = newLista.filter((prod) => prod.nombre.toLowerCase().includes(searchWord.toLowerCase()));
  }

  if(min){
    newLista = newLista.filter((prod) => prod.precio >= min);
  }

  if(max){
    newLista = newLista.filter((prod) => prod.precio <= max)
  }

  if(marca != "Todas"){
    newLista = newLista.filter((prod) => prod.marca == marca);
  }

  let category = []
  protec ? category.push("Protectores") : "";
  entren ? category.push("Entrenamiento") : "";
  dobok ? category.push("Dobok") : "";

  if(category.length > 0){
    newLista = newLista.filter((prod) => category.includes(prod.categoria));
  }

  mostrarCatalogo(newLista);
}

/**
 * Formatea el precio para que quede $ ##.###,##
 * @method filtrarProductos
 */
let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS"
  }).format(price);
}


let contarProductos = () => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);

  if(carritoList.length > 0) {
    document.getElementById("cant-prod").innerText = carritoList.length;
  }
}


let ordenarCatalogo = () => {
  const opt = document.getElementById("order").value;
  let newProductos;

  switch(opt){
    case "menor":
      newProductos = productos.sort((a,b) => a.precio - b.precio);
      break;

    case "mayor":
      newProductos = productos.sort((a,b) => b.precio - a.precio);
      break;

    case "a-z":
      newProductos = productos.sort((a,b) => {
        if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
          return -1;
        }else{
          return 1;
        }
      });
      break;

    case "z-a":
      newProductos = productos.sort((a,b) => {
        if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
          return -1;
        }else{
          return 1;
        }
      });
      break;

    default:
      newProductos = productos;
      break;


  }

  mostrarCatalogo(newProductos);
}