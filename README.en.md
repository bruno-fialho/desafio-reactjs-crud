<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Challenge 10: GoRestaurant Web
</h3>

<p align="center">
  <a href="#rocket-about-the-application">About the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-installed-packages">Installed packages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

<img alt="GoRestaurant" src=./src/assets/gorestaurant.gif />

## :rocket: About the application

An application in React.js along with TypeScript, GoRestaurant, using the concept of CRUD (Create, Read, Update, Delete).

This is an application that connects to a fake API, and displays the created food dishes and allows the creation, removal and updating of these dishes.

### Application Template

The template is available in the following URL: **[Access Template](https://github.com/Rocketseat/gostack-template-reactjs-crud)**

**Tip**: In case you don't know how to use Github repositories as templates, we have a guide in **[Rocketseat FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Navigate to the created folder and open it in the Visual Studio Code, remember to execute the command `yarn` in your terminal in order to install all the dependencies


### Using a fake API

First of all, so that you have the data to display on screen, a file was created that will be used as a fake API to provide this data.

For this, a dependency called `json-server` is installed in package.json, and a file called` server.json` contains the data for a `/ foods` route. To run this server you can run the following command:

```
  yarn json-server server.json -p 3333
```

### Application features

The application has the following features:

- **`List your API's food dishes`**: Your `Dashboard` page should be able to display a listing, with the `title`, `value`, and `description` and `available` field for everyone the food dishes that are registered in your API.

- **`Add new food dishes to your API`**: On your Dashboard page you must open a modal by clicking on the `New Dish` button in the Header. This modal must be responsible for registering a new `food` passing the `image`, `name`, `description`, `value` fields.

- **`Edit food dishes from your API`**: On your Dashboard page, you must open a modal by clicking on the `Edit Dish` button. This modal should be responsible for editing a `food` by passing the`image`, `name`, `description`, `value` fields.

- **`Remove food dishes from your API`**: On your Dashboard page you must remove a food dish by clicking on the button with the trash can icon in the Food component.

- **`Change availability of food dishes from your API`**: On your Dashboard page you must change the availability of a food dish by clicking on the switch that is controlled by the value of `available`.

### Specification of tests

In each test, you have a brief description of what your application must do in order for the test suits pass.

If you have questions about what the tests are, and how to interpret them, take a look at **[Rocketseat FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-challenges).**

For this challenge we have the following tests:

- **`should be able to list all the food plates from your api`**: In order for this test to pass, your application must allow all food dishes that are returned from your fake API to be listed.

- **`should be able to add a new food plate`**: For this test to pass, you must allow a plate of food to be added to your api, also adding it to the list.

- **`should be able to edit a food plate`**: In order for this test to pass, you must allow a plate of food to be edited in your api, also editing it in the listing.

- **`should be able to remove a food plate`**: In order for this test to pass, you must allow a plate of food to be removed from your api, also removing it from the list.

- **`should be able to update the availability of a food plate`**: In order for this test to pass, on your dashboard you must allow the status of the food plate to be changed between `Available` and `Unavailable`;

## :cd: Installed packages

The following is a list of installed packages:

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

	Optional
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme)
-[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.
