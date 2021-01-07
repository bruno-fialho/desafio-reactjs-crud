<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Desafio 10: GoRestaurant Web
</h3>

<p align="center">
  <a href="#rocket-sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-pacotes-instalados">Pacotes instalados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<img alt="GoRestaurant" src=./src/assets/gorestaurant.gif />

## :rocket: Sobre a aplicação

Uma aplicação no React.js junto com TypeScript, a GoRestaurant, utilizando o conceito de CRUD (Create, Read, Update, Delete).

Essa é uma aplicação que se conecta a uma fake API, e exibe os pratos de comida criados e permite a criação, remoção e atualização desses pratos.

### Template da aplicação

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-reactjs-crud)**

**Dica**: Caso não saiba utilizar repositórios do Github como template, temos um guia em **[FAQ da Rocketseat](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências.

### Utilizando uma fake API

Antes de tudo, para que você tenha os dados para exibir em tela, foi criado um arquivo que será utilizado como fake API para prover esses dados.

Para isso, está instalado no package.json uma dependência chamada `json-server`, e um arquivo chamado `server.json` que contém os dados para uma rota `/foods`. Para executar esse servidor você pode executar o seguinte comando:

```
  yarn json-server server.json -p 3333
```

### Funcionalidades da aplicação

A aplicação tem as seguintes funcionalidades:

- **`Listar os pratos de comida da sua API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem, com o campo `title`, `value`, e  `description` e `available` de todos os pratos de comida que estão cadastrados na sua API.

- **`Adicionar novos pratos de comida a sua API`**: Em sua página Dashboard você deve abrir um modal ao clicar no botão `Novo Prato` no Header. Esse modal deve ser responsável por cadastrar uma nova `food` passando os campos `image`, `name`, `description`, `value`.

- **`Editar pratos de comida da sua API`**: Em sua página Dashboard você deve abrir um modal ao clicar no botão `Editar Prato`. Esse modal deve ser responsável por editar uma `food` passando os campos `image`, `name`, `description`, `value`.

- **`Remover pratos de comida da sua API`**: Em sua página Dashboard você deve remover um prato de comida ao clicar no botão com ícone de lixeira no componente Food.

- **`Alterar disponibilidade dos pratos de comida da sua API`**: Em sua página Dashboard você deve alterar a disponibilidade de um prato de comida ao clicar no switch que é controlado pelo valor de `available`.

### Especificação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada no **[FAQ da Rocketseat](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Para esse desafio, temos os seguintes testes:

- **`should be able to list all the food plates from your api`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados, toda os pratos de comidas que são retornadas da sua fake API.

- **`should be able to add a new food plate`**: Para que esse teste passe, você deve permitir que um prato de comida seja adicionado a sua api, adicionando-o também à listagem.

- **`should be able to edit a food plate`**: Para que esse teste passe, você deve permitir que um prato de comida seja editado na sua api, editando-o também na listagem.

- **`should be able to remove a food plate`**: Para que esse teste passe, você deve permitir que um prato de comida seja removido da sua api, removendo-o também da listagem.

- **`should be able to update the availibility of a food plate`**: Para que esse teste passe, em sua dashboard você deve permitir que o status do prato de comida seja alterado entre `Disponível` e `Indisponível`;

## :cd: Pacotes instalados

A seguir segue uma lista dos pacotes instalados:

- [react](https://reactjs.org/)
- [react-scripts](https://github.com/facebook/create-react-app#readme)
- [react-router-dom](https://github.com/ReactTraining/react-router#readme)
- [react-modal](https://github.com/reactjs/react-modal)
- [typescript](https://www.typescriptlang.org/)
- [ts-jest](https://kulshekhar.github.io/ts-jest)
- [jest-environment-jsdom-sixteen](https://github.com/SimenB/jest-environment-jsdom-sixteen#readme)
- [json-server](https://github.com/typicode/json-server)
- [axios](https://github.com/axios/axios)
- [styled-components](https://styled-components.com/)
- [unform](https://github.com/Rocketseat/unform#readme)
- [yup](https://github.com/jquense/yup)

	Opcional
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme)
-[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
