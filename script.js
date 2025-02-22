window.onload = function() {
    document.getElementById("alert").style.display = "none";
}

function validateInput() {
    let first = document.getElementById('first-name').value;
    let last = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let query = document.querySelector('input[name="type"]:checked');
    let message = document.getElementById('message').value;
    let consent = document.getElementById('consent').checked;

    document.getElementById('error-first').textContent = "";
    document.getElementById('error-last').textContent = "";
    document.getElementById('error-email').textContent = "";
    document.getElementById('error-query').textContent = "";
    document.getElementById('error-message').textContent = "";
    document.getElementById('error-consent').textContent = "";

    let isValid = true;

    // validate name
    if (first === "") {
        document.getElementById('error-first').textContent = "This field is required";
        isValid = false;
    }
    if (last === "") {
        document.getElementById('error-last').textContent = "This field is required";
        isValid = false;
    }

    // validate email
    if (email === "") {
        document.getElementById('error-email').textContent = "This field is required";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('error-email').textContent = "Please enter a valid email address";
        isValid = false;
    }

    // validate query
    if (!query) {
        document.getElementById('error-query').textContent = "Please select a query type";
        isValid = false;
    }

    // validate message
    if (message === "") {
        document.getElementById('error-message').textContent = "This field is required";
        isValid = false;
    }

    //validate consent
    if (!consent) {
        document.getElementById('error-consent').textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    }

    return isValid;
}



function main() {
    valid = validateInput();

    if (valid) {
        document.getElementById("alert").style.display = "block";
        document.querySelector("form").reset();
    }
}