## O Projeto

1. Trata-se de uma tela simples com três campos de "Negociação" para inclusão numa lista, oferencendo suficientemente a prática de Typescript com as melhores práticas.
2. Não há acesso a banco de dados. A inclusão realizada em lista é feita em memória no domínio/model específico.
3. Há uso de importação de dados json para adicionar os dados na lista da tela.


### Execução do projeto:

Na pasta do projeto informar o comando:
```
npm run start
```
Este comando realiza dois processamentos em paralelo: sobe o servidor e aciona a compilação de TypeScript (.ts) gerando js no destino `/src/dist/js`

1. Em outro console, dentro da pasta `/typescript-negociacao/servidor-api`, executar o comando para instalação de dependências:
```
npm install
```
2. Em seguida, ainda dentro de `/typescript-negociacao/servidor-api`, executar o comando para subir o servidor:
```
npm start
```
3. No navegador, informar na url para exibição do resultado da API:
```
localhost:8080/dados
```
### Instação do TypeScript:
Na pasta do projeto informar o comando:
```
npm install typescript@4.2.2 --save-dev
```
### Debug:

1. Arquivo `tsconfig.json` configurado com `"sourceMap": true`;
2. Arquivos `.map` serão gerados, o que possibilita o degub no browser. No chrome, digitar ctrl+P para escolher o arquivo código fonte desejado.

