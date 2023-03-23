import Modelo from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
    
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

    ehIgual(negociacoes: Negociacoes): boolean {
        throw JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}