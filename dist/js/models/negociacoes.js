export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // private negociacoes: Negociacao[] = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): readonly Negociacao[] {
    lista() {
        return this.negociacoes;
    }
}
