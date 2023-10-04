/*********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias de uma Faculdade
 * Autor: Julia Fonseca
 * Data: 29/09/2023
 * Versão: 1.0
**********************************************************************************/

var gerenciarMedias = require('./modulo/calculoMedia.js')

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe o nome do aluno: ', (nome) => {
entradaDeDados.question('Informe o nome do professor: ', (professor) => {
entradaDeDados.question('Informe o sexo do aluno: ', (sexoAluno) => {
entradaDeDados.question('Informe o sexo do professor: ', (sexoProfessor) => {
entradaDeDados.question('Informe o nome do curso: ', (curso) => {
entradaDeDados.question('Informe o nome da disciplina: ', (disciplina) => {
entradaDeDados.question('Informe a primeira nota (entre 0 e 100): ', (nota1) => {
entradaDeDados.question('Informe a segunda nota (entre 0 e 100): ', (nota) => {
entradaDeDados.question('Informe a terceira nota (entre 0 e 100): ', (nota3) => {
entradaDeDados.question('Informe a quarta nota (entre 0 e 100): ', (nota4) => {
})
})
})
})
})
})
})
})
})
})