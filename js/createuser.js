function onClickSaveUser(event) {
    event.preventDefault();

    const username = document.getElementById('inpUser');
    const password = document.getElementById('inpPassword');
    const rePassword = document.getElementById('repInpPassword');
    const user = { 
        username: username.value,
        password: password.value
    }
    const error = document.getElementById("errorMsg");

    error.innerHTML = '';

    if(username.value != '' && password.value != '' && password.value === rePassword.value) {
        location.href = '/enter.html'
    } else {
        return error.innerHTML ='Falha ao cadastrar o usuário.Tente novamente.'
    }

    const usersArray = JSON.parse(localStorage.getItem('users')) || [];
    usersArray.push(user);

    localStorage.setItem('users', JSON.stringify(usersArray)); 
    username.value= '';
    password.value= '';
}

