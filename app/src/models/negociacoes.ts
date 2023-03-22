import Impressora from "../interfaces/impressora.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Impressora {
    
    private negociacoes: Array<Negociacao> = [];
    // private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // lista(): readonly Negociacao[] {
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public toString(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}