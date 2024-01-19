import {
    fundoClaro,
    conteudoClaro,
    textFundoClaro,
    fundoEscuro,
    conteudoEscuro,
    textFundoEscuro
} from "./variaveis";

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textFundoClaro,
    filter: "",
}

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textFundoEscuro,
    filter: "invert(100)"
}