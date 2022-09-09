function valt(target) {
	// document.getElementById('teglalap').style.display = 'none';
	// document.getElementById('kor').style.display = 'none';
	// document.getElementById('haromszog').style.display = 'none';
	let formok = document.getElementsByTagName('form'); 
	for (var i = 0; i < formok.length; i++) {
		formok[i].style.display = 'none';

	}
	switch (target) {
		case 'teglalap':
			document.getElementById('teglalap').style.display = 'block';
			break;
		case 'kor':
			document.getElementById('kor').style.display = 'block';
			break;
		case 'haromszog':
			document.getElementById('haromszog').style.display = 'block';
			break;
	}
}

function torol() {
	document.getElementById('kor_sugar').value = "";
	document.getElementById('kor_kerulet').value = "";
	document.getElementById('kor_terulet').value = "";

}

function teglalap_szamol() {
	let a = parseInt(document.getElementById('teglalap_a').value);
	let b = parseInt(document.getElementById('teglalap_b').value);
	let kerulet, terulet;
	kerulet = 2 * a + 2 * b;
	terulet = a * b;
	document.getElementById('teglalap_kerulet').value = kerulet;
	document.getElementById('teglalap_terulet').value = terulet;
}

function kor_szamol(source) {	
	if(source == "kor_sugar") {
		let r = parseInt(document.getElementById('kor_sugar').value);
		document.getElementById('kor_kerulet').value = Math.round(2 * r * Math.PI);
		document.getElementById('kor_terulet').value = Math.round(r * r * Math.PI);
	}
	else if(source == "kor_kerulet") {
		let kerulet = parseInt(document.getElementById('kor_kerulet').value);
		let r = kerulet / 2 / Math.PI;
		document.getElementById('kor_terulet').value = Math.round(r * r * Math.PI);
		document.getElementById('kor_sugar').value = Math.round(r);
	}
	else {
		let terulet = parseInt(document.getElementById('kor_terulet').value);
		let r = Math.sqrt(terulet / Math.PI);
		document.getElementById('kor_sugar').value = Math.round(r);
		document.getElementById('kor_kerulet').value = Math.round(2 * r * Math.PI);
	}
}

function haromszog_szamol() {
	let a = parseInt(document.getElementById('haromszog_a').value);
	let b = parseInt(document.getElementById('haromszog_b').value);
	let c = parseInt(document.getElementById('haromszog_c').value);
	let s = (a + b + c) / 2;
	document.getElementById('haromszog_k').value = Math.round(a + b + c);
	document.getElementById('haromszog_t').value = Math.round(Math.pow(s * (s-a) * (s-b) * (s-c), 1));
}