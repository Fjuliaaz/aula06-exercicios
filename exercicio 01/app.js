/****************************************************
 * OBJETIVO: fazer uma calculadora de IMC   
 * DATA: 29/09/2023
 * AUTOR: Julia Fonseca
 * VERSÃO: 1.0
 ***************************************************/

/*****
 * menor que 18,5 - abaixo do peso
 * entre 18,5 e 24,9 - peso normal
 * entre 25 e 29,9 - acima do peso
 * entre 30 e 34,9 - obesidade 1
 * entre 35 e 39,9 - obesidade 2
 * maior que 40 - obesidade 3
 *****/

// import da biblioteca que calcula IMC
var calculoIMC = require('./modulo/calcularIMC.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu peso: ', function(valorPeso){
    let peso = valorPeso

    entradaDeDados.question('Digite sua altura: ', function(valorAltura){
        let altura = valorAltura

        let imc = calculoIMC.calculoIMC(peso, altura)
        let pesoIMC

        if(imc){
            pesoIMC = calculoIMC.confIMC(imc)
            console.log('IMC: ' + String(imc.toFixed(2)) + pesoIMC)
        }

        entradaDeDados.close()
    })
})