function CalcularTarifa(nombre, vehiculo, tipoVehiculo, horas) {
    // Validaciones
    if (nombre == undefined || vehiculo == undefined || tipoVehiculo == undefined || horas == undefined) {
      console.log("Debe ingresar nombre, vehículo, tipo de vehículo y horas.");
      return;
    }
  
    if (typeof nombre !== 'string' || typeof vehiculo !== 'string' || typeof tipoVehiculo !== 'string') {
      console.log("Nombre, vehículo y tipo de vehículo deben ser textos.");
      return;
    }
  
    if (typeof horas !== 'number' || horas <= 0) {
      console.log("Las horas deben ser un número positivo.");
      return;
    }
  
    // Tarifas según tipo
    let tarifa = 0;
    let descripcion = "";
  
    switch (tipoVehiculo) {
      case "menores_sin_motor":
        tarifa = 3;
        descripcion = "Vehículo menor sin motor";
        break;
      case "menores_con_motor":
        tarifa = 4.5;
        descripcion = "Vehículo menor con motor";
        break;
      case "menores_4_ejes":
        tarifa = 6;
        descripcion = "Vehículo menor 4 ejes";
        break;
      case "mayores_4_6_ejes":
        tarifa = 10;
        descripcion = "Vehículo mayor 4,6 ejes";
        break;
      default:
        console.log("Tipo de vehículo no válido.");
        return;
    }
  
    // Cálculo
    const total = tarifa * horas;
    const subtotal = +(total / 1.18).toFixed(2);
    const igv = +(total - subtotal).toFixed(2);
    
    // Mostrar resultados
    console.log("\nResumen del Servicio - SecurVeh");
    console.log("---------------------------------------");
    console.log("Cliente:", nombre);
    console.log("Vehículo:", vehiculo);
    console.log("Tipo:", descripcion);
    console.log("Horas de servicio:", horas);
    console.log("Tarifa por hora (IGV incluido): S/", tarifa.toFixed(2));
    console.log("Subtotal (sin IGV): S/", subtotal.toFixed(2));
    console.log("IGV (18%): S/", igv);
    console.log("Total a pagar: S/", total.toFixed(2));
    
  }
  
  module.exports = {
    moduloCalcularTarifa: CalcularTarifa
  };
  