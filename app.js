document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Login attempted by ${username}`);
    alert('Login successful!');
});
