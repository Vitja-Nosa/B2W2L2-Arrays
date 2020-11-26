var array = [2, 4, 6, 8]

var tableNum1 = document.getElementById("tableNum1");
var tableNum1Text = document.getElementById("tableNum1Text");
var tableNum2 = document.getElementById("tableNum2");
var tableNum2Text = document.getElementById("tableNum2Text");
var tableNum3 = document.getElementById("tableNum3");
var tableNum3Text = document.getElementById("tableNum3Text");
var tableNum4 = document.getElementById("tableNum4");
var tableNum4Text = document.getElementById("tableNum4Text");

var answerOfTables = 0;

tableNum1.innerText = "Tafel van " + array[0] + ":"
for (i=1; i<=10; i++) {
	answerOfTables = array[0] * i
	tableNum1Text.innerHTML += i + " x " + array[0] + " = " + answerOfTables + "<br>"
}

tableNum2.innerText = "Tafel van " + array[1] + ":"
for (i=1; i<=10; i++) {
	answerOfTables = array[1] * i
	tableNum2Text.innerHTML += i + " x " + array[1] + " = " + answerOfTables + "<br>"
}

tableNum3.innerText = "Tafel van " + array[2] + ":"
for (i=1; i<=10; i++) {
	answerOfTables = array[2] * i
	tableNum3Text.innerHTML += i + " x " + array[2] + " = " + answerOfTables + "<br>"
}
tableNum4.innerText = "Tafel van " + array[3] + ":"
for (i=1; i<=10; i++) {
	answerOfTables = array[3] * i
	tableNum4Text.innerHTML += i + " x " + array[3] + " = " + answerOfTables + "<br>"
}



