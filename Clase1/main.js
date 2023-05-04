let nombre = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
let respuesta = prompt("¿Vivís en Los Paises Bajos?, " + nombre + ", responde si o no");

if (respuesta.toLowerCase() === "si") {
    alert("¡Genial, estás cada vez más cerca de vivir una experiencia culinaria que llevará todos tus sentidos al extremo!");
    let ciudad = prompt("¿En qué ciudad?");
    let favorita = prompt("¿Crees en las casualidades? Porque " + ciudad + " es mi ciudad favorita. ¿Cuántos invitados vas a tener? RECUERDA que podemos cotizar para 10, 20, 30 o 40 personas");
    
    let precioBase = 50; // Precio base por persona
    let descuento = 0.1; // Descuento del 10% para grupos de más de 20 personas

    for (let i = 10; i <= 40; i += 10) {
        let precioTotal = i * precioBase;
    alert ((precioTotal = i * precioBase));     

        if (i >= 20) {
            precioTotal *= (1 - descuento); // Aplica descuento del 10% si hay más de 20 personas
        }
     
        console.log("Para " + i + " personas, el precio total es de $" + precioTotal);
    }
   
} else if (respuesta.toLowerCase() === "no") {
    alert("¡Uups! Por el momento trabajamos solo dentro de los Paises Bajos, pero pronto estaremos en otros países de la UE");
} else {
    alert("Lo siento, no entiendo tu respuesta. Por favor, responde sí o no.");
}
marcos



