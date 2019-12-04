function calcularArea(largura, comprimento){
	largura = parseFloat();
	comprimento = parseFloat();
	
	var area = largura * comprimento;
	return area;
}
var largura = prompt("Digite a largura: ");
var comprimento = prompt("Digite a comprimento: ");

document.write(calcularArea( largura,comprimento));