//Class y Constructor
class Producto {
    constructor(id, nombre, precio, descripcion, url_img, video, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.url_img = url_img;
        this.video = video;
        this.cantidad = cantidad;

    }
}

//Class y Constructor
class ProductoController {
    constructor() {
        this.listaProductos = []
    }
    agregarProducto(producto) {
        this.listaProductos.push(producto)
    }
    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaProductos")

        if (obtenerListaJSON) {
            this.listaCarrito = JSON.parse(obtenerListaJSON)
        }
    }

    mostrarDetalle(id) {
        // Obtener el elemento modal
        const modal = document.querySelector('#myModal');


        // Buscar el producto con el id especificado
        const producto = this.listaProductos.find(p => p.id === id);

        // Actualizar el contenido del modal con los datos del producto
        //modal.querySelector('.modal-title').textContent = producto.nombre;
        modal.querySelector('.modal-body').innerHTML = `
            <div container d-flex  align-content-center flex-wrap  >
                <div container d-flex  justify-content-center>
                    <div>
                        <h5 class="card-title d-flex mt-2 mb-2 justify-content-center">${producto.nombre}</h5>
                    </div>
                        <section  class="d-flex justify-content-center align-items-center">
                        <div class="d-flex">
                        <iframe class="d-flex align-content-center justify-content-center" width="600" height="420" src="${producto.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        
                        </div>
                        </section>
                        <section class="d-flex flex-column align-items-center">
                        <p class="card-text"><strong>Descripcion: </strong> ${producto.descripcion}</p>
                        <div>
                        <p class="card-text"><strong>Precio:</strong> ${producto.precio} ARS</p>
                        </div>
                        </section>
                    
                </div>
            </div>
        `;

        // Agregar el evento para detener la reproducción del video cuando se cierra el modal
        modal.addEventListener('hidden.bs.modal', function () {
            const iframe = modal.querySelector('iframe');
            const temp = iframe.src;
            iframe.src = temp; // re-initializing the src attribute value
        });
        // Mostrar el modal
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();

    }
    mostrarDOM(productos) {
        productos.innerHTML = ""
        this.listaProductos.forEach(el => {

            productos.innerHTML += `     
            <article class="card" style="width: 18rem;">
            <img src="${el.url_img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">Precio: ${el.precio} ARS</p>
                <a href="#" class="btn btn-dark d-flex justify-content-around" id="detalle${el.id}">Detalles</a>
                <a href="#" class="btn btn-dark d-flex justify-content-around" id="games${el.id}">Añadir al carrito</a>
            </div>
            
        </article>
        
        `
        });
    };

}


//<video src="${el.video}" width="320" height="240" controls autoplay></video>

// const getProducts = async () => {
//     const response = await fetch("data.json");
//     const data = await response.json();
//     console.log(data);
// };

// getProducts();
//Objeto
const controladorProductos = new ProductoController()

//Productos
controladorProductos.agregarProducto(new Producto(1, "Elden Ring", 8599, "Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.", "../assets/img/header.jpg", "https://www.youtube.com/embed/CptaXqVY6-E", 10))
controladorProductos.agregarProducto(new Producto(2, "Dark Souls", 5699, "Entonces llegó el Fuego. Vuelve a disfrutar del aclamado juego que definió el género con el que empezó todo. Gracias a una magnífica remasterización, podrás regresar a Lordran con unos impresionantes detalles en alta definición y a 60 fps.", "../assets/img/dark_souls_steam.jpg", "https://www.youtube.com/embed/nzwnFYKNNdc", 10))
controladorProductos.agregarProducto(new Producto(3, "Hogwarts Legacy", 8999, "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.", "../assets/img/hog_steam.jpg","https://www.youtube.com/embed/1O6Qstncpnc", 10))
controladorProductos.agregarProducto(new Producto(4, "Signalis", 1060, " Terror de supervivencia en un futuro distópico en el que la humanidad ha descubierto un secreto oscuro. Desentraña un misterio cósmico y escapa de criaturas aterradoras en un complejo extraplanetario. Tú eres Elster, una técnica Replika en busca de sus sueños perdidos.", "../assets/img/signalis_steam.jpg", "https://www.youtube.com/embed/qxvpJ1g54sY", 10))
controladorProductos.agregarProducto(new Producto(5, "God of War", 4199, "Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.", "../assets/img/god_steam.jpg","https://www.youtube.com/embed/K0u_kAWLJOA", 10))
controladorProductos.agregarProducto(new Producto(6, "Streets of Rage 4", 875, "El clásico de todos los tiempos Streets of Rage, conocido como Bare Knuckle (ベア・ナックル Bea Nakkuru) en Japón, es una trilogía de beat ‘em ups famosa por su mecánica de juego intemporal y su música influida por el dance electrónico.", "../assets/img/streets.jpg", "https://www.youtube.com/embed/nDXY1WRef0Q", 10))
controladorProductos.agregarProducto(new Producto(7, "Crusader Kings 3", 2240, "Ama, lucha, planea y reclama la grandeza. Determina el legado de tu casa nobiliaria en la gran estrategia en expansión de Crusader Kings III. La muerte solo es el comienzo mientras lideras el linaje de tu dinastía en esta completa simulación realista de la Edad Media.", "../assets/img/crusader.jpg", "https://www.youtube.com/embed/xjn66Cl3pMA", 10))
controladorProductos.agregarProducto(new Producto(8, "RimWorld", 2100, "Un simulador de colonias de ciencia ficción dirigido por una brillante Inteligencia Artificial que narrará la historia. Genera historias al simular psicología, ecología, combate, clima, biomas, diplomacia, relaciones interpersonales, arte, medicina, comercio y mucho más.","../assets/img/rimworld_steam.jpg", "https://www.youtube.com/embed/3tDrxOASUog", 10))
controladorProductos.agregarProducto(new Producto(9, "Blasphemous", 2098.25, "Blasphemous es un juego de acción y plataformas muy difícil que combina el ritmo rápido y el combate de un hack-n-slash con una narrativa profunda y evocadora, presentada al explorar un universo enorme hecho de niveles no lineales.", "../assets/img/blasphemous.jpg", "https://www.youtube.com/embed/T3SxYMu5qGY", 10))
controladorProductos.agregarProducto(new Producto(10, "Project Zomboid", 2450, "Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..", "../assets/img/project.jpg", "https://www.youtube.com/embed/YhSd39QqQUg", 10))
controladorProductos.agregarProducto(new Producto(11, "Darkest Dungeon", 3062.50, "Darkest Dungeon es un desafiante juego de rol gótico en mazmorras y por turnos que gira en torno al esfuerzo psicológico de la aventura. Recluta, entrena y lidera a un equipo de héroes imperfectos a través de enrevesados bosques, laberintos olvidados, criptas en ruinas y más allá.", "../assets/img/darkestdungeon.jpg", "https://www.youtube.com/embed/h-mXN3akTPU", 10))
controladorProductos.agregarProducto(new Producto(12, "Pizza Tower", 393.74, "Pizza Tower es un juego de plataformas en 2D de ritmo rápido inspirado en la serie Wario Land, con énfasis en el movimiento, la exploración y el ataque de puntuación. Con pixel art muy estilizado inspirado en los dibujos animados de los años 90 y una banda sonora muy enérgica.", "../assets/img/pizza_tower.jpg", "https://www.youtube.com/embed/Wlq6fFOqI28", 10))

//Storage
controladorProductos.levantar()

//Class y Constructor
class CarritoController {
    constructor() {
        this.listaCarrito = [];
    }

    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaCarrito")

        if (obtenerListaJSON) {
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
                this.listaCarrito.splice(index, 1) //buscar
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

    mostrarDOM(contenedor_carrito) {
        //limpiar
        contenedor_carrito.innerHTML = ""
        //mostrar
        this.listaCarrito.forEach(el => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
                <img src="${el.url_img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">Precio: ${el.precio} ARS</p>
                <p class="card-text">Cantidad: ${el.cantidad}</p>
                <a href="#" class="btnEliminar btn btn-warning" id="games${el.id}">Quitar</a>
                </div>
            </div>
            </div>
        </div>
            `
        })
        let total = this.calcularTotal();
        precio.innerHTML = `
            
            <p>Precio total: ${total} ARS</p>
            
        `;
    }

    limpiar() {
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
    }

}


//Objeto
const controladorCarrito = new CarritoController()
//Storage
controladorCarrito.levantar()


//Empieza DOM
const precio = document.getElementById('precio-total')
const productos = document.getElementById('productos')
const contenedor_carrito = document.getElementById('contenedor_carrito')

controladorProductos.mostrarDOM(productos)
controladorCarrito.mostrarDOM(contenedor_carrito)


//Evento

controladorProductos.listaProductos.forEach(el => {
    const Cosa = document.getElementById(`detalle${el.id}`)

    Cosa.addEventListener("click", () => {
        controladorProductos.mostrarDetalle(el.id, productos)
    })

})


controladorProductos.listaProductos.forEach(el => {
    const juegoAAgregar = document.getElementById(`games${el.id}`)

    juegoAAgregar.addEventListener("click", () => {

        Toastify({
            text: "Agregado al carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {

                background: "linear-gradient(0deg, rgba(150,112,0,1) 0%, rgba(251,205,7,1) 100%)",
            },
        }).showToast();
        controladorCarrito.levantar()
        controladorCarrito.anadir(el)
        controladorCarrito.mostrarDOM(contenedor_carrito);

    })
})


const DateTime = luxon.DateTime
const now = DateTime.now()


console.log(now.toLocaleString())
console.log(now.toLocaleString(DateTime.TIME_SIMPLE))


//Evento
// Agregar evento de click al botón "Quitar" de cada producto en el carrito
contenedor_carrito.addEventListener('click', e => {
    if (e.target.classList.contains('btnEliminar')) {
        const idProducto = parseInt(e.target.id.replace('games', ''))
        controladorCarrito.eliminar(idProducto)
        controladorCarrito.mostrarDOM(contenedor_carrito)
    }
})

const btnsweet = document.getElementById("btn-sweet")

btnsweet.addEventListener("click", () => {


    if (controladorCarrito.listaCarrito.length > 0) {
        controladorCarrito.limpiar()
        controladorCarrito.mostrarDOM(contenedor_carrito)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Gracias por su compra!',
            showConfirmButton: false,
            timer: 1500
        })

    } else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: '¡Su carrito esta vacio!',
            showConfirmButton: false,
            timer: 1500
        })
    }
})

const btnvaciar = document.getElementById("vaciar")

btnvaciar.addEventListener("click", () => {

    if (controladorCarrito.listaCarrito.length == 0) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: '¡El carrito ya esta vacio!',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        controladorCarrito.limpiar()
        controladorCarrito.mostrarDOM(contenedor_carrito)
    }
})


let comentarios = [];

window.addEventListener("load", () => {
    console.log("la pagina esta nashee")
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                comentarios = respuesta;
                mostrarComentarios();
                spinner.style.display = "none";
            })
            .catch(err => console.log(`Error: ${err}`))
    }, 3000);
})

function mostrarComentarios() {
    const comentariosList = document.getElementById("comentarios-list");
    comentarios.forEach(comentario => {
        const comentarioItem = document.createElement("li");
        comentarioItem.innerHTML = `
        <div>
        <p><strong>Usuario:</strong> ${comentario.name}</p>
        </div>
        <div>
        <p><strong>Email:</strong> ${comentario.email}</p>
        </div>
        <div>
        <p><strong>Comentario:</strong> ${comentario.body}</p>
        </div>
        <hr>
      `;
        comentariosList.appendChild(comentarioItem);
    });
}

