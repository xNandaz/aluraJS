const maiorValor = 100
const menorValor = 1
const numeroSecreto = sortearNumero() 

function sortearNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número secreto:',numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
