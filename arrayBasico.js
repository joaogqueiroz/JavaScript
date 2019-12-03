//primeira possivel forma de ser declarado um array

var listaFrutas = Array();
listaFrutas[1]= 'Banana';
listaFrutas[2]= 'Maçã';
listaFrutas[3]= 'Uva';
listaFrutas[4]= 'Goiaba';

alert(listaFrutas[2]);

//Segunda possivel forma de ser declarado um array
var listaFrutas = [];//colocando desta forma támbém é entendido como array
listaFrutas[1]= 'Banana';
listaFrutas[2]= 'Maçã';
listaFrutas[3]= 'Uva';
listaFrutas[4]= 'Goiaba';

document.write(listaFrutas[2]);

//Terceira possivel forma de ser declarado um array
var listaFrutas = Array('Banana','Maçã','Uva','Goiaba');//Desta forma a lista é contada apartir do zero em diante.
document.write("<br/ > <br />")
document.write(listaFrutas[2]);
