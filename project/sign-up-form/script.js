/* ----------------------------- Form Validation ---------------------------- */

const vEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
function isValidEmail(email) {
	if (email !== '' && vEmail.test(email)) {
		$('#mail').addClass('isValid');
		$('#mail').removeClass('notValid');
		$('#mailError').hide();
		return vEmail.test(email);
	} else if ($('#mail').val() == '') {
		$('#mail').addClass('notValid');
		$('#mail').removeClass('isValid');
	} else {
		$('#mailError').hide();
		$('#mail').addClass('notValid');
		$('#mail').removeClass('isValid');
	}
}

// Show or Hide the ToolTips
function showOrHideToolTip(show, element) {
	// show element when show is true, hide when false
	if (show) {
		element.style.display = 'inherit';
	} else {
		element.style.display = 'none';
	}
}

// Runs the validator function through the validators above
function createListener(validator) {
	return (e) => {
		const text = e.target.value;
		const valid = validator(text);
		const showTip = text !== '' && !valid;
		const tooltip = e.target.nextElementSibling;
		showOrHideToolTip(showTip, tooltip);
	};
}

// All Inputs connected here will have live error reporting due to the handler used
// Event Listeners for checking the validations
$('#mail').on('input', createListener(isValidEmail));

// s

$('#mail').after(
	'<span class="error">Must be a valid E-Mail Address (name@example.com)</span>'
);

// Secondary empty input error reporting functions below
function showError(element, elementError) {
	if (element.val() == '') {
		elementError.show();
	} else {
		elementError.hide();
	}
}

function defaultErrors() {
	showError($('#mail'), $('#mailError'));
}

/* -------------------------- Show / Hide Password -------------------------- */

const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
		togglePasswordButton.textContent = 'Hide password';
		togglePasswordButton.setAttribute('aria-label', 'Hide password.');
	} else {
		passwordInput.type = 'password';
		togglePasswordButton.textContent = 'Show password';
		togglePasswordButton.setAttribute(
			'aria-label',
			'Show password as plain text. ' +
				'Warning: this will display your password on the screen.'
		);
	}
}
