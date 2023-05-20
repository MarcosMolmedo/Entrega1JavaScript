let nombre = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
let respuesta = prompt("¿Vivís en Los Países Bajos?, " + nombre + ", responde si o no");

if (respuesta.toLowerCase() === "si") {
    alert("¡Genial, estás cada vez más cerca de vivir una experiencia culinaria que llevará todos tus sentidos al extremo!");
    let ciudad = prompt("¿En qué ciudad?");
    let invitados = parseInt(prompt(ciudad + " Mi ciudad favorita, ¿Para cuántas personas deseas una cotización?"));
    let servicio = prompt("¿Qué tipo de servicio te gustaría tener? (Ej: desayuno, almuerzo, cena)").toUpperCase();
    let vegetariano = prompt("¿Tendrás algún comensal vegetariano? (responde si o no)").toLowerCase() === "si";
    let precioPorPersona = vegetariano ? 45 : 50;
    let precioTotal = invitados * precioPorPersona;

    switch (servicio) {
        case "DESAYUNO":
            precioTotal = precioPorPersona * 15;
            alert(`La cotización para tu evento de ${servicio} para ${invitados} personas, ${(vegetariano ? "con" : "sin")} comensales vegetarianos, es de €${precioTotal}.`);
            break;
        case "ALMUERZO":
            precioTotal = precioPorPersona * 35 * 0.9;
            alert(`La cotización para tu evento de ${servicio} para ${invitados} personas, ${(vegetariano ? "con" : "sin")} comensales vegetarianos, es de €${precioTotal}.`);
            break;
        case "CENA":
            precioTotal = precioPorPersona * 45 * 0.9;
            alert(`La cotización para tu evento de ${servicio} para ${invitados} personas, ${(vegetariano ? "con" : "sin")} comensales vegetarianos, es de €${precioTotal}.`);
            break;
        default:
            alert("Lo siento, no puedo cotizar lo solicitado. Por favor contáctanos por email.");
    }
} else if (respuesta.toLowerCase() === "no") {
    alert("Uups !! Estamos en Países Bajos, pero puedes recomendarnos con tus amigos.");
} else {
    alert("No entiendo tu respuesta, por favor responde si o no.");
}
