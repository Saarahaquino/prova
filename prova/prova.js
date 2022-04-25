// 1 - Muitas estruturas algorÃ­tmicas tem sua lÃ³gica inspirada em coisas do seu cotidiano, como por exemplo o ato de
// tomar Ã¡gua e depois ter que ir ao banheiro.
// Baseado nos seus conhecimentos de estruturas algorÃ­tmicas 
//e na sua vivÃªncia pessoal, descreva uma situaÃ§Ã£o cotidiana que se assemelha a essas respectivas estruturas abaixo:

//a - Array
//b - FunÃ§Ã£o
//c - LaÃ§o de repetiÃ§Ã£o (for)
//d - LaÃ§o de repetiÃ§Ã£o (while)
//e - Condicionais (if e else)

// inscrição de um curso
//se o aluno for maior de 18 anos ele faz a inscrição, caso não, ele terá que levar um responsável

//2 - Agora, com base nas suas respostas a cima, repita essa mesma situaÃ§Ã£o que vocÃª descreveu, porÃ©m transformando-as em cÃ³digo JavaScript.

//a - Array
const cursos =[["informatica"],["ingês"],['excel']];
//b - FunÃ§Ã£o
 function cafeDaAmanha(){
     console.log('leite com chocolate + bolo e dois pão')
 }
 cafeDaAmanha();
//c - LaÃ§o de repetiÃ§Ã£o (for)
function plantas(){ 
for(let areia = 0; areia <= 8; areia++){
    console.log('todas estao com  areia '   +  areia );
}
}

//d - LaÃ§o de repetiÃ§Ã£o (while)
function cocaCola(){
let coca = 0;
let garrafa = 10;

while(coca < 400){
    coca += garrafa;
    console.log('garrafa esta com coca' + coca );
}
}

//e - Condicionais (if e else)

function idade(i){
     if(i >= 18 ){
         return true }
          else{
               return false; }}




 


