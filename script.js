function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('login-error');

    if (username === 'admin' && password === 'admin123') {
        // Redireciona para admin.html
        window.location.href = "admin.html"; // Adicione esta linha para redirecionar após o login
    } else if (username === 'tecnico' && password === 'tecnico123') {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('tecnico-panel').classList.remove('hidden');
    } else {
        loginError.textContent = 'Usuário ou senha incorretos!';
        loginError.style.color = 'red';
    }
}

function logout() {
    document.getElementById('admin-panel').classList.add('hidden');
    document.getElementById('tecnico-panel').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-error').textContent = '';
}
