# Episode-13 | Time for Test

A few examples were explored and concepts were covered.

## Examples

### namaste-food

## Developer Testing

We are focusing on Developer Testing. Writing even a single line, can impact almost anything, since many components are interdependent.

Various types of testing:

1. Manual Testing - Testing the functionality that we have developed. E.g → we have developed a search bar, manual testing is checking the search bar manually by searching the query. This is not a very efficient way because we can’t test every new feature in a big application. A single line can introduce bugs in our whole app because multiple components are connected to each other.
2. Automatic testing - We can write the test cases for testing the functionality. It includes
3. Unit Testing - components tested in isolation
4. Integration Testing - testing integration of connected components
5. End to End Testing (e2e) - testing all user flows from entering to leaving the site (tools like Cypress, Puppeteer, Selenium)

## React Testing Library

The testing library existing for various frameworks and is built on DOM testing library.

RTL uses Jest which is a JS testing framework.

We require various libraries to build a large scale application.

### Setting up RTL

- Install React Testing Library
- Install Jest
- Install Babael Dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- Jest configuration
- Install jsdom library
- Install babel preset react to make jsx work and add to config
- Install testing library jest dom

> Since Parcel uses Babel in the background for transpiling, this babel config setup would conflict or override it. So we have to accomodate some changes in Parcel config.

> Jest needs jsdom - a library to parse and interact with assembled HTML just like a browser

## Writing test cases in js

Test Cases can be under `__tests__` or have file names as `*.test.js`, `*.test.ts`, `*.spec.js` or `*.spec.ts`

`__` is also known as dunder (double underscore) also referred to as "magic methods" is borrowed directly from Python. The single most famous example in JavaScript is **proto**, which developers heavily refer to as "dunder proto"

This would pass if nothing is written.

```js
test("Sum function should calculate sum of two numbers", () => {});
```

You should have atleast some assertion

```js
test("Sum function should calculate sum of two numbers", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
```

## Unit tests

Let’s write a test case to check the component is loading or not. To check any component loads or not, we need to check in the jsdom.

We require to add in providers for routing, redux and any external providers since the components dont have these wrappers. We used the Link component provided by reactrouter-dom. But we have provided router to the App component. So, To test the Header we have to provide the router to the Header component. We used redux store in the header (useSelector) but the store is provided to the app component. To test the Header component, we need to provide the store to Header component as well

We also use mock files to inject data

Fetch is not from JS its from teh browser, hence it needs to be mocked

## Integration Testing

Adding the required componenst for the flow, testing if they get affected or not

## What is Enzyme?

Enzyme is a JavaScript testing utility for React created by Airbnb.

It was designed to make it easier to:

- test React components
- inspect component state/props
- simulate events

```js
const wrapper = shallow(<Header />);
expect(wrapper.find("h1").text()).toBe("Hello");
```

### Main idea of Enzyme

Enzyme focused heavily on:

- component internals
- implementation details
- component instances/state
  x
  It gave developers low-level control.

### Problem with Enzyme

As React evolved:

- Hooks
- Concurrent rendering
- React 18+

Enzyme became harder to maintain and less aligned with React philosophy.

No it is legacy / older React testing approach
