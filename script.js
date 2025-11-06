// 1º PASSO SELECIONAR OS ELEMENTOS DO HTML
//ESSA ByID... AQUI JS / NO HTML É ID=.... NO CSS É (#)
const contadorElemento = document.getElementById('contador')
const btnDiminuir = document.getElementById('diminuir')
const btnResetar = document.getElementById('resetar')
const btnAumentar = document.getElementById('aumentar')

// 2º PASSO CRIAR UMA VARIAVEL PARA ARMAZENAR O VALOR DO CONTADOR
let contador = 0;

// 3 º PASSO CRIAR UM FUNÇÃO DA COR BASEADA NO VALOR

function atualizarCor() {
//ESSA CLASSNAME... AQUI JS / NO HTML É UMA CLASS=... NO CSS É (.)
    if (contador > 0) {
        contadorElemento.className = 'positivo';
    } else if
        (contador < 0) {
        contadorElemento.className = 'negativo';
    } else {
        (contadorElemento.className) = 'zero';
    }
}

// 4º PASSO ADCIONAR O EVENTO DE CLICK NO BUTÃO AUMENTAR

btnAumentar.addEventListener('click', function () {
contador++;
contadorElemento.textContent=contador;
atualizarCor()
});

// 5º PASSO ADCIONAR O EVENTO DE CLICK NO BOTÃO RESETAR

btnResetar.addEventListener('click',function(){
contador = 0;
contadorElemento.textContent=contador;
atualizarCor()
});

//6º PASSO ADCIONAR O EVENTO DE CLICK NO BOTÃO DIMINUIR

btnDiminuir.addEventListener('click', function(){
contador--;
contadorElemento.textContent=contador;
atualizarCor()
});