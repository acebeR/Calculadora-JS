/*
	Objetivo: Usar os operadores
	Essa aula é a #14 junto com as anteriores
*/

opcaoClicada = '';
guardaCalculo = "";
flag = 0; //quantidade de numeros;
numero = "";
numeroCalculo = 0;
acumula = 0;

// Cada botão de número chama esta função 
function validaCalculo(num){
	flag += 1;
	
	if(flag > 1){
		calculo(num);
		
	}else{
		acumula = num;
	}
	
	guardaCalculo = guardaCalculo + num;
	preencherTxtDeCima(guardaCalculo);
	

	
}
function numeroPrecionado(num){
	numero = numero + num;
	if(flag == 0){
		preencherTxtDeBaixo(numero);
		preencherTxtDeCima(numero);
	}else{
		preencherTxtDeBaixo(numero);
	}

}	
function operacao(simbulo){
	
	validaCalculo(parseInt(numero));
	numero = "";

	if((flag <= 1) && (simbulo == '=')){
		simbulo = '';
		guardaCalculo = "";
	}else{
		
		opcaoClicada = simbulo;
		guardaCalculo = guardaCalculo + opcaoClicada;
		preencherTxtDeCima(guardaCalculo);
	}		

}	

function calculo(numeroCalculo){
	
	if(acumula == 0){		
		if(opcaoClicada == 'x'){
			acumula = 1;
			
		}
		if(opcaoClicada == '/'){
			acumula = numeroCalculo;
			numeroCalculo = 1;

		}
	}	
	
	
	
	if(opcaoClicada == '+'){
		acumula += numeroCalculo;
	}else if(opcaoClicada == '-'){
		acumula -= numeroCalculo;
	}else if(opcaoClicada == 'x'){
		acumula *= numeroCalculo;
	}else if(opcaoClicada == '/'){
		acumula /= numeroCalculo ;
	}
	preencherTxtDeBaixo(acumula);
	
}


function apagarTxt(){
	opcaoClicada = '';
	guardaCalculo = "";
	flag = 0; //quantidade de numeros;
	numero = "";
	numeroCalculo = 0;
	acumula = 0;
	preencherTxtDeCima("");
	preencherTxtDeBaixo("");
}

function preencherTxtDeCima(NomeDoBtnnumero){

	document.getElementById("numeroDigitado").value = NomeDoBtnnumero;

}
function preencherTxtDeBaixo(NomeDoBtnnumero){
	document.getElementById("numeroDoMomento").value = NomeDoBtnnumero;
	

}

