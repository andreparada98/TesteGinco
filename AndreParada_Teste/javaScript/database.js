

function inicia(){
    let cpf = document.getElementById('cpf')
    let nasc = document.getElementById('born')
    //criacao de um vetor com dados de clientes
const database = [
    {name: "André Parada", cpf: "00011122233", born: "01/01/1991"},
    {name: "Joao Leite", cpf: "33344455566", born: "02/02/1982"},
    {name: "Ana Silva", cpf: "77788899910", born: "03/03/1973"},
    {name: "Betania Oliveira", cpf: "11122233344", born: "04/04/1964"},
    {name:"Humberto Amilton", cpf:"15115215366", born:"05/02/1955"}
];
    //var input = document.getElementById('nomeid')
    document.querySelector('input#client-name').addEventListener("blur", event =>{
        //verifica se o cliente digitado esta cadastrado 
        //caso esteja seus dados sao preenchidos automaticamente
        for( let i = 0; i< database.length; i++){
            if(database[i].nome == event.target.value){
                cpf.value = database[i].cpf
                nasc.value = database[i].nasc
                break
            }
        }

    });
}

window.addEventListener("load", inicia)