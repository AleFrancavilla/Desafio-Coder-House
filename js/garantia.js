let NombreCompleto= document.getElementById('nombre')
let IngreseEmail=document.getElementById('email')
let montoDeAlquiler= document.getElementById('Alquiler')
let form = document.getElementById('form')

//local Storage para el formulario
let theForm = document.querySelector("#form"),
    valores = []; 

[].forEach.call(theForm.elements, 

    function(elemento){ 
    valores.push(elemento.value); 
});

localStorage.form = JSON.stringify({
    elementos: theForm.innerHTML,
           datos: valores 
});




form.addEventListener('submit',(e)=>{
        e.preventDefault()
        cotizarGarantia()
})

function cotizarGarantia() {
    const costoTotal = parseInt(montoDeAlquiler.value) * 0.70
    console.log(costoTotal);
             console.log("El costo de la garantia para su alquiler es: $", costoTotal.toFixed(2))
             document.getElementById('Garantia').value = costoTotal.toFixed(2)

    const sueldoMinimo= parseInt(montoDeAlquiler.value) *3.25
            console.log("El sueldo minimo mensual para tomar esta garantia es: $", sueldoMinimo.toFixed(2))
            document.getElementById('Ingresos').value = sueldoMinimo.toFixed(2)
            
    const alicuotaMensual= costoTotal/12
            console.log ("La cuota mensual seria de:$", alicuotaMensual.toFixed(2))

    let cuotaIngresada= document.getElementById('cuotas').value

    document.getElementById('Valor_Cuota').value = costoTotal/parseInt(cuotaIngresada).toFixed(2) //imprime el valor de la cuota en el input

    console.log ("El valor a pagar por la cantidad de cuotas ingresadas es:$"+  costoTotal/parseInt(cuotaIngresada))
}


 

