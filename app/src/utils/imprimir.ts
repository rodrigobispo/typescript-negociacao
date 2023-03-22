import Impressora from "../interfaces/impressora.js";

export default function imprimir(...objetos: Array<Impressora>) {
    for(let objeto of objetos) {
        console.log(objeto.toString());
    }
}