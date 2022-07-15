const productos = [
    {
        id: 1,
        nombre: "CUARZO ROSA",
        precio: 650,
        imagen: "images/cuarzo-rosa.jpg"
    }, 
    {
        id: 2,
        nombre: "AMATISTA",
        precio: 680,
        imagen: "images/amatista.jpg"
    }, 
    {
        id: 3,
        nombre: "CUARZO CRISTAL",
        precio: 630,
        imagen: "images/cuarzo-cristal.jpg"
    }, 
    {
        id: 4,
        nombre: "VELA DRAMA",
        precio: 580,
        imagen: "images/velas1.jpg"
    }, 
    {
        id: 5,
        nombre: "VELA ROSE",
        precio: 590,
        imagen: "images/velas2.jpg"
    }, 
    {
        id: 6,
        nombre: "VELA AWESOME",
        precio: 560,
        imagen: "images/velas3.jpg"
    },  
]


  
  
// mostrar los productos en el html con DOM

const divProductos = document.getElementById("productos")

productos.forEach(producto => {
    
    divProductos.innerHTML += `
    <div id="productos" class="divPadre">
    <div class="card" style="width: 18rem; height: 25rem;">
    <img src="${producto.imagen}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title fw-light tituloProd"> ✧ ${producto.nombre} ✧</h5>
    <p class="card-text text-center textoProd">$${producto.precio}</p>
    <p class="btn text-center btnProd"> VER PRODUCTO </p>
    </div>
    </div>
    </div>
        
    `

}) 
  
// mostrar productos comprados
function mostrarProductos() {
    for (let i = 0; i < carrito.length; i++) {
      console.log(carrito[i]);
    }
}

  
// calcular el total
function calcularTotal() {
    for (let i = 0; i < carrito.length; i++) {
      let total = 0;
      for (let j = 0; j < carrito.length; j++) {
        total += carrito[j][0].precio;
      }
      console.log(`El total de la compra es: $${total}`);
    }
}


  
//buscar productos
  
function buscarProducto(productos) {
  
    let ingresoProductos = prompt(
    `Ingrese el producto que desea buscar`)
  
    let productoBuscado = productos.find(producto => producto.nombre == ingresoProductos)
  
  
    if(productoBuscado === undefined) {
       alert(`Lo sentimos, no pudimos encontrar el producto`)
    }
    else {
        console.log(productoBuscado)
    }
  
}
  
function buscarPrecio(productos) {
  
    let ingresoPrecio = parseInt(prompt(`Ingrese un precio maximo`))
    let precioBuscado = productos.some(producto => producto.precio <= ingresoPrecio)
  
    if(precioBuscado) {
        console.log(productos.filter(producto => producto.precio <= ingresoPrecio))
    }
    else {
        alert(`No se encontraron productos esas caracteristicas`);
    }
}
  
  
  
let productoCarrito, cantidad, consulta, busqueda
  
  
  // ingresar productos al carrito
const carrito = [];
  
cantidad = parseInt(prompt(`Cuantos productos desea?`))
  
for (let i = 0; i < cantidad; i++) {
    productoCarrito = parseInt(
        prompt(`Que producto/s desea? Escriba el numero correspondiente:
        1. CUARZO ROSA
        2. AMATISTA
        3. CUARZO CRISTAL
        4. VELA DRAMA
        5. VELA ROSE
        6. VELA AWESOME`)
    );

    const productoDeseado = productos.filter((producto) => producto.id === productoCarrito);
    carrito.push(productoDeseado);
}
  
mostrarProductos()
calcularTotal()
  
  
// simulador de busqueda
  
consulta = prompt(`Desea buscar productos?`)
if (consulta == `si`) {
  
    busqueda = parseInt(prompt(
    `Escriba el numero correspondiente:
    1. Buscar por producto
    2. Buscar por precio`))
    switch (busqueda) {
        case 1:
              buscarProducto(productos)
              break;
        case 2:
              buscarPrecio(productos)
              break;
        default:
              alert(`Opcion no valida`)
              break;
    }
} else if(consulta == `no`) {
      alert(`Hasta luego!`);
}