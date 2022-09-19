function passwordcheck() {
	let password = document.getElementById('passw').value;
	let passwordagain = document.getElementById('passwagain').value;
	let filter = /([a-zA-Z]*[0-9]*[@-_-$])/;
	if (password === passwordagain && filter.test(password)) {
		if (len(password) <= 8 && len(password) >= 16) {
			return true;
		}
	}
}

function emailcheck() { 
	let email = document.getElementById('email').value;
	let filter = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
	return filter.test(email);
}

function postalcodecheck() { 
	let postalcode = document.getElementById('postalcode').value;
	let regex = /^[0-9]{4}$/
	return regex.test(postalcode);
}
