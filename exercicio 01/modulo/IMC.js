/***********************************************************
 * Objetivo: funções para calcular um IMC
 * Data: 29/09/2023
 * Autor: Julia Fonseca
 * versão: 1.0
 **********************************************************/

const calculoIMC = (valorPeso, valorAltura) => {
    
    let peso = String(valorPeso).replace(',', '.')
    let altura = String(valorAltura).replace(',', '.')
    let status = false

    let imc = peso / Math.pow(altura, 2)

    // tratativas para possíveis erros
    if (peso == '' || altura == '') {
        console.log('ERRO: inserir todos os valores.')
    } else if (isNaN(peso) || isNaN(altura)) {
        console.log('ERRO: é obrigatório somente de números.')
    } else {
        
        peso = Number(peso)
        altura = Number(altura)
        imc = Number(imc)
    }

    if(imc != undefined){
        return imc
    } else {
        return false
    }

}

const confIMC = (imc) => {

    let pesoIMC

    // condições
    if (imc < 18.5) {
        pesoIMC = ': Você está abaixo do peso ideal.'
    } else if (imc <= 24.9) {
        pesoIMC = ': Você está no peso ideal!'
    } else if (imc <= 29.9) {
        pesoIMC = ': Você está acima do peso.'
    } else if (imc <= 34.9) {
        pesoIMC = ': Você está com obesidade I.'
    } else if (imc <= 39.9) {
        pesoIMC = ': Você está com obesidade II.'
    } else if (imc <= 40) {
        pesoIMC = ': Você está com obesidade III.'
    }
    
    return pesoIMC
}

module.exports = {
    calculoIMC,
    confIMC
}