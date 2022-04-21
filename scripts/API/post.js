// Captura os elementos 
// Quando queremos Cadastrar Novo usuário * /

let primeiroNome = document.getElementById('inputName');
//let ultimoNome = document.getElementById('inputLastName');
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let btnCadastro = document.getElementById('botaoCadastro');

//criando o objeto que comtempla o email,senha, primeiro nome e último nome do usuário//


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