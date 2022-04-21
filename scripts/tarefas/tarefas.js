// buscar token jwt de usuario que tem cadastro //
let tokenUserjwt = localStorage.getItem("jwt");

onload = function() {

    //e o tokes wt for vazio ou diferente do token do usuario//
    if (!tokenUserjwt || tokenUserjwt == "") {
        alert("Você não tem permissão para acessar esta página. Favor retornar para a página de login inicial.");
        location.href = "index.html";
    } else {
        console.log(tokenUserjwt);
        buscaUsuarioNaApi(tokenUserjwt);
        buscaAsTarefasDoUsuario(tokenUserjwt);
    }
    /*INCLUIR API DADOS DO USUARIO GET ME*/
    //incluindo validações na APi 
    //Code: 200 - Operação Sucesso;
    //404- Usuário não existe;
    //500 - Error del servidor //
    // armazenar o token na variavel atraves do Local storage session storage//

    //Carrega e altera dados do usuário logado - pega o endpoint//
    function buscaUsuarioNaApi(token) {
        let urlUsersBuscar = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
        let configDaRequ = {
            method: "GET",
            headers: {
                "Authorization": token
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
                alteraDadosUsuarioEmTela(result)
                console.log(result);

            }).catch(errou => {
                buscarErro(errou);
                console.log(errou);
            });
    }

    function alteraDadosUsuarioEmTela(objetoUsuarioRecebido) {
        let nomeUsuarioEmTarefas = document.getElementById('nomeUsuarioEmTarefas');
        nomeUsuarioEmTarefas.innerText = `${ objetoUsuarioRecebido.firstName } ${ objetoUsuarioRecebido.lastName } `
    }

    //Busca todas as tarefas do usuário logado//
    function buscaAsTarefasDoUsuario(token) {
        let urlListaTasks = "https://ctd-todo-api.herokuapp.com/v1/tasks";
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
                        return result.json();
                    } else {
                        throw result;
                    }
                }).then(function(resposta) {
                for (let valor of resposta) {
                    if (valor.completed) {
                        renderizarConcluidas(valor);
                    } else {
                        renderizarPendentes(valor);
                    }
                }
                //  tarefaListaSucess(resposta.jwt);
                console.log(resposta)
            }).catch(errou => {
                // tarefaListaErro(errou);
                console.log(errou);
            })
    }
}


//Cadastra nova tarefa para usuário
let botaoTask = document.getElementById("Task");
let finalTask = document.getElementById("finalizarTask");

// finalizar tarefas

finalTask.addEventListener('click', evento => {
    localStorage.removeItem("jwt");
    location.href = "index.html";
});

//criar tarefas
botaoTask.addEventListener('click', evento => {
    evento.preventDefault();
    let tarefaNova = document.getElementById("novaTarefa");
    criaTask(tarefaNova.value);
});

function criaTask(tarefa) {
    let objetoTarefa = {
        description: tarefa
    }
    let novasTarefas = JSON.stringify(objetoTarefa);
    let urlNewTasks = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    let configuracao = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": tokenUserjwt
        },
        body: novasTarefas
    }
    fetch(urlNewTasks, configuracao)
        .then(
            result => {
                if (result.status == 201 || result.status == 200) {
                    return result.json();
                } else {
                    throw result;
                }
            }).then(function(resposta) {
            alert("Tarefa Criada com Sucesso");
            location.reload();
            console.log(resposta); // primeira chamada da api-retorno de todo o objeto resultado json
        }).catch(errou => {
            tarefaErro(errou);
            console.log(errou);
        });
}

function deleteTask(id, token) {

    let urlDeleteTask = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;
    let configuracao = {
        method: "DELETE",
        headers: {
            "Authorization": token
        }
    }
    fetch(urlDeleteTask, configuracao)
        .then(result => {
            if (result.status == 201 || result.status == 200) {
                alert("Modificando Tarefas com Sucesso");
                return result.json();
            } else {
                throw result;
            }

        }).then(function(resposta) {
            alert("Modificando Tarefas com Sucesso");
            // tarefaDeletarSucess(resposta.jwt);
            console.log(resposta.jwt);
            location.reload();
        }).catch(errou => {
            // tarefaDeleteErro(errou);
            console.log(errou);
        });
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//declaração de variaveis metodo PUT api chamada atraves do id da tarefa usar template string ///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

//declaração de variaveis para MODIFICAR  uma tarefa method PUT//
function alteraStatusfalse(id, token) {
    let urlModifiqueTask = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;
    let statusFalse = {
        "completed": false
    }
    let statusNao = JSON.stringify(statusFalse)
    let configuracao = {
        method: "PUT",
        headers: {
            "Authorization": token,
            "Content-type": "application/json",
        },
        body: statusNao
    }
    fetch(urlModifiqueTask, configuracao).then(
        result => {
            if (result.status == 201 || result.status == 200) {
                alert("Modificando Tarefas com Sucesso");
                return result.json();
            } else {
                throw result;
            }
        }).then(function(resposta) {
        console.log(resposta.jwt);
        location.reload();
    }).catch(errou => {
        tarefaModifiqErro(errou);
        console.log(errou);
    })
}

function alteraStatustrue(id, token) {
    let urlModifiqueTask = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;
    let statusTrue = {
        "completed": true
    }
    let statusVerdade = JSON.stringify(statusTrue)
    let configuracao = {
        method: "PUT",
        headers: {
            "Authorization": token,
            "Content-type": "application/json",
        },
        body: statusVerdade
    }
    fetch(urlModifiqueTask, configuracao).then(
        result => {
            if (result.status == 201 || result.status == 200) {
                alert("Modificando Tarefas com Sucesso");
                return result.json();
            } else {
                throw result;
            }
        }).then(function(resposta) {
        console.log(resposta.jwt);
        location.reload();
    }).catch(errou => {
        tarefaModifiqErro(errou);
        console.log(errou);
    })
}