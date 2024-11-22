document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const anime = Array.from(document.getElementById('anime').selectedOptions).map(option => option.value);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert('A senha deve conter pelo menos 8 caracteres, incluindo letras e números.');
        return;
    }

    let storedData = JSON.parse(localStorage.getItem('cadastros')) || [];


    const emailExists = storedData.some(user => user.email === email);
    if (emailExists) {
        alert('Já existe um cadastro com este e-mail.');
        return;
    }

    const formData = { name, email, password, anime };

    storedData.push(formData);
    localStorage.setItem('cadastros', JSON.stringify(storedData));

    localStorage.setItem('loggedUser', JSON.stringify(formData));

    alert('Cadastro realizado com sucesso!');
    location.href = '/pages/home-page.html';

    document.querySelector('form').reset();



});
