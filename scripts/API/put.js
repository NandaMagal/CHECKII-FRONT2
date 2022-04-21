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