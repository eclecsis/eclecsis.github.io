const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var display = document.getElementById("stuff");
var entry = document.getElementById("entry");
const code = document.getElementById("encrypt");
const decode = document.getElementById("decrypt");

code.addEventListener("click", encrypt);
decode.addEventListener("click", decrypt);

function decrypt(){
	let message = entry.value;
	let realMessage = message.split("").map((letter) => {

		var realLetter;
		let realLetterIndex = alphabet.indexOf(letter.toUpperCase()) - 1;
		if (realLetterIndex > -1) {
			realLetter = alphabet[realLetterIndex];
		} else if (realLetterIndex == -1) {
			realLetter = "Z";
		} else {
			realLetter = letter;
		}
		return realLetter;
	}).join("");
	
	console.log(realMessage);
	display.innerHTML = realMessage;
	
	
}

function encrypt() {
	let message = entry.value;
	let fakeMessage = message.split("").map((letter)=> {
		console.log(letter);
		var fakeLetter;
		let fakeLetterIndex = alphabet.indexOf(letter.toUpperCase()) + 1;
		console.log(fakeLetterIndex);
		if (fakeLetterIndex > 0){
			fakeLetter = alphabet[fakeLetterIndex];
		} else if (fakeLetterIndex === 26){
			console.log(fakeLetterIndex);
			fakeLetter = "A";
			
		} else {
			console.log(fakeLetterIndex);
			fakeLetter = letter;
		}
		return fakeLetter;
	}).join("");
	
	display.innerHTML = fakeMessage;
}


console.log(decrypt("NZ QSFDJ,PVT!"));

console.log(encrypt("Why not have it all?"));