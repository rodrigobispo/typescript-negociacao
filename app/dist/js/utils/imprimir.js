export default function imprimir(...objetos) {
    for (let objeto of objetos) {
        console.log(objeto.toString());
    }
}
