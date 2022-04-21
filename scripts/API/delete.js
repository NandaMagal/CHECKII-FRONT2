//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
//declaracao  de variaveis para eliminar tarefa - API DELETE//
let identfTarefa = document.getElementById(idTarefa);
let botaoSalvarNova = document.getElementById('botaoTask');

console.log(idTarefa);

let objetoEliminarTask = {

        "description": " ",
    }
    //let token = localStorage.getItem("jwt");

let urlDeleteTask = "https://ctd-todo-api.herokuapp.com/v1/tasks/´$id´";
let configuracao = {
    method: "DELETE",
    headers: {
        "Authorization": token
    }
}
fetch(urlDeleteTask, configuracao)
    .then(result => {
        if (result.status == 201 || result.status == 200) {
            window.alert("Modificando Tarefas com Sucesso");
            return resultado.json();
        } else {
            throw result;
        }

    }).then(function(resposta) {
        tarefaDeletarSucess(resposta.jwt);
        console.log(resposta.jwt);
    }).catch(errou => {
        tarefaDeleteErro(errou);
        console.log(errou);
    });
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
        window.alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401) {
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
            emailLogin.value = "";
            passwordLogin.value = "";
        } else if (resposta.status == 404) {
            window.alert("Tarefa Inexistente, favor informar outra tarefa");
        }
    } else if (resposta.status == 500) {
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}