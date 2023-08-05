let nombre = prompt("Ingrese su nombre");
alert("Bienvenido/a a My Translator");

alert("¡Soy una lingüista y traductora. Responde algunas preguntas para conocer qué servicios te interesan.");

const necesitaTraduccion = prompt("¿Necesitas servicios de traducción? (Si/No)");
const necesitaInterpretacion = prompt("¿Necesitas servicios de interpretación? (Si/No)");
const necesitaClases = prompt("¿Necesitas clases personalizadas de inglés o español? (Si/No)");

if (necesitaTraduccion.toLowerCase() === 'si') {
  alert("Ofrezco servicios de traducción profesional en varios idiomas.");
}

if (necesitaInterpretacion.toLowerCase() === 'si') {
  alert("Proporciono servicios de interpretación en eventos y reuniones.");
}

if (necesitaClases.toLowerCase() === 'si') {
  alert("Ofrezco clases personalizadas de inglés y español en línea.");
}

alert("Gracias por responder el cuestionario.");