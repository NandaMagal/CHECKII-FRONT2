//captura dos elementos//
let nome = document.getElementById('inputName');
let sobrenome = document.getElementById('inputLastName')
let email = document.getElementById('inputEmail');
let senha = document.getElementById('inputPassword');
let repetirSenha = document.getElementById('inputRepeatPassword');
let cadastrar = document.getElementById('botaoCadastro');
let nomeValido = false;
let sobrenomeValido = false;
let emailCadastroValido = false;
let passwordCadastroValido = false;
let repetirPasswordValido = false;

/*Desabilita o botão  de validação da senha e do cadastro ao iniciar a página*/


cadastrar.setAttribute('disabled', true);
cadastrar.innerText = "Bloqueado"

//validacao da senha  utilizando metodo match//
//segunda opcao de validacao de senha

senha.addEventListener('blur', function() {
    let passwordValidacao = document.getElementById('passwordValidacao');
    //Incluimos o elemento  <Small> do html e capturamos o mesmo

    if ((/(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()-+]).{8,}$/.test(senha.value))) {
        passwordValidacao.innerText = " ";
        senha.style.backgroundColor = "green";
        passwordCadastroValido = true;
    } else {
        /*Email esta com preenchimento incorreto conforme padrão Regex*/
        passwordValidacao.innerText = "Senha obrigatória.Usuário deve digitar no mínimo um número, uma letra Maiuscula, uma letra Minúscula e um Caracter especial"
        senha.style.backgroundColor = "green";
        passwordValidacao.style.color = "#E05E"
        passwordValidacao.style.fontSize = "12"
        passwordValidacao.style.fontWeight = "italic"
        passwordCadastroValido = false;
    }
    validaTelaDeCadastro();
});

repetirSenha.addEventListener('blur', function() {
    //Capturando o elemento <Small> do html
    let repetirPasswordValidar = document.getElementById('repetirPasswordValidacao');

    //verificando se as duas senhas digitadas são iguais
    if (senha.value == repetirSenha.value) {
        repetirPasswordValidar.innerText = "Senhas digitadas identicas , prosseguir no cadastramento";
        repetirPasswordValido = true;
        //caso as senhas sejam diferentes apagamos os campos preenchidos
    } else {
        repetirPasswordValidar.innerText = "Senhas digitadas não são identicas, refazer a digitação por gentileza";
        repetirPasswordValido = false;
    }
    validaTelaDeCadastro();
});



nome.addEventListener('blur', function() { //Capturando o elemento <Small> do html
    let nomeValidar = document.getElementById('nomeValidacao');
    if (nome.value != "") {
        //nome tem informação
        nomeValidar.innerText = "";
        nomeValidar.style.border = ``;
        nomeValido = true;
    } else {
        //nome está vazio
        nomeValidar.innerText = "Campo obrigatório";
        nomeValidar.style.color = "#E01E1E";
        nomeValidar.style.fontSize = "8";
        nomeValidar.style.fontWeight = "bold";
        nomeValidar.style.border = `1px solid #E01E1E`;
        nomeValido = false;
    }
    validaTelaDeCadastro();
});


sobrenome.addEventListener('blur', function() {
    let sobrenomeValidar = document.getElementById('sobrenomeValidacao');
    if (sobrenome.value != "") {
        //nome tem informação
        sobrenomeValidar.innerText = "";
        sobrenomeValidar.style.border = ``;
        sobrenomeValido = true;
    } else {
        //sobrenome está vazio
        sobrenomeValidar.innerText = "Campo obrigatório";
        sobrenomeValidar.style.color = "#E01E1E";
        sobrenomeValidar.style.fontSize = "8";
        sobrenomeValidar.style.fontWeight = "bold";
        sobrenomeValidar.style.border = `1px solid #E01E1E`;
        sobrenomeValido = false;
    }
    validaTelaDeCadastro();
});
//Ao clicar e interagir com o campo de "email" no formulário

email.addEventListener('blur', function() {
    let emailValidar = document.getElementById('emailValidacao');
    /* Incluir metodo regex verificar caracteres do email se são validos. Email tem caracteres especificos e preenchidos corretamente*/
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailValidar.innerText = " ";
        emailValidar.style.backgroundColor = "green";
        emailCadastroValido = true;
    } else {
        /*Email esta com preenchimento incorreto conforme padrão Regex*/
        emailValidar.innerText = "O Email não é Válido";
        emailValidar.style.color = "#E05E";
        emailValidar.style.fontSize = "10";
        emailValidar.style.fontWeight = "italic";
        email.style.border = `2 px solid #D01F8E`;
        emailCadastroValido = false;
    }

    validaTelaDeCadastro();
});



function validaTelaDeCadastro() {
    if (nomeValido && sobrenomeValido && emailCadastroValido && passwordCadastroValido && repetirPasswordValido) {
        cadastrar.removeAttribute('disabled')
        cadastrar.innerText = "Cadastrar"
        return true
    } else {
        cadastrar.setAttribute('disabled', true);
        cadastrar.innerText = "Bloqueado"
        return false
    }
}

const cadastroObjeto = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

let nomeCadastroNormalizado;
let sobrenomeCadastroNormalizado;
let emailCadastroNormalizado;

cadastrar.addEventListener('click', evento => {
    evento.preventDefault();
    if (validaTelaDeCadastro()) {
        nomeCadastroNormalizado = retiraEspacosDeUmValorInformado(inputName.value);
        sobrenomeCadastroNormalizado = retiraEspacosDeUmValorInformado(inputLastName.value);
        emailCadastroNormalizado = retiraEspacosDeUmValorInformado(inputEmail.value);
        nomeCadastroNormalizado = converteValorRecebidoEmMinusculo(nomeCadastroNormalizado);
        emailCadastroNormalizado = converteValorRecebidoEmMinusculo(emailCadastroNormalizado);
        sobrenomeCadastroNormalizado = converteValorRecebidoEmMinusculo(sobrenomeCadastroNormalizado);
        cadastroObjeto.firstname = nomeCadastroNormalizado;
        cadastroObjeto.lastname = sobrenomeCadastroNormalizado;
        cadastroObjeto.email = emailCadastroNormalizado;
        cadastroObjeto.password = senha.value;
        let Users = JSON.stringify(cadastroObjeto);

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
                console.log(errou)
            })
    };
});