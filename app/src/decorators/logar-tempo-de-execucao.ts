// esqueleto de um decorator
export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1
            let unidade = 'milisegundos'
            if (emSegundos) {
                divisor = 1000
                unidade = 'segundos'
            }
            const tempo1 = performance.now()
            const retorno = metodoOriginal.apply(this, args)
            const tempo2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(tempo2 - tempo1)/divisor} ${unidade}.`)
            retorno
        }
        return descriptor;
    }
}
