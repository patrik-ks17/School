function szamol() {
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	let kerulet, terulet;
	kerulet = 2 * a + 2 * b;
	terulet = a * b;
	document.getElementById('kerulet').value = kerulet;
	document.getElementById('terulet').value = terulet;
}