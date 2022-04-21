//funções para validaçãodas apis//

// Api users -post//
function userSucess(jwtRecebido) {
    console.log("Jwt que recebemos ao se cadastrar ");
    alert("A inclusão do Usuário cadastrado foi efetuada com sucesso");
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
            alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//api users/login - post//
function loginSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);
    alert("USUÁRIO LOGADO COM SUCESSO");

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
        alert("Os dados do usuário foram digitados incorretamente.");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404) {
        alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    } else if (resposta.status == 500) {
        alert("Erro no Servidor,favor reiniciar a pagina");
    }
}


//funções para validaçãodas apis//

// Api users//
function userSucess(jwtRecebido) {
    console.log("Jwt que recebemos ao se cadastrar ");
    alert("A inclusão do Usuário cadastrado foi efetuada com sucesso");
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
    alert("USUÁRIO LOGADO COM SUCESSO");

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
        alert("Os dados do usuário foram digitados incorretamente.");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404) {
        alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
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
        alert("Os dados do usuario estao incompletos ");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 401) {
        alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}
//funcoes api Deletar uma tarefa// 
function tarefaDeletarSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaDeleteErro(resposta) {
    let identifica = document.getElementById("id");
    //como declarar//
    //Identificador invalido//
    if (resposta.status == 400) {
        alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401) {
            alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
            emailLogin.value = "";
            passwordLogin.value = "";
        } else if (resposta.status == 404) {
            alert("Tarefa Inexistente, favor informar outra tarefa");
        }
    } else if (resposta.status == 500) {
        alert("Erro no Servidor,favor reiniciar a pagina");
    }
}
//Funções da API Get/me
function buscarSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos referente ao usuário logado");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //duvida para onde usuario será direcionado
    // window.location.href = ".html"; //
}

function buscarErro(resposta) {
    let emailLogin = document.getElementById("emailValidacao");

    //Limpa campo de  email ao errar o login//

    if (resposta.status == 404) {
        alert("Email incorreto, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    } else if (resposta.status == 500) {
        alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//funcoes api lista de tarefas get// 
function tarefaListaSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaListaErro(resposta) {
    let emailLogin = document.getElementById("emailValidacao");
    let passwordLogin = document.getElementById("passwordValidacao")
        //Limpa campo de senha e email ao errar o login//

    if (resposta.status == 401) {
        alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 500) {
        alert("Erro no Servidor,favor reiniciar a pagina");
    }
}



function renderizarPendentes(tarefa) {
    let taskPende = document.querySelector('.tarefas-pendentes');
    let pendentes = document.createElement('li');
    pendentes.innerHTML = ` <div class="not-done" id="${tarefa.id}"></div>
                            <div class="descricao">
                                <p class="nome">${tarefa.description}</p>
                                <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
                            </div>
                        `
    pendentes.classList.add("tarefa");
    taskPende.appendChild(pendentes);
}




function renderizarConcluidas(tarefa) {
    let taskConcluidas = document.querySelector('.tarefas-terminadas');
    let terminadas = document.createElement('li');
    terminadas.innerHTML = `<div class="done"></div>
                            <div class="descricao">
                            <p class="nome">${tarefa.description}</p>
                            <div>
                                <button><i id="${tarefa.id}" class="fas fa-undo-alt change"></i></button>
                                <button><i id="${tarefa.id}" class="far fa-trash-alt" onclick="deleteTask(${tarefa.id},token)"></i></button>
                            </div>
                            </div>
                        `
    terminadas.classList.add("tarefa");
    taskConcluidas.appendChild(terminadas);
}

//funcoes api obter uma tarefa get// 
function tarefaObterSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaObterErro(resposta) {
    let identifica = document.getElementById("id");
    //como declarar//

    //Identificador invalido//
    if (resposta.status == 400) {
        alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401)
            alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404) {
        alert("Tarefa Inexistente, favor informar outra tarefa");
    }

    if (resposta.status == 500) {
        alert("Erro no Servidor,favor reiniciar a pagina");
    }
}
//funcoes api modificar uma tarefa put// 
function tarefaModifiqSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaModifiqErro(resposta) {
    let identifica = document.getElementById("id");
    //como declarar//

    //Identificador invalido//
    if (resposta.status == 400) {
        alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401)
            alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404) {
        alert("Tarefa Inexistente, favor informar outra tarefa");
    }

    if (resposta.status == 500) {
        alert("Erro no Servidor,favor reiniciar a pagina");
    }
}