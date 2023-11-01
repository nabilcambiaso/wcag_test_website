document.getElementById('signupForm').addEventListener('submit', function(event) {
    let hasError = false;

    // Check email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email.';
        emailError.style.display = 'block';
        hasError = true;
    } else {
        emailError.style.display = 'none';
    }

    // For this demo, we'll ignore password validation

    if (hasError) {
        event.preventDefault();  // Prevent form submission
    }
});

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
