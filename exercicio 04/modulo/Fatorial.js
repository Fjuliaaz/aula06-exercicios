/*********************************************************************************
 * Objetivo: Fazer um calculo fatorial de um número fornecido pelo usuário
 * Autor: Julia Fonseca
 * Data: 29/09/2023
 * Versão: 1.0
**********************************************************************************/

const calcularFatorial = (numero) => {

    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }

    return fatorial
}

module.exports = {
    calcularFatorial
}