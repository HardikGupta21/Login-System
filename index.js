

// SignUp System Validation
const form = document.getElementById('sg-form');
const name = document.getElementById('susername');
const email = document.getElementById('semail');
const password = document.getElementById('spassword');
const confpassword = document.getElementById('scpassword');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	var validation = checkInput();
	if (validation) {
		swal("Hurray !", "You have registered successfully.", "success");
	}
	else
		swal("Oops!", "Looks like you have entered some incorrect data.", "warning");
});
function checkInput() {
	var isvalid = new Array();
	var nameval = name.value.trim();
	var emailval = email.value.trim();
	var passwordval = password.value.trim();
	var confpasswordval = confpassword.value.trim();

	localStorage.setItem('name1', nameval);
	localStorage.setItem('email1', emailval);
	localStorage.setItem('pass1', passwordval);
	if (nameval === '') {
		setErrorFor(name, 'Name cannot be blank.');
		isvalid.push(false);
	}
	else if (nameval.length < 3) {
		setErrorFor(name, 'Name is too Short.');
		isvalid.push(false);
	}
	else {
		setSuccessFor(name);
		isvalid.push(true);
	}
	if (emailval === '') {
		setErrorFor(email, 'Email cannot be blank.');
		isvalid.push(false);
	}
	else if (!isEmail(emailval)) {
		setErrorFor(email, 'Email is not valid');
		isvalid.push(false);
	}
	else {
		setSuccessFor(email);
		isvalid.push(true);
	}
	if (passwordval === '') {
		isvalid.push(false);
		setErrorFor(password, 'Password cannot be blank');
	}
	else {
		setSuccessFor(password);
		isvalid.push(true);
	}
	if (confpasswordval === '') {
		setErrorFor(confpassword, 'Confirm Password cannot be blank.');
		isvalid.push(false);
	}
	else if (passwordval !== confpasswordval) {
		setErrorFor(confpassword, 'Password and Confirm Password did not match.');
		isvalid.push(false);
	}
	else {
		setSuccessFor(confpassword);
		isvalid.push(true);
	}
	if (isvalid.includes(false))
		return false;
	else
		return true;
}
function setErrorFor(input, message) {
	const formcontrol = input.parentElement;
	formcontrol.className = 'input-field sg-input-field error';
	const er = formcontrol.querySelector('.er');
	const span = formcontrol.querySelector('.formerror');
	er.setAttribute('title', message);
}
function setSuccessFor(input, message) {
	const formcontrol = input.parentElement;
	formcontrol.className = 'input-field sg-input-field success';
}
function isEmail(email) {
	if (email.indexOf('@') > 0)
		return true;
	else
		return false;
}

// Login System Validation
var lform = document.getElementById('lg-form');
lform.addEventListener('submit', function (event) {
	event.preventDefault();
	var check = checkLoginInput();
	if (check) {
		swal("Login Success !", "You have Logged In successfully.", "success");
	}
	else
		swal("Oops!", "Invalid Username or Password.", "warning");
});
function checkLoginInput() {

	var lname = document.getElementById('username').value;
	var lemail = document.getElementById('email-lg').value;
	var lpassword = document.getElementById('password').value;


	var name1 = localStorage.getItem('name1');
	var email1 = localStorage.getItem('email1');
	var pass1 = localStorage.getItem('pass1');

	if (lname === name1 && lemail === email1 && lpassword === pass1) {
		return true;
	}
	else {
		return false;
	}

}


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
// const tabIndicator = document.getElementsByClassName(".tab-indicator");
tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach(tabContents => {
			tabContents.classList.remove('active');
		});
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});
		tab.classList.add('active');
		target.classList.add('active');
	});
});