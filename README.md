# Prerequisites
After cloning the repository, you need to install these dependencies within your framework 
- Node Package Manager (NPM)
- [Cypress](https://www.npmjs.com/package/cypress)
- [cypress-real-events](https://www.npmjs.com/package/cypress-real-events)
- [cypress-drag-drop]()
- [cypress/grep](https://www.npmjs.com/package/@cypress/grep)
- [eslint/js]()
- [cypress-mochawesome-reporter]()
- [dotenv](https://www.npmjs.com/package/dotenv)
- [eslint](https://www.npmjs.com/package/eslint)
- [globals]()



## Installing Node Package Manager within framework CLI

```bash
npm init -y
```

## Installing Cypress within the framework CLI

```bash
npm install cypress -D
```

## Installing Cypress-Real-Events dependency within the framework CLI

```bash
npm install cypress-real-events
```

If the cypress-real-events dependency import doesnt show up after cloning (It should show up), Register new commands by adding this to your cypress/support/e2e.js file.

```bash
import "cypress-real-events";
```

## Why do we need cypress-real-events dependency?
Cypress default events are simulated. That means that all events like cy.click or cy.type are fired from javascript. That's why these events will be untrusted (event.isTrusted will be false) and they can behave a little different from real native events. But for some cases, it can be impossible to use simulated events, for example, to fill a native alert or copy to the clipboard. This plugin solves this problem.

## Installing Cypress-drag-drop dependency within the framework CLI

```bash

```
NOTE: Since everything else is already configured as an existing framework, this is all you have to do. But normally, there is a more extensive download process which is why I included the link to the NPM page for this dependency to see the documentation if needed. 

## Installing cypress-mochawesome-reporter dependency within the framework CLI

```bash
npm i --save-dev cypress-mochawesome-reporter
```
NOTE: Since everything else is already configured as an existing framework, this is all you have to do. But normally, there is a more extensive download process which is why I included the link to the NPM page for this dependency to see the documentation if needed. 

## Installing dotenv dependency within the framework CLI

```bash
npm install dotenv -D
```
NOTE: Since everything else is already configured as an existing framework, this is all you have to do. But normally, there is a more extensive download process which is why I included the link to the NPM page for this dependency to see the documentation if needed. 

## Installing cypress-grep dependency within the framework CLI

```bash
npm i -D @cypress/grep
```
NOTE: Since everything else is already configured as an existing framework, this is all you have to do. But normally, there is a more extensive download process which is why I included the link to the NPM page for this dependency to see the documentation if needed. 

## Installing eslint dependency within the framework CLI

```bash

```
NOTE: Since everything else is already configured as an existing framework, this is all you have to do. But normally, there is a more extensive download process which is why I included the link to the NPM page for this dependency to see the documentation if needed. 

## Running the cypress test runner

```bash
npx cypress open
```
