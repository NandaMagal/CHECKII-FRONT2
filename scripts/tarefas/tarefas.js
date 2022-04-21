// buscar token jwt de usuario que tem cadastro //
onload = function() {
    let tokenUserjwt = localStorage.getItem("jwt");

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
    const objetoTarefa = {
        description: tarefa,
    }
    let novasTarefas = JSON.stringify(objetoTarefa);
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
}