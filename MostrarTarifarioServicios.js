// Mostrar tari jean
function MostrarTarifarioServicios(nombre, apellido) {
    if(nombre == undefined || apellido == undefined) {
      console.log("Debe ingresar el nombre y apellido del cliente.");
      return;
    }
    //Datos
    if(typeof nombre !== 'string' || typeof apellido !== 'string') {
      console.log("El nombre y el apellido deben ser textos.");
      return;
    }
    // Mostrar
    console.log("Tarifario de guardianía vehicular - SecurVeh");
    console.log("Cliente: " + nombre + " " + apellido);
    console.log("--------------------------------------------------------------");
    console.log("Categoría                         | Tipo de Vehículo              | Tarifa (S/ hora)");
    console.log("--------------------------------------------------------------");
    console.log("Vehículos menores sin motor       | Bicicletas, triciclos         | 3.00");
    console.log("Vehículos menores con motor       | Motos, mototaxis              | 4.50");
    console.log("Vehículos menores 4 ejes          | Autos, camionetas             | 6.00");
    console.log("Vehículos mayores 4,6 ejes        | Camiones, cisternas, trailers| 10.00");
  }
  module.exports = {
    moduloMostrarTarifarioServicios: MostrarTarifarioServicios
  };