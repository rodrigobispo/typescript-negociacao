export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    toString() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(negociacoes) {
        throw JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
