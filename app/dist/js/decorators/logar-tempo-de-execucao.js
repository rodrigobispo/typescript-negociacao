export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const tempo1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempo2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(tempo2 - tempo1) / 1000} segundos.`);
            retorno;
        };
        return descriptor;
    };
}
