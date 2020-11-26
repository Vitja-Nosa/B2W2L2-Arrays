var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

var additionText = document.getElementById("additionText");
var subtractionText = document.getElementById("subtractionText");
var multiplyText = document.getElementById("multiplyText")
var divideByText = document.getElementById("divideByText")

var answer = 0;

function optellen(num1, num2){
	for (i=0; i<10; i++) {
		answer = num1[i] + num2[i]
		additionText.innerHTML +=  num1[i] + " + "+ num2[i] + " = " + answer + "<br>"
	}
}
function aftrekken(num1, num2) {
	for (i=0; i<10; i++) {
		answer = num1[i] - num2[i]
		subtractionText.innerHTML +=  num1[i] + " - "+ num2[i] + " = " + answer + "<br>"
	}
}
function vermenigvuldigen(num1, num2) {
	for (i=0; i<10; i++) {
		answer = num1[i] * num2[i]
		multiplyText.innerHTML +=  num1[i] + " * "+ num2[i] + " = " + answer + "<br>"
	}
}
function delen(num1, num2) {
	for (i=0; i<10; i++) {
		answer = num1[i] / num2[i]
		divideByText.innerHTML +=  num1[i] + " / "+ num2[i] + " = " + answer + "<br>"
	}
}
optellen(arrayEen, arrayTwee);
aftrekken(arrayTwee, arrayEen);
vermenigvuldigen(arrayEen, arrayTwee);
delen(arrayTwee, arrayEen);

