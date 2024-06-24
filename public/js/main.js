// hadnle login
// check point

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (response.ok) {
                window.location.href = result.redirectUrl;
            } else {
                console.error('Login failed:', result.error);
                // display error message to user
            }
        } catch (error) {
            console.error('Login error:', error);
            // handle network or other errors
        }
    });
});