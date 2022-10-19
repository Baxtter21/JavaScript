const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumido = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumido * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else if(tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumido * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
