/** --------------------------------------------------------------------
 * Objetivo: Aprender a trabalhar com estrutura de dados array e json
 * Data: 29/09
 * Autor: Julia Fonseca
 * Versão: 1.0
 ----------------------------------------------------------------------*/

 //[] -> Representa a estrutura Array 
 //{} -> Representa a estrutura JSON 

 const introducaoaoArray = function(){

    //Criando lista de forma manual 
    let listaDeNomes = ['Jose','Ana','Luiz','Maria','Carlos','Eduardo'];


    //exibe os dados do array
    console.log(listaDeNomes);

    //Exibe os dados do array em formato de tabela 
    console.table(listaDeNomes);

    //Retorna a quantidade de um array 
    console.log(listaDeNomes.length);

    //Adiciona elementos novos no final da lista
    listaDeNomes.push('Roberto');

     //Adiciona elementos novos no inicio da lista
    listaDeNomes.unshift('Ricardo')

    console.table(listaDeNomes);


    //Remove o ultimo elemento do ARRAY
    listaDeNomes.pop();

    //Remove o primeiro elemento do ARRAY
    listaDeNomes.shift();
    console.table(listaDeNomes);

    //Remove um elemneto baseado no indice, podendo definir a quantidade de itens a serem excluidos 
    // Ex: splice(2,3) -> 2 é referente ao indice e 3 é referente a quantidade de itens 
    listaDeNomes.splice(2,3);
    console.table(listaDeNomes);

    listaDeNomes.push('André da Silva' , 'Ricardo da Silva', 'João da Silva', 10); 
    console.log(listaDeNomes);

    //typeof - retorna tipos de dados de um elemnto, tipo distinguir entre string e number 
    console.log(typeof(listaDeNomes[7]));

    console.log(listaDeNomes[3]);
 }

 const percorrendoArray = function(){
   let listaDeProdutos = ['Mouse','Teclado', 'Monitor', 'Impressora', 'Mouse pad', 'Gabinete', 'Processador', 'HD'];

//while
//let cont = 0;
//while(cont < listaDeProdutos.length){
// console.log('Nome do produto:' + listaDeProdutos[cont]);
// cont +=1;
//    }

//For 
// for(let cont=0; cont < listaDeProdutos.length; cont++){
//     console.log('Nome do produto: ' + listaDeProdutos[cont]);
// }


//FOREACH
// listaDeProdutos.forEach(function(produto){
//    console.log('Nome do produto:' + produto)
// })

//Retorna o indice do produto encontrado
// Caso nao exista o item ele retorna -1
console.log(listaDeProdutos.indexOf('Impressora'));

console.log(listaDeProdutos.includes('Notebook'))

 }

 const filtrarProduto = function(nomeProduto){
 
    let listaDeProdutos = ['Mouse','Teclado', 'Monitor', 'Impressora', 'Mouse pad', 'Gabinete', 'Processador', 'HD'];
    let nome = nomeProduto;

    let status;

   //return listaDeProdutos.includes('nome');

    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase())
        status = true;
    })

    return status;
 }
  console.log(filtrarProduto('gabinete'));

 //percorrendoArray();

 //introducaoaoArray();
