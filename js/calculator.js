/**
 * Created by Alex on 29.05.2016.
 */
const arr = new Array(3);
var counter = 0;

function Tastatur (evt){


}

function addIntoArr(erg_String){
	if (arr[0] == undefined){
		arr[0] = erg_String;
	}
	else if (arr[1] == undefined) {
		arr[1] = erg_String;
	}
	else if (arr[2] == undefined) {
		arr[2] = erg_String;
	}
	else {
		arr[2] = arr[1];
		arr[1] = arr[0];
		arr[0] = erg_String;
	}

}

function Hinzufuegen(Zeichen){
    window.document.Rechner.Display.value = window.document.Rechner.Display.value + Zeichen;

}

function Ergebnis(){
	addIntoArr(window.document.Rechner.Display.value);
	window.document.Rechner.Display.value = eval(window.document.Rechner.Display.value);

}

function ErgZurueck(){
	if (counter == 0){
		window.document.Rechner.Display.value = arr[counter];
		counter = counter + 1;
	}
	else if (counter == 3){
		counter = 0;
		window.document.Rechner.Display.value = arr[counter];
		counter = counter + 1;
	}
	else{
		window.document.Rechner.Display.value = arr[counter];
		counter = counter + 1;
	}
	


}
