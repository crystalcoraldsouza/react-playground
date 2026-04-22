# Episode-08 | Let's Get Classy

A few examples were explored and concepts were covered.

## Examples

### namaste-food

## Functional and Class based components

Functional Component - function that returns jsx

Class based component - class that extends react compo and has a render method returning a jsx

## Super

The super(props) call ensures that the React.Component class's constructor is called, which is necessary for React to set up the component correctly. This is especially important because React uses the props object to pass data from parent components to child components. By calling super(props), we make sure that the props are properly handled in the parent class's constructor, and we can access them in our child component.

In modern JavaScript and React, it's also common to define a constructor without explicitly calling super(props), and it will be automatically called for us. However, if we define a constructor in a child class, and the parent class has its constructor, it's a good practice to include super(props) to ensure that the parent class's constructor is invoked correctly

## Class based props and states

You have to use a constructor and super for props and call it using `props.value`

The state is declared in the constructor in `this.state`

The state is updated using `this.setState`

## Order of execution

### Parent and Child

- Parent constructor
- Parent render
- Child constructor
- Child render
- Child componentDidMount
- Parent componentDidMount

### Parent with siblings

The behaviour between siblings is due to optimization with React

- Parent constructor
- Parent render
- Child1 constructor
- Child1 render
- Child2 constructor
- Child2 render
- Child1 componentDidMount
- Child2 componentDidMount
- Parent componentDidMount
- Parent componentWillUnmount
- Child1 componentWillUnmount
- Child2 componentWillUnmount

### componentDidMount is used for API calls

This is done as we dont want to delay the UI loading. Equivalent to useEffect with empty array dependency.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

React batches the render phase, all the children for optimisation, thius then leads to commit phase which is exsive for the diffing algo

Don't compare react lifecycle method to functional components

Clean up of intervals and timeouts in browser

## Why can't we have the callback function of useEffect async ?

In React, the useEffect hook is designed to handle side effects in functional components. It's a powerful and flexible tool for managing asynchronous operations, such as data fetching, API calls, and more. However, useEffect itself cannot directly accept an async callback function. This is because useEffect expects its callback function to return either nothing (i.e., undefined) or a cleanup function, and it doesn't work well with Promises returned from async functions.

There are a few reasons for this:

Return Value Expectation - The primary purpose of the useEffect callback function is to handle side effects and perform cleanup. React expects us to either return nothing (i.e., undefined) from the callback or return a cleanup function. An async function returns a Promise, and it doesn't fit well with this expected behavior.

Execution Order and Timing - With async functions, we might not have fine-grained control over the execution order of the asynchronous code and the cleanup code. React relies on the returned cleanup function to handle cleanup when the component is unmounted or when the dependencies specified in the useEffect dependency array change. If you return a Promise, React doesn't know when or how to handle cleanup.

To work with async operations within a useEffect, we can use the following
pattern:

```js
useEffect(
  () => {
    const fetchData = async () => {
      try {
        // Perform asynchronous operations
        const result = await someAsyncOperation();
        // Update the state with the result
        setState(result);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };
    fetchData(); // Call the async function
    return () => {
      // Cleanup code, if necessary
      // This function will be called when the component unmounts or when dependencies change
    };
  },
  [
    /* dependency array */
  ],
);
```

## Nested Routes

```js
createBrowserRouter([
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
      { path: "settings", Component: Settings },
    ],
  },
]);
```

Omitting the path in a route creates new Nested Routes for its children without adding any segments to the URL.

Index routes are defined by setting index: true on a route object without a path. Index routes render into their parent's Outlet at their parent's URL (like a default child route).

```js
createBrowserRouter([
  {
    // no path on this parent route, just the component
    Component: MarketingLayout,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
    ],
  },

  {
    path: "projects",
    children: [
      { index: true, Component: ProjectsHome },
      {
        // again, no path, just a component for the layout
        Component: ProjectLayout,
        children: [
          { path: ":pid", Component: Project },
          { path: ":pid/edit", Component: EditProject },
        ],
      },
    ],
  },
]);
```

## middleware

Route middleware runs sequentially before and after navigations. This gives you a singular place to do things like logging and authentication. The next function continues down the chain, and on the leaf route the next function executes the loaders/actions for the navigation.

Route loaders provide data to route components before they are rendered.

```js
createBrowserRouter([
  {
    path: "/",
    middleware: [loggingMiddleware],
    loader: rootLoader,
    Component: Root,
    children: [{
      path: 'auth',
      middleware: [authMiddleware],
      loader: authLoader,
      Component: Auth,
      children: [...]
    }]
  },
]);
const userContext = createContext<User>();

async function authMiddleware ({ context }) {
  const userId = getUserId();

  if (!userId) {
    throw redirect("/login");
  }

  context.set(userContext, await getUserById(userId));
};
async function loader({ params }) {
  return { message: "Hello, world!" };
}

function MyRoute() {
  let data = useLoaderData();
  return <h1>{data.message}</h1>;
}
```

## Lazy Loading

Routes can take most of their definition lazily with the lazy property.

```js
createBrowserRouter([
  {
    path: "/show/:showId",
    lazy: {
      loader: async () => (await import("./show.loader.js")).loader,
      action: async () => (await import("./show.action.js")).action,
      Component: async () => (await import("./show.component.js")).Component,
    },
  },
]);
```

## createHashRouter

createHashRouter is part of the React Router library and provides routing capabilities for single-page applications (SPAs). It's commonly used for building client-side navigation within applications. Unlike traditional server-side routing, it uses the fragment identifier (hash) in the URL to manage and handle routes on the client side. This means that changes in the URL after the `#` symbol do not trigger a full page reload, making it suitable for SPAs.

To use createHashRouter, we typically import it from the React Router library and
define our routes using Route components.

```js
import { createHashRouter, Route } from "react-router-dom";
const App = () => (
  <createHashRouter>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </createHashRouter>
);
```

## createMemoryRouter

createMemoryRouter is another routing component provided by React Router. Unlike createHashRouter or BrowserRouter, createMemoryRouter is not associated with the browser's URL. Instead, it allows you to create an in-memory router for testing or other scenarios where you don't want to interact with the actual browser's URL.

```js
import { createMemoryRouter, Route } from "react-router-dom";
const App = () => (
  <createMemoryRouter>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </createMemoryRouter>
);
```

In both cases, we define our application's routes within the router component and specify the components to render for each route. The choice between createHashRouter and createMemoryRouter depends on our specific use case, such as whether we're building an SPA that interacts with the browser's URL or a scenario where we need an in-memory router for testing.
