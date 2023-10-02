// Nav Bar

const bars = document.getElementById("bars");

const nav = document.getElementById("navbar");

const close = document.getElementById("close");

if (bars) {

    bars.addEventListener('click', () => {

        nav.classList.add("active");
    });
}


if (close) {

    close.addEventListener('click', () => {

        nav.classList.remove("active");
    });
}

// Form Validation

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {

    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('number');
    const subjectInput = document.getElementById('subject');

    // Validation checks

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const number = numberInput.value.trim();
    const subject = subjectInput.value.trim();

    if (name === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        emailInput.focus();
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    if (number === '') {
        alert('Please enter your phone number.');
        numberInput.focus();
        return;
    }

    if (subject === '') {
        alert('Please enter the subject.');
        subjectInput.focus();
        return;
    }

    // If all validation checks pass, you can submit the form here
    alert('Form submitted successfully!');

    form.reset(); // Optionally, reset the form fields after submission
});

function isValidEmail(email) {

    // Use a regular expression to validate the email format

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Cart Page : Remove Products

/// Get all the cross buttons
var crossButtons = document.querySelectorAll('.fa-times');

function removeProduct(button) {
    // Get the parent row of the cross button
    var row = button.closest('tr');

    // Remove the row from the table
    row.remove();
}