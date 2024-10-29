# What's this project about?

This project aims to display an ordered list of pokemons with information such as name, dex number, and types. If you select one of the pokemon the application will validate if that pokemon has an evolution. If it does, it will direct you to a page with the pokemon's evolution chain.

## What has it got?

- This project was developed using the Cells framework.
- This project uses components from the BBVA library.
- The operation and visualization of the application is done through UI components for the representation of information and DM components for the management of data provided by the PokéApi API.

To go deeper, please check our [Platform Documentation](https://platform.bbva.com/en-us/developers/engines/cells/documentation/getting-started/what-is-cells).

# CELLS (**cells-cli**)

**cells-cli** is the command line tool that provides you with common tasks and commands for working in a cells project.

## Installation

To install the application just run:

```sh
npm -g install @cells/cells-cli
```

Once installed, `cells` command will be available to you.

## Usage

- Starting the application in dev mode

```
$ cells app:serve -c dev.js
```

- Starting the application in production mode

```
$ cells app:serve -c dev.js -b
```

#### Installation (inside your e2e test project)

```shell
yarn
```

#### Execution (from the root of your e2e project)

```shell
./node_modules/@cells-pepino/cli/bin/cli.js -c ./config/wdio5.local.conf.js
```

or simply, through provided npm script in e2e scaffold project:

```shell
npm run test
```

Follow given documentation, and e2e project README.md file for more information about how to do it (the file is located in the folder `test/e2e`).

**If you are going to run your e2e tests against a local application (you are hosting it in your local workspace), remember to serve it first** - otherwise e2e test runner won't be able to run the tests against it - See more information about `cells app:serve` command above.

**REMEMBER! You must install all required npm dependencies first inside your E2E project**

```shell
yarn
```

Parameters:

- **url**: url for testing. Required
- **config_file**: javascript configuration file. This configuration must exists in the path `./app/config/{environment}.js`. Required.

**WARNING:**

To run the test yo must move on a e2e folder project. You can create it answer `Y' to the question
`Do you want an E2E project to be created? (Y/n)`in the creation app process.
See`cells app:create --help`.
