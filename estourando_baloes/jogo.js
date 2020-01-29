var timerId = null; //variavel que armazena a chama da função timeout

function iniciaJogo(){

	var url = window.location.search;

	var nivelJogo = url.replace("?", " ");
	var tempoSegundos = 0;

	if (nivelJogo == 1) {// 1 fácil -> 120 segundos	
		tempoSegundos = 120;

	}

	if (nivelJogo == 2) {// 2 médio -> 60 segundos
		tempoSegundos = 60;
		
	}

	if (nivelJogo == 3) {// 3 dificil -> 30 segundos
		tempoSegundos = 30;
		
	}

	//inserindo os segundos no span
	document.getElementById('cronometro').innerHTML = tempoSegundos;

 	//quantidade de balões
	var qtdBaloes = 80;
	criaBaloes(qtdBaloes);

	//imprimir qtd baloes inteiros
	document.getElementById('baloesInteiros').innerHTML = qtdBaloes;
	document.getElementById('baloesEstourados').innerHTML = 0;

	contagemTempo(tempoSegundos + 1);
	
}

	function contagemTempo(segundos){

		segundos = segundos - 1;

		if(segundos == -1){
			clearTimeout(timerId); //para a execução da função do setTimeout
			gameOver();
			return false;
		}

		document.getElementById('cronometro').innerHTML = segundos;

		timerId = setTimeout("contagemTempo("+segundos+")", 1000);


	}

	function removeEventosBaloes() {
		var i = 1; //contado para recuperar balões por id
		
		//percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
		while(document.getElementById('b'+i)) {
			//retira o evento onclick do elemnto
			document.getElementById('b'+i).onclick = '';
			i++; //faz a iteração da variávei i
		}
	}

	function gameOver(){
		removeEventosBaloes();
		alert('Fim de jogo, você não conseguiu estourar todos os balões a tempo')
	}

	function criaBaloes(qtdBaloes){
		//let cria uma variavel valida apenas no bloco
		for (var i = 1; i <= qtdBaloes; i++) {
			
			var balao = document.createElement('img');
			balao.src = 'imagens/balao_azul_pequeno.png';
			balao.style.margin = '10px';
			balao.id = 'b'+i;
			balao.onclick = function(){estourar (this);}

			document.getElementById('cenario').appendChild(balao);
		}
	}

	function estourar(e){
		var idBalao = e.id;
		document.getElementById(idBalao).setAttribute('onclick','');
		document.getElementById(idBalao).src = 'imagens/balao_azul_pequeno_estourado.png';
		pontuacao(-1);
	}

	function pontuacao(acao){
		var baloesInteiros = document.getElementById('baloesInteiros').innerHTML;
		var baloesEstourados = document.getElementById('baloesEstourados').innerHTML;
		
		baloesEstourados = parseInt(baloesEstourados);
		baloesInteiros = parseInt(baloesInteiros);

		baloesInteiros = baloesInteiros + acao;
		baloesEstourados = baloesEstourados - acao;

		document.getElementById('baloesEstourados').innerHTML = baloesEstourados
		document.getElementById('baloesInteiros').innerHTML = baloesInteiros

		situacaoJogo(baloesInteiros);
	}

	function situacaoJogo(baloesInteiros){
		if(baloesInteiros == 0){
			alert('Parabéns, você venceu!')
			paraJogo();
		}
	}

	function paraJogo(){
		clearTimeout(timerId);
	}
