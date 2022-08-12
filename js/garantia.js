
let NombreCompleto= prompt ("Ingrese su nombre y apellido")
let IngreseEmail=prompt (" Ingrese su Email")
let montoDeAlquiler=parseInt(prompt ("ingrese valor de alquiler")) 



function verNombreCompleto() {
  console.log("Gracias por hacer su consulta:",NombreCompleto)

}
function verIngreseEmail() {
 console.log(IngreseEmail)

}
function cotizarGarantia() {
    const costoTotal = montoDeAlquiler * 0.70
             console.log("El costo de la garantia para su alquiler es: $", costoTotal.toFixed(2))
    const sueldoMinimo= montoDeAlquiler *3.25
            console.log("El sueldo minimo mensual para tomar esta garantia es: $", sueldoMinimo.toFixed(2))
    const alicuotaMensual= costoTotal/12
            console.log ("La cuota mensual seria de:$", alicuotaMensual.toFixed(2))

    let cuotaIngresada= parseInt (prompt ("En cuantas cuotas desea abonar su Garantia?"))
    console.log ("El valor a pagar por la cantidad de cuotas ingresadas es:$"+  costoTotal/cuotaIngresada)
}


verNombreCompleto()
verIngreseEmail()
cotizarGarantia()

