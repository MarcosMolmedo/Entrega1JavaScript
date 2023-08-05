let nombre = prompt("Ingrese su nombre");
alert("Bienvenido/a a My Translator");

alert("¡Soy una lingüista y traductora. Responde algunas preguntas para conocer qué servicios te interesan.");

function preguntarServicio(servicio) {
  return prompt(`¿Necesitas servicios de ${servicio}? (Si/No)`).toLowerCase() === 'si';
}

const servicios = ["traducción", "interpretación", "clases personalizadas de inglés o español"];
const intereses = [];

for (const servicio of servicios) {
  if (preguntarServicio(servicio)) {
    intereses.push(servicio);
    alert(`Ofrezco servicios de ${servicio} profesional en varios idiomas.`);
  }
}

if (intereses.length === 0) {
  alert("No seleccionaste ningún servicio. ¡Hasta luego!");
} else {
  alert(`Gracias por responder el cuestionario, ${nombre}. Has mostrado interés en los siguientes servicios: ${intereses.join(", ")}.`);
}