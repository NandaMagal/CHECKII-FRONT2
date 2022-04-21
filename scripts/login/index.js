/*Capturando os campos do formulário*/
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let botaoSalvar = document.getElementById('botaoSalvar');

let emailLoginNormalizado;
let passwordLoginNormalizado;

let emailEValido = false;
let passwordEValido = false;

/*Desabilita o botão ao iniciar a página*/

botaoSalvar.setAttribute('disabled', true);
botaoSalvar.innerText = "Bloqueado";

/*Cria o objeto que representa o login do usuário*/

const usuarioObjeto = {
    email: " ",
    password: " "
}

//Executa ao clicar no botão de Acessar
botaoSalvar.addEventListener('click', function(evento) {
    //Se a validação passar, se for true o retorno da função....
    if (validaEmail() && validaSenha()) {

        //Normalizando - Retirando os espaços em branco
        emailLoginNormalizado = retiraEspacosDeUmValorInformado(emailLogin.value);
        passwordLoginNormalizado = retiraEspacosDeUmValorInformado(passwordLogin.value);
        emailLoginNormalizado = converteValorRecebidoEmMinusculo(emailLoginNormalizado);

        //Atribui as variáveis normalizadas ao objeto do login
        usuarioObjeto.email = emailLoginNormalizado;
        usuarioObjeto.password = passwordLoginNormalizado;

        console.log(usuarioObjeto);

        //Se a validação NÃO passar, se for false o retorno da função....
    } else {
        evento.preventDefault();
        alert("Ambas as informações devem ser preenchidas");
    }
});

//Ao clicar e interagir com o campo de "email" no formulário
emailLogin.addEventListener('blur', function() {
    //Capturando o elemento <Small> do html
    let emailValidacao = document.getElementById('emailValidacao');
    if (emailLogin.value != " ") {
        //Email tem alguma informação
        emailValidacao.innerText = " ";
        emailEValido = true;
    } else {
        //Email está vazio
        emailValidacao.innerText = "Campo obrigatório";
        emailValidacao.style.color = "#E01E1E";
        emailValidacao.style.fontSize = "10"
        emailValidacao.style.fontWeight = "italic"
        emailLogin.style.border = `2px solid #E01E1E`
        emailEValido = false;
    }

    /* Incluir metodo regex verificar caracteres do email se são validos. Email tem caracteres especificos e preenchidos corretamente*/
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLogin.value)) {
        emailValidacao.innerText = " ";
        emailLogin.style.backgroundColor = "green";
        emailEValido = true;
    } else {
        /*Email esta com preenchimento incorreto conforme padrão Regex*/
        emailValidacao.innerText = "O Email não é Válido";
        emailValidacao.style.color = "#E05E";
        emailValidacao.style.fontSize = "10";
        emailValidacao.style.fontWeight = "italic";
        emailLogin.style.border = `2 px solid #D01F8E`;
        emailEValido = false;
    }
    validaTelaDeLogin();
});


//implementando metodo blur - Validação da Senha Incluir método regex para validação de senha: -
//pelo menos 8 caracteres -
//deve conter pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número -
//Pode conter caracteres especiais

passwordLogin.addEventListener('blur', function() {
    let passwordValidacao = document.getElementById('passwordValidacao');
    //Incluimos o elemento  <Small> do html e capturamos o mesmo
    if (passwordLogin.value != " ") {
        //Senha é diferente de vazio
        passwordValidacao.innerText = " ";
        passwordEValido = true;
    } else {
        //senha está vazio
        passwordValidacao.innerText = "Senha obrigatória.Usuário deve digitar no mínimo um número, uma letra Maiuscula, uma letra Minúscula e um Caracter especial"
        passwordLogin.style.backgroundColor = "green";
        passwordValidacao.style.color = "#E05E"
        passwordValidacao.style.fontSize = "12"
        passwordValidacao.style.fontWeight = "italic"
        passwordEValido = false;

    }
    if ((/(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()-+]).{8,}$/.test(passwordLogin.value))) {
        passwordValidacao.innerText = " ";
        passwordLogin.style.backgroundColor = "green";
        passwordEValido = true;
    } else {
        /*Email esta com preenchimento incorreto conforme padrão Regex*/
        passwordValidacao.innerText = "Senha obrigatória.Usuário deve digitar no mínimo um número, uma letra Maiuscula, uma letra Minúscula e um Caracter especial"
        passwordLogin.style.backgroundColor = "green";
        passwordValidacao.style.color = "#E05E"
        passwordValidacao.style.fontSize = "12"
        passwordValidacao.style.fontWeight = "italic"
        passwordEValido = false;
    }
    validaTelaDeLogin();
});


//Ao clicar e interagir com o campo de "email" e senha  no formulário

function validaTelaDeLogin() {
    if (emailEValido && passwordEValido) {
        botaoSalvar.removeAttribute('disabled')
        botaoSalvar.innerText = "Acessar"
        return true
    } else {
        botaoSalvar.setAttribute('disabled', true);
        botaoSalvar.innerText = "Bloqueado";
        return false;
    }
}


//CONFERIR USUARIO LOGADO
/*
function conferirUsuario() {
    //conferir o login  do usuario logado
    var emailUsuario = document.getElementById("inputEmail");

    if (token == emailUsuario.value) {
        console.log(emailUsuario);
        alert("USUARIO VÁLIDO ");
    } else {
        console.log(emailUsuario);
        alert("USUARIO INEXISTENTE  FAVOR FAZER O CADASTRO ");
    }
}

// CONFERIR SENHA DO USUARIO LOGADO
function conferirSenha() {
    //conferir o senha  do usuario logado
    var senhaUsuario = document.getElementById("inputPassword");

    if (token == emailUsuario.value) {
        console.log(emailUsuario);
        alert("USUARIO VÁLIDO ");

    }
}*/