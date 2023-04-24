
/* Faça um programa para calcular o valor de uma viagem.

Vocẽ terá três variáveis. Sendo elas:

 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

 Imprima no console o valor que será gasto para realizar a viagem.

*/
const precoLitro = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const valorGasto = (distanciaEmKm/kmPorLitros)*precoLitro

console.log(valorGasto.toFixed(2));

