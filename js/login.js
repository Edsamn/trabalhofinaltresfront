function onClickSaveUser(event) {
    event.preventDefault();

    const username = document.getElementById("inpUser");
    const password = document.getElementById("inpPassword");
    const usersArray = JSON.parse(localStorage.getItem('users')) || [];
    const error = document.getElementById("errorMsg");
    const found = false;

    if (username.value === "" || password.value === "") {
        return error.innerHTML = 'Os campos não podem ficar em branco.'
      }

    for (let user of usersArray) {
        if (user.username === username.value && user.password == password.value) {
            localStorage.setItem('logado', JSON.stringify('users'));
            location.href = '/notes.html';
            found = true;
        } 
    };
    
    if (!found) {
        return error.innerHTML ='Usuário não encontrado.'
        
    };

    username.value= '';
    password.value= '';
    error.innerHTML = '';
}