//Comienza Class y Constructor

class Producto {
    constructor(id, nombre, precio, descripcion, url_img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.url_img = url_img;
        this.cantidad = cantidad;
    }
}

class ProductoController {
    constructor() {
        this.listaProductos = []
    }
    agregarProducto(producto) {
        this.listaProductos.push(producto)
    }
    levantar(){
        let obtenerListaJSON = localStorage.getItem("listaProductos")

        if(obtenerListaJSON){
            this.listaCarrito = JSON.parse(obtenerListaJSON)
        }
    }
    mostrarDOM(productos){
        productos.innerHTML = ""
        this.listaProductos.forEach(el => {

            productos.innerHTML += `     
            <article class="card" style="width: 18rem;">
            <img src="${el.url_img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">Precio: ${el.precio} ARS</p>
                <p class="card-text">Descripcion: ${el.descripcion}</p>
                <a href="#" class="btn btn-dark d-flex justify-content-around" id="games${el.id}">Añadir al carrito</a>
            </div>
        </article>
        `
        });
    }



}

const controladorProductos = new ProductoController()


controladorProductos.agregarProducto(new Producto(1, "Elden Ring", 8599, "i'm malenia blade of miquella", "assets/img/header.jpg",10))
controladorProductos.agregarProducto(new Producto(2, "Dark Souls", 5699, "plin plin plon", "assets/img/dark_souls_steam.jpg",10))
controladorProductos.agregarProducto(new Producto(3, "Hogwarts Legacy", 8999, "you're a wizard harry", "assets/img/hog_steam.jpg",10))
controladorProductos.agregarProducto(new Producto(4, "Signalis", 1060, "achtung achtung", "assets/img/signalis_steam.jpg",10))
controladorProductos.agregarProducto(new Producto(5, "God of War", 4199, "BOY", "assets/img/god_steam.jpg",10))
controladorProductos.agregarProducto(new Producto(6, "Streets of Rage 4", 875, "beat 'em up", "assets/img/streets.jpg",10))
controladorProductos.agregarProducto(new Producto(7, "Crusader Kings 3", 2240, "adictivo mal", "assets/img/crusader.jpg",10))
controladorProductos.agregarProducto(new Producto(8, "RimWorld", 2100, "furros", "assets/img/rimworld_steam.jpg",10))

controladorProductos.levantar()


class CarritoController{
    constructor(){
        this.listaCarrito = [];
        this.cantidadTotal = 0;
    }

    levantar(){
        let obtenerListaJSON = localStorage.getItem("listaCarrito")

        if(obtenerListaJSON){
            this.listaCarrito = JSON.parse(obtenerListaJSON)
        }
    }

    anadir(producto) {
        let existeEnCarrito = false;
        this.listaCarrito.forEach((prod) => {
            if (prod.id === producto.id) {
                prod.cantidad++;
                existeEnCarrito = true;
            }
        });

        if (!existeEnCarrito) {
            producto.cantidad = 1;
            this.listaCarrito.push(producto);
        }

        let arrFormatoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", arrFormatoJSON)
    }

    eliminar(id) {
        const index = this.listaCarrito.findIndex(producto => producto.id === id)
        if (index !== -1) {
            const prod = this.listaCarrito[index];
            prod.cantidad--;
    
            if (prod.cantidad <= 0) {
                this.listaCarrito.splice(index, 1)
            }
    
            let arrFormatoJSON = JSON.stringify(this.listaCarrito)
            localStorage.setItem("listaCarrito", arrFormatoJSON)
        }
    }

    calcularTotal() {
        let total = 0;
        this.listaCarrito.forEach((producto) => {
          total += producto.precio * producto.cantidad;
        });
        return total;
    }

    mostrarDOM(contenedor_carrito){
        //limpiar
        contenedor_carrito.innerHTML = ""
        //mostrar
        this.listaCarrito.forEach(el => {
            contenedor_carrito.innerHTML +=`
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${el.url_img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">Precio: ${el.precio} ARS</p>
                <p class="card-text"></small>Descripcion: ${el.descripcion}</p>
                <p class="card-text">Cantidad: ${el.cantidad}</p>
                <a href="#" class="btnEliminar btn btn-warning" id="games${el.id}">Quitar</a>
                </div>
            </div>
            </div>
        </div>
            `
        })
        let total = this.calcularTotal();
        contenedor_carrito.innerHTML += `
            
            <h3 class="card-title">Total del carrito: ${total} ARS</h3>
            
        `;
    }

}


//OB
const controladorCarrito = new CarritoController()
controladorCarrito.levantar()

//Termina Class y Constructor

//Empieza DOM


const listaCarrito = []

const productos = document.getElementById('productos')
const contenedor_carrito = document.getElementById('contenedor_carrito')

//Inicia Eventos

controladorProductos.mostrarDOM(productos)

controladorCarrito.mostrarDOM(contenedor_carrito)


controladorProductos.listaProductos.forEach(el => {
    const juegoAAgregar = document.getElementById(`games${el.id}`)

    juegoAAgregar.addEventListener("click", () => {

        controladorCarrito.levantar()
        controladorCarrito.anadir(el)
        controladorCarrito.mostrarDOM(contenedor_carrito);

        })
    })



    controladorCarrito.mostrarDOM(contenedor_carrito)

    // Agregar evento de click al botón "Quitar" de cada producto en el carrito
    contenedor_carrito.addEventListener('click', e => {
    if (e.target.classList.contains('btnEliminar')) {
        const idProducto = parseInt(e.target.id.replace('games', ''))
        controladorCarrito.eliminar(idProducto)
        controladorCarrito.mostrarDOM(contenedor_carrito)
    }
    })
