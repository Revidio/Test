document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const namePattern = /.{3,}/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!namePattern.test(firstName)) {
            alert('First name must be at least 3 characters long.');
            return;
        }

        if (!namePattern.test(surname)) {
            alert('Surname must be at least 3 characters long.');
            return;
        }

        if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('User successfully registered.');
        form.reset();
    });
});
