// CHURRASCOMETRO

// CARNE: 400g/pessoa; 650g - 6h+; OK
// CERVEJA: 1200ml/adulto; 2000ml - 6h+; 
// REFRIGERANTE/ÁGUA: 1000ml/pessoa; 1500ml - 6h+ 

// *criança vale 0,5 pessoa
 
let a = 1;

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let totalCerveja = cervejaPP(duracao) * adultos;
    let totalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);

    let kgCarne = totalCarne/1000;
    let latasCerveja = Math.ceil(totalCerveja/355);
    let garrafasBebida = Math.ceil(totalBebida/2000);
    
    resultado.innerHTML = `<p>${kgCarne}kg de carne.</p>`       // " ` ` " essa porrinha é o Objects Literals     
    resultado.innerHTML += `<p>${latasCerveja} latas de cerveja.</p>`
    resultado.innerHTML += `<p>${garrafasBebida} garrafas de 2l de refrigerante/água.</p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }

}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }

}