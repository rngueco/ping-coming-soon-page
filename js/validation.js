const subscribe_form = document.querySelector('.subscribe');
const email_input = document.querySelector('input[type="email"]');

// Add an invalid event listener to input
email_input.addEventListener('invalid', addErrorMessage);

// Check for validity when user focuses out of input field
email_input.addEventListener('blur', () => {
    email_input.checkValidity();
})

// Everytime user focuses on input field, remove any existing error message.
email_input.addEventListener('focus', removeErrorMessage)

// Return an error message when user submits form with invalid input
subscribe_form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!email_input.checkValidity()) { }
    else subscribe_form.submit();
})


function addErrorMessage(evt) {
    // Remove any existing first? When user submits the form using enter key, 
    // the error messgae is duplicated when user focuses out of the field because of the form
    // 'onsubmit' listener and the 'blur' listener.
    removeErrorMessage(evt);

    // Build an error message element.
    let error_msg = document.createElement('span');
    error_msg.classList.add('error-message');

    // Check what kind of error it is and return appropriate error message.
    if (evt.target.value == "" || evt.target.value == null) {
        error_msg.innerText = "Please enter an email address"
    } else {
        error_msg.innerText = "Please provide a valid email address"
    }
    
    // Append error message after input element
    evt.target.after(error_msg);
    evt.target.classList.add('error');
}

function removeErrorMessage(evt) {
    let error_msgs = document.querySelectorAll('.error-message');

    error_msgs.forEach(msg => {
        msg.remove();
    })

    evt.target.classList.remove('error');
}