class Casa {
  constructor(
    id,
    tipoDeOperacion,
    barrio,
    habitaciones,
    m2,
    precio,
    tipoPropiedad,
    img
  ) {
    this.id = id;
    this.tipoDeOperacion = tipoDeOperacion.toUpperCase();
    this.barrio = barrio;
    this.habitaciones = habitaciones;
    this.m2 = parseInt (m2)||1;
    this.precio =parseInt (precio)||1;
    this.img = img;
    this.tipoDePropiedad =tipoPropiedad.toUpperCase();
  }
}

const barrios = [
  "todos",
  "Caballito",
  "Flores",
  "Almagro",
  "Balvanera",
  "Liniers",
  "Belgrano",
  "Palermo",
];
const tipoDeOperacion = ["Todas","Alquiler", "Venta"];
const tipoDePropiedad = ["Todas","Casa", "Departamento", "Lote", "Local Comercial"];
const Casas = [];

Casas.push(
  new Casa(
    1,
    "Venta",
    "Caballito",
    2,
    89,
    120000,
    "casa",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    2,
    "Venta",
    "Flores",
    3,
    120,
    300000,
    "departamento",
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    3,
    "Alquiler",
    "Almagro",
    1,
    50,
    80000,
    "casa",
    "https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    4,
    "Alquiler",
    "Caballito",
    3,
    78,
    200000,
    "casa",
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    5,
    "Venta",
    "Balvanera",
    2,
    70,
    86000,
    "departamento",
    "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    6,
    "Venta",
    "Flores",
    4,
    200,
    320000,
    "casa",
    "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    7,
    "Alquiler",
    "Liniers",
    1,
    50,
    80000,
    "casa",
    "https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    8,
    "Alquiler",
    "Caballito",
    3,
    78,
    200000,
    "casa",
    "https://images.pexels.com/photos/2121832/pexels-photo-2121832.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    9,
    "Venta",
    "Belgrano",
    2,
    70,
    86000,
    "casa",
    "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
),
  Casas.push(
    new Casa(
      10,
      "Venta",
      "Flores",
      3,
      120,
      300000,
      "departamento",
      "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1600"
    )
  );
Casas.push(
  new Casa(
    11,
    "Alquiler",
    "VillaDelParque",
    2,
    70,
    180000,
    "casa",
    "https://images.pexels.com/photos/3625734/pexels-photo-3625734.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    12,
    "Alquiler",
    "Caballito",
    4,
    120,
    300000,
    "casa",
    "https://images.pexels.com/photos/449023/pexels-photo-449023.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);
Casas.push(
  new Casa(
    13,
    "Alquiler",
    "Almagro",
    0,
    1000,
    90000,
    "Local Comercial",
    "https://images.pexels.com/photos/449023/pexels-photo-449023.jpeg?auto=compress&cs=tinysrgb&w=1600"
  )
);

/*
function agregarBarrio() {
  let nuevoBarrio = prompt("ingrese el barrio en donde desea vivir:");
  barrios.push(nuevoBarrio);
}
function quitarBarrio() {
  let aQuitar = parseInt(prompt("Ingrese el barrio a quitar:"));
  let indice = barrios.indexOf(aQuitar);
  let resultado = barrios.splice(indice, 1);
  console.warn("Se eliminó el barrio:", resultado);
}*/

let divVivienda = document.getElementById("viviendas");
// console.log(divVivienda);
const selectBarrio = document.querySelector("#seleccionarBarrio");
const selectOperacion = document.querySelector("#selectOperacion");
const selectTipo = document.querySelector("#selectTipoDePropiedad");

function cargoArrayBarrios() {
  barrios.forEach((barrio) => {
    selectBarrio.innerHTML += `<option value="${barrio}">${barrio}</option>`;
  });
  tipoDeOperacion.forEach(operacion => {
    selectOperacion.innerHTML += `<option value="${operacion}">${operacion}</option>`
  });
  tipoDePropiedad.forEach(propiedad => {
    selectTipo.innerHTML += `<option value="${propiedad}">${propiedad}</option>`
  });
  
  /*Agrego operador And

const tipoDeOperaciones={
  opcion1:"Alquiler",
  opcion2:"Venta",
}
const garantia=tipoDeOperaciones.opcion1==="Alquiler"
console.log()*/

}


cargoArrayBarrios();


selectBarrio.addEventListener("change", () => {
  //Se cambia por Ternario
  /*if (selectBarrio.value == "todos") {
    mostrarCards(Casas);
  } else {
    mostrarCards(Casas.filter((item) => item.barrio == selectBarrio.value));
  }
  });*/
  selectBarrio.value == "todos" ?
    mostrarCards(Casas)
  :
    mostrarCards(Casas.filter((item) => item.barrio == selectBarrio.value));
  
  });

selectTipo.addEventListener("change", () => {
 
    mostrarCards(Casas.filter((item) => item.tipoDePropiedad == selectTipo.value.toUpperCase()));
  
});
selectOperacion.addEventListener("change", () => {
 
    mostrarCards(Casas.filter((item) => item.tipoDeOperacion == selectOperacion.value.toUpperCase()));
  
  //Operador terniario

const casita ={
  operacion:"Alquiler",
  tipo:"inmueble"
  
  }
  //Desafio librerias
  const garantia=(casita.operacion==="Alquiler") 
garantia? /*alert("Puede cotizar su garantia con nosotros")*/
Swal.fire({
  title: "Necesita una Garantia? Cotice con nosotros",
  showDenyButton: true,
  confirmButtonText: 'Si por favor',
  denyButtonText: `No gracias`,
})
:
alert(null)
  
  //---------------------------------------------------------------------
});

mostrarCards(Casas);
//DESESTRUCTURACION

/*function mostrarCards(array) {
  divVivienda.innerHTML = "";
  array.forEach((elemento) => {
    // console.log(elemento);
    let div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `<div class="card" style="width: 15rem;">
                          <img src="${elemento.img}" class="card-img-top" alt="foto casa">
                          <div class="card-body">
                          <h5 class="card-title"> Barrio ${elemento.barrio}</h5>
                          <p class="card-text">precio $${elemento.precio}</p>
                          <p class="card-text"> ${elemento.tipoDeOperacion}</p>
                          <button class="btn btn-primary" id="${elemento.id}">Ver</button>
                          </div>
                  </div>`;
    divVivienda.appendChild(div);*/

    
function mostrarCards(array) {
  divVivienda.innerHTML = "";
  array.forEach((item) => {
    // console.log(elemento);
const{img,barrio,precio,tipoDeOperacion,id}=item

    let div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `<div class="card" style="width: 15rem;">
                          <img src="${img}" class="card-img-top img-fluid" alt="foto casa">
                          <div class="card-body">
                          <h5 class="card-title"> Barrio ${barrio}</h5>
                          <p class="card-text">precio $${precio}</p>
                          <p class="card-text"> ${tipoDeOperacion}</p>
                          <button class="btn btn-outline-primary btn-block" id="${id}">Ver</button>
                          </div>
                  </div>`;
    divVivienda.appendChild(div);

   /* let btn = document.getElementById(`${elemento.id}`);
    btn.addEventListener("click", () => {
      let casa = Casas.find((item) => item.id == elemento.id);
      localStorage.setItem("propiedad", JSON.stringify(casa));
      location.href = "http://127.0.0.1:5500/vs/casa.html";
    });
  });*/
  let btn = document.getElementById(`${id}`);
  btn.addEventListener("click", () => {
    let casa = Casas.find((item) => item.id == id);
    localStorage.setItem("propiedad", JSON.stringify(casa));
    location.href = "http://127.0.0.1:5500/vs/casa.html";
  });
});

}

localStorage.getItem("propiedad")
const propiedadLS=localStorage.getItem("propiedad")


//Ejemplo para usar select

/*let select = document.getElementById('select')
  
  barrio.forEach(elemento=>{
          let option = document.createElement('option')
          option.innerHTML = `${elemento}`
  
          select.appendChild(option)
  })
  */

function recorrerElementos() {
  // console.table(Casa)

  for (let Casa of Casas)
    for (let barrio of barrios) {
      // console.log(barrio)
    }
}
recorrerElementos();
//agregarBarrio()
  //quitarBarrio()

//Desafio DOM agrego un parrafo

const titulo1 = document.getElementById("titulo1");
const titulo2 = document.getElementById("titulo2");

function cambiarTitulos() {
  titulo1.innerText = "Bienvenidos AF Propiedades";
  titulo2.innerText = "Comience eligiendo que Operacion desea Realizar?";
}
cambiarTitulos();


//FOOTER
function crearListaFooter() {
  const listadoFooter = document.getElementById("listadoFooter");
  listadoFooter.innerHTML =
    "<li>Comprar</li><li>Vender</li><li>Alquilar</li><li>Garantia</li><li>Contacto</li>";
}
crearListaFooter();

