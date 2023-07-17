# Money Input Stencil

The application showcases a form component which in turn is using another component to fill the money amount. User can input the amount in Euro and in Cents . Form submits to the Javascript console .

Following env used for development
    node v20.2.0
    npm v9.6.6
    macos Montery 12.5.1
    Vscode
    
used: stencil, web-components , css and flex , typescript

## Getting Started

To start using the components , clone this repo,
run below commands and follow the instructions on terminal:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```


### The good

1. No libraries used. for styling only css and flex is used.
2. Form is not aware of the implementation of multiple inputs in money input component.
3. separate components based approach
4. Architecture allows other features to be added in future
5. validation in place for unexpected user input


### improvements/ TODO
1. more specific error messages and validations.
2. Clear inputs after form submission, without using a reference to the child component.
3. styling/Design, responsive behaviour, global scss.
4. create labels for input, other accessibility imporvements.
5. more test cases.
6. more type safety could have been used .
7. form submit button should be disabled if required is true initially.


### guideline instructions comments
1. The inputs could have been number based rather than text/string. went with easier path and chose string because of time constraint.
2. Struggled with accessing elements after dom changes in e2e tests because of limited knowledge of stencil.
3. Worked one full day 8-9 hours, which includes knowledge gathering related to workings of stencil .