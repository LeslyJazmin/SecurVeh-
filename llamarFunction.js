// Importamos módulos
const mostrar = require("./MostrarTarifarioServicios");
const calcular = require("./CalcularTarifa");

// Llamamos a la función para mostrar el tarifario
mostrar.moduloMostrarTarifarioServicios("cesar", "Perez");

// Llamamos a la función para calcular el costo de guardianía
calcular.moduloCalcularTarifa(
 "cesar Perez",
 "TOYOTA YARIS - placa XH767",
 "menores_sin_motor",
 4
);