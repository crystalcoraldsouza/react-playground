# Episode-07 | Finding the Path

A few examples were explored and concepts were covered.

## Examples

### namaste-food

## useEffect scenarios

```js
useEffect(() => {
  console.log("No dependency array, useEffect called on every re-render");
});
useEffect(() => {
  console.log(
    "Empty dependency array, useEffect called only on initial render",
  );
}, []);
useEffect(() => {
  console.log(
    "Dependency array with test, useEffect called only on test change",
  );
}, [test]);
useEffect(() => {
  console.log(
    "Dependency array with test and btnName, useEffect called only on test or btnName change",
  );
}, [test, btnName]);
```

## useState scenarios

Never use useState outside of components - throws an error. useState is used to create local state variable sinside your functional components.

Declare useStates on the top of the components - helps with parsing.

Never create a useState inside an if else, for loops, functions - will create inconsistencies.

## Routing

We are using React Router DOM. CreateReactRouter is the recommend one for React Routing.

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
```

### useRouteError

```js
const error = useRouteError();
<h2>{error.status + " : " + error.statusText}</h2>;
```

### Link

```js
<li>
  <Link to="/about">About Us</Link>
</li>
```

Behind the scenes Link used anchor tag. Link acts as a wrapper.

## Single Page Application

Only components get interchanged.

## Two types of routing in webapps

### Client-side routin

### Server-side routing

- different html pages and page is fetched from that route

## Dynamic Routing

```js
path: "/restaurant/:resId",
```
