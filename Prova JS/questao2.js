/*function timeSet(mensagem){
   
   setTimeout
    
}

let mensagem = "teste"

timeSet(mensagem)
*/


mensagem = "Olá demorado"

function imprimirDemorado(){
    setTimeout(() => {
        console.log(this.mensagem)
    }, 5000);
}

imprimirDemorado()