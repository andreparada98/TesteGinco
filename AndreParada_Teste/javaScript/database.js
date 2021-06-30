const database = [
    {name: "André Parada", cpf: "00011122233", born: "1991-01-01"},
    {name: "Joao Leite", cpf: "33344455566", born: "1982-02-02"},
    {name: "Ana Silva", cpf: "77788899910", born: "1973-03-03"},
    {name: "Betania Oliveira", cpf: "11122233344", born: "1964-04-04"},
    {name:"Humberto Amilton", cpf:"15115215366", born:"1955-05-05"}
]/*Definindo o DataSet*/ 

armazenar = 0;
function distribuiCaracter() 
{                                      //Função presentet no Onblur, Iniciando minha pesquisa.
    var caracter = document.getElementById('client-name').value     //Seleciona o valor digitado
    caracter = caracter.toLowerCase();                              //Coloco o Caracter em minusculo, para não ter erros na procura

   for(var i=0; i<database.length; i++) {                              //Loop para percorrer o database
        database[i].name = database[i].name.toLowerCase();              //Coloca todo o database name em minusculo
        if(database[i].name === caracter) {                             //Condicional para acharmos o i
            document.getElementById('cpf').value = database[i].cpf;     //trocando o valor do CPF no input
            document.getElementById('born-date').value = database[i].born;  // trocando o valor da data de nascimento no input
            armazenar = i;
    }
    
}       
        if(database[armazenar].name != caracter){
            document.getElementById('cpf').value = '000.000.000.00';
            document.getElementById('born-date').value = 'dd/mm/aaaa';

            alert("Usuário Inexistente");
}

}

