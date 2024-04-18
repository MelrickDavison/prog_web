function cadastrarUser(){


const formulario = document.querySelector("form")

let nome = document.getElementById("inptNome");
let sobrenome = document.getElementById("inptSobrenome");
let userName = document.getElementById("inptUsername")
let cidade = document.getElementById("inptCidade")
let estado = document.getElementById("inptEstado")


let foto = document.getElementById("fotoFile")
let email = document.getElementById("inputEmail")
let senha = document.getElementById("inputPassword")
let convenio = ''

if((document.getElementById("rdEstudante")).checked){
    convenio = (document.getElementById("rdEstudante")).value
} else if((document.getElementById("rdProfessor")).checked){
    convenio = (document.getElementById("rdProfessor")).value
} else{
    convenio = (document.getElementById("rdEmpresa")).value
}

let user = new Usuario(nome.value, sobrenome.value, userName.value, cidade.value, estado.value, foto.value, email.value, senha.value, convenio)
setItemLocal(user)
//limparCampos()
//setURL(user)
}

function loginUser(){
    let email = document.getElementById('inputEmail')
    let senha = document.getElementById('inputSenha')
    checarItem(email.value, senha.value)

}