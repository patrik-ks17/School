function emailcheck() { 
	let email = document.getElementById('email').value;
	let filter = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
	if (filter.test(email)) {
		return true;
	} 
	else {
		return 'Ez nem egy email cím!'
	}
}

function passwordcheck() {
	let password = document.getElementById('passw').value;
	let passwordagain = document.getElementById('passwagain').value;
	let filter = /([a-zA-Z]*[0-9]*[@-_-$])/;
	if (password === passwordagain) {
		if (filter.test(password)) {
			if (parseInt(password.length) < 8) {
				return 'A jelszó túl rövid!'
			} 
			else if (parseInt(password.length) > 16) {
				return 'A jelszó túl hosszú!'
			}
			else {
				return true;
			}
		} 
		else if (password.length == 0 || passwordagain.length == 0) {
			return 'Adjon meg egy jelszót!'
		}
		else {
			return 'A jelszónak tartalmaznia kell betűket, számokat és legalább egy speciális karaktert ($, _ vagy @)!'
		}
	} 
	else {
		return 'A két jelszó nem eggyezik!'
	} 
}

function birthcheck() {
	let birth = document.getElementById('birth').value;
	if (birth.length > 0) {
		return true;
	}
	else {
		return 'Adja meg a születési dátumát!'
	}
}

function postalcodecheck() { 
	let postalcode = document.getElementById('postalcode').value;
	let regex = /^[0-9]{4}$/
	if (regex.test(postalcode)) {
		return true;
	}
	else {
		return 'Az irányítószámnak 4 számjegyből kell állnia!'
	}
}

function checkboxes() {
	let checkboxes = document.querySelectorAll('input[type=checkbox]');
	let count = 0;
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked)
			count++;
	}
	if (count == 0) {
		return 'Nem jelölt be egy iskolai végzettséget sem!';
	} else {
		return true;
	}
}

function valid() {
	if (emailcheck() != true) {
		alert(emailcheck())
		return false;
	}
	else if (passwordcheck() != true) { 
		alert(passwordcheck())
		return false;
	}
	else if (birthcheck() != true) {
		alert(birthcheck())
		return false;
	}
	else if (postalcodecheck() != true) {
		alert(postalcodecheck())
		return false;
	}
	else if (checkboxes() != true) { 
		alert(checkboxes())
		return false;
	}
	else return true;
}
