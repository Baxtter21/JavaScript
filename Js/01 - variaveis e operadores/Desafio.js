const precoCombustivel = 4.88;
const kmPorLitros = 32;
const distanciaEmKm = 24.8;

const litrosConsumido = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumido * precoCombustivel;

console.log(valorGasto.toFixed(2));