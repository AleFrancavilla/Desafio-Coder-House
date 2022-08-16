



class Casa {
  constructor(id, tipoDeOperacion, barrio, habitaciones, m2, precio,img) {
    this.id = id;
    this.tipoDeOperacion = tipoDeOperacion.toUpperCase();
    this.barrio = barrio;
    this.habitaciones = habitaciones;
    this.m2 = m2;
    this.precio = precio;
    this.img = img
  }
}

const barrios = [
  'todos',
  "Caballito",
  "Flores",
  "Almagro",
  "Balvanera",
  "Liniers",
  "Belgrano",
  "Palermo"
];
const tipoDeOperacion = ["Alquiler", "Venta"];
const Casas = [];

Casas.push(new Casa(1, "Venta", "Caballito", 2, 89, 120000, 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(2, "Venta", "Flores", 3, 120, 300000, 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(3, "Alquiler", "Almagro", 1, 50, 80000,'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(4, "Alquiler", "Caballito", 3, 78, 200000,'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(5, "Venta", "Balvanera", 2, 70, 86000,'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(6, "Venta", "Flores", 4, 200, 320000,'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa( 7,"Alquiler", "Liniers",1, 50, 80000,'https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(8,"Alquiler", "Caballito",3,78,200000,'https://images.pexels.com/photos/2121832/pexels-photo-2121832.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(9,"Venta", "Belgrano", 2, 70, 86000,'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1600')),
Casas.push(new Casa(10, "Venta", "Flores", 3, 120, 300000,'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa( 11,"Alquiler", "VillaDelParque",2, 70, 180000,'https://images.pexels.com/photos/3625734/pexels-photo-3625734.jpeg?auto=compress&cs=tinysrgb&w=1600'));
Casas.push(new Casa(12,"Alquiler", "Caballito",4,120,300000,'https://images.pexels.com/photos/449023/pexels-photo-449023.jpeg?auto=compress&cs=tinysrgb&w=1600'));

   function agregarBarrio() {
   let nuevoBarrio = prompt("ingrese el barrio en donde desea vivir:");
   barrios.push(nuevoBarrio);
 }
  function quitarBarrio() {
  let aQuitar = parseInt(prompt("Ingrese el barrio a quitar:"));
  let indice=barrios.indexOf(aQuitar);
  let resultado = barrios.splice(indice, 1);
  console.warn("Se eliminó el barrio:", resultado);
}



let divVivienda = document.getElementById('vivendas')
console.log(divVivienda);
const selectBarrio = document.querySelector("select")
function cargoArrayBarrios() {
barrios.forEach(barrio =>{
  selectBarrio.innerHTML+=`<option value="${barrio}">${barrio}</option>`
  
}  )}
cargoArrayBarrios() 

selectBarrio.addEventListener('change',()=>{
  if (selectBarrio.value == 'todos') {
    mostrarCards(Casas)
  }else{

    mostrarCards(Casas.filter(item => item.barrio == selectBarrio.value))
  }
})

mostrarCards(Casas)

function mostrarCards(array) {
  divVivienda.innerHTML= ''
  array.forEach(elemento=> {
        console.log(elemento);
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${elemento.img}" class="card-img-top" alt="foto casa">
                        <div class="card-body">
                        <h5 class="card-title"> Barrio ${elemento.barrio}</h5>
                        <p class="card-text">precio $${elemento.precio}</p>
                        <p class="card-text"> ${elemento.tipoDeOperacion}</p>
                        <a href="#" class="btn btn-primary">Ver casa</a>
                        </div>
                </div>`
        divVivienda.appendChild(div)
})
}

//Ejemplo para usar select

/*let select = document.getElementById('select')

barrio.forEach(elemento=>{
        let option = document.createElement('option')
        option.innerHTML = `${elemento}`

        select.appendChild(option)
})
*/


function recorrerElementos() {
  for (let Casa of Casas)
  console.table(Casa)
  
  for (let barrio of barrios){

    console.log(barrio)
  }

}
recorrerElementos()
agregarBarrio()
quitarBarrio()

//Desafio DOM agrego un parrafo

const titulo1=document.getElementById("titulo1")
const titulo2=document.getElementById("titulo2")

function cambiarTitulos() {
  titulo1.innerText="Bienvenidos AF Propiedades"
  titulo2.innerText="Comienza seleccionando el barrio donde deseas vivir!"
}
cambiarTitulos()

function crearListaFooter() {
  const listadoFooter= document.getElementById("listadoFooter")
  listadoFooter.innerHTML="<li>Comprar</li><li>Vender</li><li>Alquilar</li><li>Garantia</li><li>Contacto</li><li>Terminos y Condiciones</li>"
}
crearListaFooter()