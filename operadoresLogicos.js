//&& e
// || ou
// ! negação

var nota = prompt('Digite a nota do aluno')
var faltas = prompt('Digite a qtde de faltas do aluno')

var media = 7
var faltas_limite = 15

if (nota >= media && faltas <= faltas_limite){
	document.write('Verdadeiro')
} else {
	document.write('Falso')
}