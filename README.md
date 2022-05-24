# Monorepo Example

Template de monorepo Lerna com TypeScript e Babel.

## Getting Started

```bash
npm install
npm run bootstrap
npm start:dev
```

Para executar comandos [lerna](https://github.com/lerna/lerna/) diretamente:

```bash
$ lerna <command>
```

## Publishing Packages

Para incrementar as versões do pacote, adicione tags git, commite alterações e publique no registro npm:

## Available Package Scripts

| Nome         | Descrição                                                                 |
|--------------|---------------------------------------------------------------------------|
| `bootstrap`  | Pré-transpile o(s) módulo(s) e execute `lerna bootstrap`                  |
| `cleanup`    | Remove `node_modules` dentro de cada diretório de pacote                  |
| `commit`     | Abra um diálogo interativo para gerar uma mensagem de commit convencional |
| `learna`     | Inicie o assistente lerna                                                 |
| `release`    | Gere changelogs e publique novas versões de pacotes                       |
| `start`      | Execute `npm start` em cada pacote em paralelo                            |
