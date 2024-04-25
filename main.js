// Cria constante que armazena um arry com as teckas da aplicação
const listaDeTeclas = document.querySelectorAll('.tecla');

//  função que executa o som correspondente a tecla precionada
function tocaSom (seletorAudio) {
    
   const elemento =  document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') {
    elemento.play();

   }
   else {
    console.log('Elemento não encontrado ou seletor inválido');
   }
}

//Cria um looping que percorre todoas as posições do array de teclas para reclacionar com cada intem correspondente do arrey de som do instrumento
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // Cria contante que armazena a posição da tecla no array
    const tecla = listaDeTeclas[contador];

    // Cria constante que armazena a seguna posição de classes das teclas
    const instrumento = tecla.classList[1];

    // Cria constante que armazena a corespondencia do som com a tecla
    const idAudio = `#som_${instrumento}`;

    // função anônima que executa a função de tocar o som correspondente à tecla
    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === 'Enter' || evento.code === 'Space') {

            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
