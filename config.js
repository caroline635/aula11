

function MostrarNome() {
   let divNova = document.createElement("div");
   let inputNome = document.querySelector("#nome");
   let inputIdade = document.querySelector("#idade");
   let textoNovo = document.createTextNode(` Olá ${inputNome.value} seja muito Bem Vindo(a) ao meu site e você tem ${inputIdade.value} anos`);
   

   divNova.appendChild(textoNovo);
   document.body.appendChild(divNova);
   }

  

   let botaook = document.querySelector("#botao");
   botaook.onclick = MostrarNome;

   let resultado = document.querySelector("#resultado");
   function adicao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value*1) + (input_num2.value*1);
    resposta.innerHTML=`O resultado e: ${resultado}`;
   }      

   

   function subtracao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value) - (input_num2.value);
    resposta.innerHTML=`O resultado e: ${resultado}`;
       
       
   }
   
   function divisao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value) / (input_num2.value);
    resposta.innerHTML=`O resultado e: ${resultado}`;
       
   }
   
   function multiplicacao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value) * (input_num2.value);
    resposta.innerHTML=`O resultado e: ${resultado}`;

   }
   
  