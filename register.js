document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    console.log(`New Username: ${newUsername}, New Password: ${newPassword}`);
});
