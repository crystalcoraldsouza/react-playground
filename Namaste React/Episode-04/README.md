# Episode-04 | Talk is Cheap, Show Me the Code

A few examples were explored and concepts were covered.

## Examples

### namaste-food

## Is JSX Mandatory for React?

No, JSX is NOT mandatory

You can write React without JSX using plain JavaScript.

## Is ES6 Mandatory for React?

No, ES6 is NOT mandatory—but highly recommended

## How to Write Comments in JSX

In JSX, you cannot use normal JavaScript comments directly inside HTML-like code.

> `// This will cause an error`

> `/* Invalid inside JSX */`

Correct Way (Inside JSX) - use `{/* comment */}`

## What is <React.Fragment> and <> </>?

Fragment is like an “Invisible wrapper”. Both are used to group multiple elements without adding extra DOM nodes.

React requires one parent element, this way you can do it with cleaner code.

Use <React.Fragment> when you need to add a key (important in lists)

## What is Virtual DOM?

The Virtual DOM (VDOM) is a lightweight copy of the real DOM kept in memory by React to make UI updates faster and more efficient.

Instead of updating the real DOM directly (which is slow), React:

- Updates the Virtual DOM
- Compares changes (diffing)
- Updates only what’s necessary in the real DOM

Step-by-step:

1. Initial render → Virtual DOM created
2. State/props change
3. New Virtual DOM created
4. React compares old vs new (diffing)
5. Updates only changed parts (reconciliation)

Reconciliation is the process by which React updates the DOM by comparing the old Virtual DOM with the new Virtual DOM and applying only the necessary changes.

## What is React Fiber?

React Fiber is the new reconciliation engine in React that makes rendering faster, interruptible, and more efficient.

React Fiber = “Smarter way to update the UI without blocking the browser”

Earlier React:

- Used a synchronous (blocking) rendering process
- Once rendering started → couldn’t stop
  Result:
- UI freezes
- Poor performance for large apps

React Fiber introduces:

1. Incremental Rendering

- Breaks work into small units (fibers)
- Processes them step-by-step

2. Prioritization

- Important updates first (e.g., user input)
- Less important updates later

3. Interruptible Work

- Can pause rendering
- Resume later

Two Phases:

1. Render Phase (Can pause)

- Build/update Fiber tree
- Calculate changes

2. Commit Phase (Cannot pause)

- Apply changes to real DOM

### Practical Ways to Use React Fiber Features

1. startTransition → Non-blocking UI updates

Typing in a search box + filtering a huge list → UI lags

```js
import { startTransition } from "react";

function handleChange(e) {
  const value = e.target.value;

  setInput(value); // urgent update

  startTransition(() => {
    setFilteredList(filterData(value)); // non-urgent
  });
}
```

Impact:

- Input stays smooth
- Heavy computation delayed

2. useTransition → Loading States for Slow Updates

```js
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setData(expensiveUpdate());
});
{
  isPending ? <Spinner /> : <List />;
}
```

Impact:

- Better UX with built-in loading states

3. useDeferredValue → Smooth Typing
   Search results update too fast → laggy typing

```js
const deferredQuery = useDeferredValue(query);

const filtered = useMemo(() => {
  return search(deferredQuery);
}, [deferredQuery]);
```

Impact:

- Input updates instantly
- Results update slightly late

4. React.lazy + Suspense → Code Splitting

```js
const Dashboard = React.lazy(() => import("./Dashboard"));

<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>;
```

Impact:

- Faster initial load
- Load components only when needed

5. Large Lists Optimization
   Combine Fiber + memoization:

```js
const Item = React.memo(({ item }) => {
  return <div>{item.name}</div>;
});
```

Impact:

- Prevents unnecessary re-renders
- Works efficiently with Fiber diffing

6. Prioritizing Animations

```js
startTransition(() => {
  setBigStateUpdate(data);
});
```

Keep animations smooth while heavy updates run

7. Avoid Blocking Work in Render

```js
const result = heavyCalculation(data);

useEffect(() => {
  startTransition(() => {
    setResult(heavyCalculation(data));
  });
}, [data]);
```

8. Route Transitions (Real App Example)
   With routing (e.g., Next.js or React Router):

```js
startTransition(() => {
  navigate("/dashboard");
});
```

Smooth page transitions

Developers can leverage React Fiber through features like startTransition, useTransition, and useDeferredValue to prioritize updates, defer non-critical rendering, and improve UI responsiveness. It also enables Suspense and lazy loading for efficient code splitting and smoother user experiences.

## Planning your app

- Name the app "Namaste Food"
- The layout or wireframes
  - Header - logo, nav links (home, about us, cart)
  - Body - search bar, cards showing restaurants
    - Card (image, name, ratings, cuisine, offers)
  - Footer (Links)
- Low level planning
  - Components
    - Header
      - Logo
      - Nav Items
    - Body
      - Search
      - Card Container or Restaurant Container
        - Resto Card
    - Footer
      - Copyright
      - Links
      - Address
      - Contact

## Props

Props to a component are arguments to a function

### Destructuring

Can also destructre props like

> `({ id, name, description })`
> `(item)` => `item.id`

## Config driven UI

> cardType: carousel

So UI can be different for different cities. UI driven by the data received.

I can say birmingham needs certain offers, special things taht coudl be fetched by the location, pincode manually, user specific, subscription etc.

Content, color, etc will drive the UI.

## CDN like Cloundinary to get the images

## Optional Chaining

## Key for Loops

Keys help React identify which items have changed, been added, or removed during reconciliation.

Very essential to use key in similar sibling elements.

React optimises its render cycle. This is done by using a key to determine the change needed in that compoenent.

For editing an exist or adding a new one.

- Efficient Updates (Reconciliation)
- Preserves Component State
- Better Performance
  - Minimizes DOM operations
  - Works efficiently with React Fiber

### Using index as a key?

Looks right? Right?

> Never use index as a key. Offical documentation|

`Index as a key is an anti-pattern.`
