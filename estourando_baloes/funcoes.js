function iniciaJogo(){
	var dificuldade = document.getElementById('dificuldade').value;

	window.location.href = 'jogo.html'+dificuldade;

	alert(dificuldade);
}