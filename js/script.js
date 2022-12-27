// array

const zapatillas = [

  { id: 1, nombre: "Airmax", precio: 9000},

  { id: 2, nombre: "Jordan", precio: 10000},

  { id: 3, nombre: "Vans", precio: 6000},

  { id: 4, nombre: "Converse", precio: 5000},

  { id: 5, nombre: "Vicus", precio: 4000},

  { id: 6, nombre: "Pumas", precio: 8000},
];

//funciones

function modelo(nombre, precio) {

  this.id = zapatillas.length + 1;

  this.nombre = nombre;

  this.precio = parseFloat(precio);

}

//funciones de filtrado

console.log(zapatillas);

function buscarPorNombre(arr, filtro){
    
  const encontrado= arr.find((modelo)=>{

      return modelo.nombre.includes(filtro);   

    })

    return encontrado;
}

//filtrado

function filtrarPorNombre(arr, filtro){

  return arr.filter((modelo)=>{

    return modelo.nombre.includes(filtro);   

  })

}

function filtrarPorPrecio(arr, filtro){

  return arr.filter((modelo)=>{

    return modelo.precio <= parseFloat(filtro);   

  })
  
}

let buscar = prompt("Ingresa el precio del servicio")

const filtrado = filtrarPorPrecio(zapatillas,buscar )

console.log(filtrado); 

const masBaratoTodavia= filtrarPorPrecio(filtrado, 4000)

console.log(masBaratoTodavia);

const carrito=[]
