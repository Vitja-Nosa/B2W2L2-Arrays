var array = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]

var week = document.getElementById("week");
var werkdagen = document.getElementById("werkdagen");
var omgekeerdeWeek = document.getElementById("omgekeerdeWeek");
var omgekeerdeWerkdagen = document.getElementById("omgekeerdeWerkdagen");
var omgekeerdeWeekenddagen = document.getElementById("omgekeerdeWeekenddagen");

week.innerHTML = array.join(", ")
week.innerHTML += "."

for (i=0; i<4; i++) {
	werkdagen.innerHTML += array[i] + ", "
}
werkdagen.innerHTML += array[4] + "."

for (i=6; i>0; i--) {
	omgekeerdeWeek.innerHTML += array[i] + ", "
}
omgekeerdeWeek.innerHTML += array[0] + "."

omgekeerdeWerkdagen.innerHTML += array.reverse();
omgekeerdeWerkdagen.innerHTML = array.join(", ")

omgekeerdeWeekenddagen.innerHTML += array.reverse();
omgekeerdeWeekenddagen.innerHTML = array[6] + ", " + array[5] + "."
