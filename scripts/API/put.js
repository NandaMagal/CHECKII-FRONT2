//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//declaração de variaveis metodo PUT api chamada atraves do id da tarefa usar template string ///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

//declaração de variaveis para MODIFICAR  uma tarefa method PUT//
//let identfTarefa = document.getElementById('idTarefa');
//let botaoSalvarNova = document.getElementById('botaoTask');



let objetoobterTask = {
        "description": " ",
        "completed": "",
    }
    //let token = localStorage.getItem("jwt");
if (objetoNewTask.completed) {
    let urlModifiqueTask = "https://ctd-todo-api.herokuapp.com/v1/tasks/´$id´";
    let configuracao = {
        method: "PUT",
        headers: {
            "Authorization": token
        },
        body: {
            "description": " ",
            "completed": false
        }
    }

    fetch(urlModifiqueTask, configuracao).then(
        result => {
            if (result.status == 201 || result.status == 200) {
                window.alert("Modificando Tarefas com Sucesso");
                return resultado.json();
            } else {
                throw result;
            }
        }).then(function(resposta) {
        tarefaModifiqSucess(resposta.jwt);
        console.log(resposta.jwt);
    }).catch(errou => {
        tarefaModifiqErro(errou);
        console.log(errou);
    })
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