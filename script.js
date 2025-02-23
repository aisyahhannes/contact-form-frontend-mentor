window.onload = function() {
    document.getElementById("alert").style.display = "none";
}

// get form elements
const first = document.getElementById('first-name');
const last = document.getElementById('last-name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// get error elements
const errorfirst = document.getElementById('error-first');
const errorlast = document.getElementById('error-last');
const erroremail = document.getElementById('error-email');
const errorquery = document.getElementById('error-query');
const errormessage = document.getElementById('error-message')
const errorconsent= document.getElementById('error-consent')

// get alert
const alertBox = document.getElementById("alert");

function validateInput() {

    // get form elements
    const selectedQuery = document.querySelector('input[name="type"]:checked');
    const consent = document.getElementById('consent').checked;

    // clear error messages
    errorfirst.textContent = "";
    errorlast.textContent = "";
    erroremail.textContent = "";
    errorquery.textContent = "";
    errormessage.textContent = "";
    errorconsent.textContent = "";

    let isValid = true;

    // validate name
    if (first.value === "") {
        errorfirst.textContent = "This field is required";
        isValid = false;
    }
    if (last.value === "") {
        errorlast.textContent = "This field is required";
        isValid = false;
    }

    // validate email
    if (email.value === "") {
        erroremail.textContent = "This field is required";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        erroremail.textContent = "Please enter a valid email address";
        isValid = false;
    }

    // validate query
    if (!selectedQuery) {
        errorquery.textContent = "Please select a query type";
        isValid = false;
    }

    // validate message
    if (message.value === "") {
        errormessage.textContent = "This field is required";
        isValid = false;
    }

    //validate consent
    if (!consent) {
        errorconsent.textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    }

    return isValid;
}

function queryColor() {
    const selectedQuery = document.querySelector('input[name="type"]:checked');
    const allQuery = document.querySelectorAll('input[name="type"]');

    allQuery.forEach(query => {
        const divClass = query.id;
        const div = document.querySelector(`.${divClass}`);

        if (query === selectedQuery) {
            div.classList.add("check");
        } else {
            div.classList.remove("check");
        }
    });
}

function main() {
    const valid = validateInput();
    if (valid) {

        // display alert
        alertBox.style.display = "block";

        // hide alert after 3 seconds
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);

        // reset form
        document.querySelector("form").reset();
        
        // reset radio colors
        const allradio = document.querySelectorAll('input[name="type"]');
        allradio.forEach(radio => {
            const divClass = radio.id;

            document.querySelector(`.${divClass}`).classList.remove("check");
        });
    }
}