let nombre = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
let respuesta = prompt("¿Vivís en Los Países Bajos?, " + nombre + ", responde si o no");

if (respuesta.toLowerCase() === "si") {
  alert("¡Genial, estás cada vez más cerca de vivir una experiencia culinaria que llevará todos tus sentidos al extremo!");
  let ciudad = prompt("¿En qué ciudad?");
  let cantidad = prompt("Mi ciudad favorita, ¿Para cuántas personas deseas una cotización? (10,20,30 o 40 personas)");

  let precioBase = 50;
  let precioTotal;

  switch (cantidad) {
    case "10":
      precioTotal = precioBase * 10;
      alert(`Para 10 personas, el precio total es de €${precioTotal} euros.`);
      break;
    case "20":
      precioTotal = precioBase * 20 * 0.9;
      alert(`Para 20 personas, el precio total con descuento es de €${precioTotal} euros.`);
      break;
    case "30":
      precioTotal = precioBase * 30 * 0.9;
      alert(`Para 30 personas, el precio total con descuento es de €${precioTotal} euros.`);
      break;
    case "40":
      precioTotal = precioBase * 40 * 0.9;
      alert(`Para 40 personas, el precio total con descuento es de €${precioTotal} euros.`);
      break;
    default:
      alert("Lo siento, no puedo cotizar lo solicitado. Por favor contáctanos por email.");
  }
} else if (respuesta.toLowerCase() === "no") {
  alert("Uups !! Estamos en Países Bajos, pero puedes recomendarnos con tus amigos.");
} else {
  alert("No entiendo tu respuesta, por favor responde si o no.");
}
