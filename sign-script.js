// Dummy array to store registered users
const registeredUsers = [];

// Updated JavaScript code
function validateForm(action) {
    if (action === 'login') {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the user is registered
        const isRegistered = registeredUsers.some(user => user.email === username && user.password === password);

        if (!isRegistered) {
            // Show signup form if not registered
            showSignupForm();
            return false;
        }

        // Clear the form and error message
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('errorMessage').textContent = '';

        // Inform the user about successful login
        alert('Login successful!');
    } else if (action === 'register') {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // Check if the username (email) is already registered
        if (registeredUsers.some(user => user.email === username)) {
            document.getElementById('errorMessage').textContent = 'Email is already registered.';
            return false;
        }

        // Simulate storing the user in the array (in a real scenario, use a database)
        registeredUsers.push({ email: username, password });

        // Inform the user about successful registration
        alert('Registration successful! You can now log in.');
    }

    // Prevent the form from submitting
    return false;
}

function showSignupForm() {
    // Switch to the signup form
    document.querySelector('.title.signup').click();
}
