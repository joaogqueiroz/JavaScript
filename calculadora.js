
function calcular(){
	var operacao = document.getElementById("operacao").value;

	var num1 = document.getElementById("num1").value;

	var num2 = document.getElementById("num2").value;

	if(num1 == "" || num1 == null){
		alert("favor digitar um numero valido");
		return false;
	}

	if(num2 == "" || num2 == null){
		alert("favor digitar um numero valido");
		return false;
	}

	switch(operacao){

		case "1" //subtração
			break;
			
		case "2" //adicação
			break;
			
		case "3" //multiplicação
			break;
			
		case "4" //divisão
			break;
		default
			alert("Operacao invalida");
			return false;

	}


	alert(operacao);

}