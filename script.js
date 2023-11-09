document.getElementById('signupForm').addEventListener('submit', function (event) {
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

setTimeout(() => {
    const box = document.getElementById('box');
    var input = document.createElement('input');
    input.setAttribute('id', 'newInput');
    box.appendChild(input);

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
}, 5000);

function simulateTimeLimit() {
    setTimeout(function () {
        // Simulate an action that takes more than 3 seconds to complete
        alert('Action completed!');
    }, 3000); // Set a short time limit of 3 seconds
}