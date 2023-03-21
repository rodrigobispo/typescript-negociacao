export function domInjector(seletor: string) {

    return function(target: any, propertyKey: string) {

        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            }
            return elemento;
        }

        //sobrescrita do metodo get da instancia 'target'
        Object.defineProperty(target, propertyKey, { get: getter })
    }
}
