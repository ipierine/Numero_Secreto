alert('Boas Vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('Este é o número secreto',numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    //condição se o chute é igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    }
    else{
        if(chute > numeroSecreto) {
        alert(`O numero secreto é menor que ${chute}`);
        }
        else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tetativas = tetativas +1;
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tantativas' : 'tentativa';
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1){
// alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// }else{
//     alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

  