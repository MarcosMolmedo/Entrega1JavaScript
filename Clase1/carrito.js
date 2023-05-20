let productos = [
    { nombre: "parrilla chulengo portatil con ruedas", precio: 250 },
    { nombre: "parrilla portatil con ruedas gauchas", precio: 210 },
    { nombre: "parrilla portatil a carbon o lena con ruedas", precio: 280 },
    { nombre: "asador criollo grande tromen duomo", precio: 2600 },
    { nombre: "tromen duo", precio: 85 },
    { nombre: "horno tromen a lena para mesada", precio: 3245 }
  ];
  
  let carrito = [];
  let total = 0;
  
  function buscarProductoEnCarrito(nombre) {
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === nombre) {
        return carrito[i];
      }
    }
    return null;
  }
  
  function agregarAlCarrito(nombre, precio) {
    let productoExistente = buscarProductoEnCarrito(nombre);
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: 1
      };
      carrito.push(producto);
    }
  }
  
  alert("Bienvenido al carrito de compras.");
  
  let respuesta = prompt("¿Deseas agregar productos al carrito? (si/no)");
  
  while (respuesta.toLowerCase() === "si") {
    let opcionesProductos = "";
  
    for (let i = 0; i < productos.length; i++) {
      opcionesProductos += `${i + 1}. ${productos[i].nombre} - Precio: €${productos[i].precio}\n`;
    }
  
    let seleccion = parseInt(prompt(`Productos disponibles:\n\n${opcionesProductos}\nIngresa el número correspondiente al producto que deseas agregar:`));
  
    if (seleccion >= 1 && seleccion <= productos.length) {
      let productoSeleccionado = productos[seleccion - 1];
      agregarAlCarrito(productoSeleccionado.nombre, productoSeleccionado.precio);
      alert(`${productoSeleccionado.nombre} agregado al carrito.`);
    } else {
      alert("La opción seleccionada no es válida.");
    }
  
    respuesta = prompt("¿Deseas agregar más productos al carrito? (si/no)");
  }
  
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio * carrito[i].cantidad;
  }
  
  if (carrito.length >= 2) {
    let descuento = total * 0.1;
    total -= descuento;
  }
  
  let mensaje = "Carrito de compras:\n\n";
  for (let i = 0; i < carrito.length; i++) {
    mensaje += `${carrito[i].nombre} - Cantidad: ${carrito[i].cantidad} - Precio: €${carrito[i].precio}\n`;
  }
  mensaje += `\nTotal a pagar: €${total.toFixed(2)}`;
  
  alert(mensaje);
  