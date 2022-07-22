/*
let limite= parseInt(prompt("Ingrese un numero:"))
for(let i= 0; i<limite; i++){
console.log("numeritos", i )

}*/

//debugger

while(login === false) {
    usuario = prompt("Ingresa tu usuario:")
    password = prompt("Ingresa tu clave:")
    if (usuario === "Alejandra Francavilla" && password === "Aprobada") {
        console.log("Bienvenido querido usuario", usuario)
        login = true
    } else {
        alert("⛔️ Usuario o clave invalida")
    }
}