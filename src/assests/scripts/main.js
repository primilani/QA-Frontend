function adjustFontSize() {
    const loginSection = document.querySelector('.login-section');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        loginSection.style.fontSize = '14px'; 
    } else {
        loginSection.style.fontSize = '16px'; 
    }
}


function login(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    
    const validEmail = 'usuario@exemplo.com';
    const validPassword = 'senha123';

    if (email === validEmail && password === validPassword) {
        messageDiv.textContent = 'Login bem-sucedido!';
        messageDiv.style.color = 'green';

        
        setTimeout(() => {
            messageDiv.textContent = ''; 
        }, 3000); 
        
    } else {
        messageDiv.textContent = 'Usuário ou senha inválidos.';
        messageDiv.style.color = 'red';
    }
}


adjustFontSize();
window.addEventListener('resize', adjustFontSize);


const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);