/*********************************************************************************
 * Objetivo: Fazer um calculo fatorial de um número fornecido pelo usuário
 * Autor: Julia Fonseca
 * Data: 29/09/2023
 * Versão: 1.0
**********************************************************************************/

var gerenciarFatorial = require('./modulo/calcularFatorial.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira um número para calcular o fatorial: ', function(numero){
    let number = parseInt(numero)}

    if (isNaN(number) || number < 2) {
        console.log("ERRO: Insira valores maiores que 1.")}