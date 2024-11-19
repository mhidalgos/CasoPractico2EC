//Mensaje en la consola para asegurarnos que está cogiendo el fichero JS
console.log('conexión establecida con éxito')
/**
 * Muestra un mensaje en una alerta y lo devuelve.
 * @param {string} [mensaje="¡Hola! Este es un mensaje."] - El mensaje a mostrar. Si no se proporciona, se usa el mensaje por defecto especificado por parámetro.
 * @returns {string} El mensaje que se mostró.
 */
function mostrarMensaje(mensaje = "¡Hola! Este es un mensaje.") {
    alert(mensaje);
    return mensaje;
  }
  //Exportar la función para uso externo
  module.exports = { mostrarMensaje };
