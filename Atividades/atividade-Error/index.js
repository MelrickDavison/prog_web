
class pontuacaoInvalida extends Error{
    constructor(mensagem = "Pontos não podem ser negativos"){
        super(mensagem);
        this.name = "Pontuação_Inválida";
    }
}

class timeInexistente extends Error{
    constructor(mensagem = "Time não pode ter nome vazio!"){
        super(mensagem);
        this.name = "time_Inexistente";
    }
}

class qtJogosExcedente extends Error{
    constructor(mensagem = "Quantidade de jogos excedente"){
        super(mensagem);
        this.name = "qtJogos_excedentes";
    }
}

class qtJogadorMin extends Error{
    constructor(mensagem ="Quantidade de Jogadores abaixo do padrão"){
        super(mensagem);
        this.name = "qtJogadorMin";
    }
}



let time1 = "Corinthians"
let time2 = "Flamengo"

let pontos1 = 0;
let pontos2 = 10;

let qtJogos1 = 18;
let qtJogos2 = 28;

let qtJogador1 = 7;
let qtJogador2 = 11;

try {

    if(pontos1 < 0 || pontos2 < 0){
        throw new pontuacaoInvalida();
    }
    
    if (time1 == "" || time2 == "") {
        throw new timeInexistente();
    }
    
    if(qtJogos1 > 38 || qtJogos2 > 38){
        throw new qtJogosExcedente();
    }

    if(qtJogador1 < 7 || qtJogador2 < 7){
        throw new qtJogadorMin();
    }
    console.log(pontos1 > pontos2 ? "Time 1 ganhou" : "Time 2 Ganhou");
    console.log("Time 1: " + time1 + "\n" + "Time 2: " + time2);


} catch (error) {
    console.log(error.message);    
    if(error instanceof pontuacaoInvalida){
        console.log("\n Insira a pontuação correta e tente novamente");
    }

    if(error instanceof qtJogosExcedente){
        console.log("\n Insira a quantidade de jogos correta e tente novamente");
    }
}


