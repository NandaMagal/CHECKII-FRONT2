//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//Declarando variaveis API GET ME //

let primeiroName = document.getElementById('inputName');
let ultimoNome = document.getElementById('inputLastName');
let email = document.getElementById('inputEmail');

/*INCLUIR API DADOS DO USUARIO GET ME*/
//incluindo validações na APi 
//Code: 200 - Operação Sucesso;
//404- Usuário não existe;
//500 - Error del servidor //
// armazenar o token na variavel atraves do Local storage session storage//

let token = localStorage.getItem("jwt");

//executar a busca na API//
let urlUsersBuscar = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
let configDaRequ = {
    method: "GET",
    headers: {
        "Authorizathion": token
    }
}
fetch(urlUsersBuscar, configDaRequ)
    .then(result => {
            if (result.status == 201 || result.status == 200) {
                return result.json();
            } else {
                throw result;
            }
        } //Se for diferente destas duas opções caimos no throw para a execução cair no Catch*/

    )
    .then(function(result) {
        result.email();
        buscarSucess(result.firstname)
        console.log(result);
        // objetoUsers.lastname = ultimoNome.value;
        //  objetoUsers.email = emailLogin.value;
        //  objetoUsers.password = passwordLogin.value;
        //console.log(result.jwt);

    }).catch(errou => {
        buscarErro(errou);
        console.log(errou);
    });



//Percorrer array Lista de tarefas//
//Declaração de variaveis API obter Lista de tarefas tasks - method Get //

//let newTask = document.getElementById('inputnovaTarefa')
let tarefasPendentesLi = document.querySelectorAll('li')
    //let botaoSalvarNova = document.getElementById('botaoTask');

console.log(tarefasPendentesLi);

//criando o objeto que comtempla a criação de uma Lista de Tarefas//
let objetoListaTask = {
    "description": " ",
    "completed": "false",
}

botaoSalvarNova.addEventListener('click', function(event) {
    event.preventDefault();
    let lista = JSON.stringify(objetoListaTask);
    objetoListaTask.description = descrever.value;
    let token = localStorage.getItem("jwt");

    if (objetoListaTask.completed) {
        let urlListaTasks = ("https://ctd-todo-api.herokuapp.com/v1/tasks");
        let configuracao = {
            method: "GET",
            headers: {
                "Authorization": token
            }
        }
        fetch(urlListaTasks, configuracao)
            .then(
                result => {
                    if (result.status == 201 || result.status == 200) {
                        window.alert("Obtendo Lista de Tarefas Sucesso");
                        return resultado.json();
                    } else {
                        throw result;
                    }

                }).then(function(resposta) {
                //  tarefaListaSucess(resposta.jwt);
                console.log(resposta)
            }).catch(errou => {
                tarefaListaErro(errou);
                console.log(errou);
            })
    }
});



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
/*declaração de variaveis para obter uma tarefa method GET/ /
let newTask = document.getElementById('inputnovaTarefa');


//criando o objeto que comtempla a criação para obter uma Tarefa ela  chamada atraves do id da tarefa usar template string//
let objetoObterTask = {
    "description": " ",
    "completed": false
}
botaoSalvarNova.addEventListener('click', function(event) {
        event.preventDefault();

        let token = localStorage.getItem("jwt");
        if (objetoObterTask.completed) {
            let urlObterTarefa = ("https://ctd-todo-api.herokuapp.com/v1/tasks/´$id´");
        }
        let configuracao = {
            method: "GET",
            headers: token,

            fetch(urlObterTarefa, configuracao)
            .then(result => {
                if (result.status == 201 || result.status == 200) {
                    return resultado.json();

                    window.alert("Obtendo Tarefas com Sucesso");
                }
            })
            .then(function(resposta) {
                tarefaObterSucess(resposta.jwt);
                console.log(resposta.jwt);
            }).catch(errou => {
                tarefaObterErro(errou);
                console.log(errou);
            })
        )
    }
*/ // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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
        window.alert("Email incorreto, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    } else if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
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
        window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
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
        window.alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401)
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404) {
        window.alert("Tarefa Inexistente, favor informar outra tarefa");
    }

    if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}