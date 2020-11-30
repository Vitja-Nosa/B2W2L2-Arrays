var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];
//					0			1		 2		   3		4				5				6
var spellenText = document.getElementById("spellenText");

var randomNumber = Math.floor((Math.random() * spellen.length));
console.log(randomNumber);

spellenText.innerHTML = spellen[randomNumber]