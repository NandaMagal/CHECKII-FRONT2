// Captura os elementos 
// Quando queremos Cadastrar Novo usuário * /

let primeiroNome = document.getElementById('inputName');
//let ultimoNome = document.getElementById('inputLastName');
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let btnCadastro = document.getElementById('botaoCadastro');

//criando o objeto que comtempla o email,senha, primeiro nome e último nome do usuário//
let objetoUsers = {
    "firstname": "",
    "lastname": " ",
    "email": "",
    "password": "",
}

btnCadastro.addEventListener('click', function(event) {
    event.preventDefault();
    objetoUsers.firstname = primeiroNome.value;
    objetoUsers.lastname = ultimoNome.value;
    objetoUsers.email = emailLogin.value;
    objetoUsers.password = passwordLogin.value;
    let Users = JSON.stringify(objetoUsers);

    /*INCLUIR API COM UM users - cadastrar Novo  recurso*/
    //incluindo validações na APi 
    //Code: 200 - Operação Sucesso;
    //400 - Usuário já existe;
    //500 - Error del servidor //

    let urlUsers = ("https://ctd-todo-api.herokuapp.com/v1/users");
    let configDaRequ = {
        method: "POST", // enviando
        headers: {
            "Content-type": "application/json"
        },
        body: Users
    }

    fetch(urlUsers, configDaRequ)
        .then(result => {
            if (result.status == 201 || result.status == 200) {
                return result.json();
            } else {
                throw result;
            }
        }).then(function(resposta) {
            userSucess(resposta.jwt);
            console.log(resposta.jwt);
        })
        .catch(errou => {
            userErro(errou);
            console.log(errou);
        })
});



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//Declaração de variaveis API users / login //
//let emailLogin = document.getElementById('inputEmail');
//let passwordLogin = document.getElementById('inputPassword');
//let botaoSalvar = document.getElementById('botaoSalvar');

//criando o objeto que contempla o email,senha de usuário já existente //
let objetoUsersLogin = {
    "email": "",
    "password": ""
}

botaoSalvar.addEventListener('click', function(event) {
    event.preventDefault();
    objetoUsersLogin.email = emailLogin.value;
    objetoUsersLogin.password = passwordLogin.value;
    let usersLogin = JSON.stringify(objetoUsersLogin);

    //INCLUIR API COM UM usuario já cadastrado users / login * /
    //validar as APIs //incluindo validações na APi 
    //Code: 200 - Operação Sucesso;
    //400 - Senha incorreta;
    //404 Usuario não existe
    //500 - Error del servidor //

    let urlUsersLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login";
    let configDaRequ = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: usersLogin
    }
    fetch(urlUsersLogin, configDaRequ)
        .then(result => {
            if (result.status == 201 || result.status == 200) {
                return result.json();
            }
            //Se for diferente destas duas opções caimos no throw para a execução cair no Catch*/
            else {
                throw result;
            }
        })
        .then(function(resposta) {
            loginSucess(resposta.jwt);
            console.log(resposta.jwt);
        }).catch(errou => {
            loginErro(errou);
            console.log(errou);
        });
});



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//Declaração de variaveis API Criar uma tarefa //

let descrever = document.querySelectorAll('description');
let nomeTarefa = document.getElementById('nometarefa');

//let botaoSalvarNova = document.getElementById('task');

console.log(description);

console.log(nomeTarefa);

console.log(dataCriacao);

//criando o objeto que comtempla a criação de uma nova Tarefa //
let objetoNewTask = {
    "description": " "
}

botaoSalvarNova.addEventListener('click', function(event) {
    event.preventDefault();

    let novasTarefas = JSON.stringify(objetoNewTask);

    objetoNewTask.description = descrever.value;
    objetoNewTask.createAt = dataCriacao.value;

    let token = localStorage.getItem("jwt");
    if (objetoNewTask.completed) {
        let urlNewTasks = "https://ctd-todo-api.herokuapp.com/v1/tasks";
        let configuracao = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": token,
            },
            body: novasTarefas
        }
        fetch(urlNewTasks, configuracao)
            .then(
                result => {
                    if (result.status == 201 || result.status == 200) {
                        window.alert("Tarefa Criada com Sucesso");
                        return resultado.json();
                    } else {
                        throw result;
                    }
                }).then(function(resposta) {
                console.log(resposta); // primeira chamada da api-retorno de todo o objeto resultado json
            }).catch(errou => {
                tarefaErro(errou);
                console.log(errou);
            });
    }
});

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