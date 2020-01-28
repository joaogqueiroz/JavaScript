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
}