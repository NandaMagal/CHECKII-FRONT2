//funções para validaçãodas apis//

// Api users//
function userSucess(jwtRecebido) {
    console.log("Jwt que recebemos ao se cadastrar ");
    windows.alert("A inclusão do Usuário cadastrado foi efetuada com sucesso");
    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

function userErro(result) {
    if (result.status == 400) {
        alert("Usuário já esta cadastrado");
    } else {
        if (result.status == 500)
            window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//api users/login//
function loginSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);
    window.alert("USUÁRIO LOGADO COM SUCESSO");

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function loginErro(resposta) {
    // let validarLogin = document.getElementById("passwordValidacao");

    //Limpa campo de senha e email ao errar o login//

    if (resposta.status == 400) {
        window.alert("Os dados do usuário foram digitados incorretamente.");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404) {
        window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    } else if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}


//funções para validaçãodas apis//

// Api users//
function userSucess(jwtRecebido) {
    console.log("Jwt que recebemos ao se cadastrar ");
    windows.alert("A inclusão do Usuário cadastrado foi efetuada com sucesso");
    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

function userErro(result) {
    if (result.status == 400) {
        alert("Usuário já esta cadastrado");
    } else {
        if (result.status == 500)
            window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//api users/login//
function loginSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);
    window.alert("USUÁRIO LOGADO COM SUCESSO");

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function loginErro(resposta) {
    // let validarLogin = document.getElementById("passwordValidacao");

    //Limpa campo de senha e email ao errar o login//

    if (resposta.status == 400) {
        window.alert("Os dados do usuário foram digitados incorretamente.");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404) {
        window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    } else if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//funcoes api criar tarefas// 
function tarefaSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaErro(resposta) {
    let emailLogin = document.getElementById("emailValidacao");
    let passwordLogin = document.getElementById("passwordValidacao")

    //Limpa campo de senha e email ao errar o login//
    if (resposta.status == 400) {
        window.alert("Os dados do usuario estao incompletos ");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 401) {
        window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}