import Impressora from "../interfaces/impressora.js";

export class Negociacao implements Impressora {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public static build(dateString: string, quantidadeString: string, valorString: string) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor
    }
    
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
        
    public toString(): string {
        return `
            Data: ${this._data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}

