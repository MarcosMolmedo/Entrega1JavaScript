function obtenerCotizacion() {
    let servicio = prompt("¿Qué tipo de servicio te gustaría tener? (Ej: desayuno, almuerzo, cena)");
    let invitados = parseInt(prompt("¿Cuántos invitados tendrás?"));
    let vegetariano = prompt("¿Tendrás algún comensal vegetariano? (responde si o no)").toLowerCase() === "si";
 
    let precioBase = 50;
    let precioPorPersona = vegetariano ? 45 : 50;
    let precioTotal = invitados * precioPorPersona;
    
    alert(`La cotización para tu evento de ${servicio} para ${invitados} personas, ${(vegetariano ? "con" : "sin")} comensales vegetarianos, es de €${precioTotal}.`);
  }
  
  obtenerCotizacion();
  