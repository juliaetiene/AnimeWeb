document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const feedback = document.getElementById('feedback');


  
    emailError.textContent = '';
    passwordError.textContent = '';
    feedback.textContent = '';


    if (!email) {
        emailError.textContent = 'O e-mail é obrigatório.';
        return;
      }

      if (!password) {
        passwordError.textContent = 'A senha é obrigatória.';
        return;
      }
  
    const storedData = JSON.parse(localStorage.getItem('cadastros')) || [];
    const user = storedData.find(user => user.email === email && user.password === password);

    if (user) {
        feedback.textContent = `Bem-vindo de volta, ${user.name}!`;
        feedback.style.color = 'green';

        localStorage.setItem('loggedUser', JSON.stringify(user));

        location.href = 'home-page.html';
    } else {
        feedback.textContent = 'E-mail ou senha incorretos!';
        feedback.style.color = 'red';
    }
});