# wallet-ts

## Iniciar um projeto TS

1 - npm init -y
2 - npm install typescript -D
3 - npx tsc --init
4 - alterar a propriedade do tsconfig **rootDir** colocando o root do nosso projeto
5 - alterar a propriedade do tsconfig **outDir** colocando a caminho de saida do nosso projeto (./dist)
6 - alterar o package.json adicionando o comando de build no script: tsc && node ./dist
7 - criar uma pasta src na raiz do projeto que será o nosso root
