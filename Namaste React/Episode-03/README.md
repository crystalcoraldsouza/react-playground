# Episode-03 | Laying the foundation

A few examples were explored and concepts were covered.

## Examples

### 01-jsx-demo

## Role of type Attribute in `<script>` Tag

### Default

Modern browsers assume this automatically, so it's usually omitted

```js
<script src="app.js"></script>
```

type="text/javascript"

### module

Enables ES Modules (modern JS)

```js
<script type="module" src="app.js"></script>
```

- Use import / export
- Runs in strict mode
- Deferred by default (no blocking)
- Scoped (no global pollution)

### nomodule

Used with differential bundling

```js
<script nomodule src="legacy.js"></script>
```

- Runs only in older browsers
- Ignored by modern browsers

### Other MIME Types (Less Common)

JSON or Data Scripts

```js
<script type="application/json">
  { "name": "Crystal" }
</script>
```

Not executed—used for embedding data

### Custom Types

```js
<script type="text/plain">This won't execute</script>
```

Browser ignores it as JS

## Using scripts to start up the application

Dev mode

> "start": "parcel index.html"
> Production mode
> "build": "parcel build index.html"

npm start or npm run start

start is a reserved keyword

npm run build

React.createElement => React Element(JS Object) => HTMLElement(render)

## JSX

Moving from React core to a dev friendly syntax JSX.

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe UI structure in a way that looks like HTML. JSX lets you write HTML-like code inside JavaScript.

```js
const element = React.createElement("h1", null, "Hello, Crystal!");
const element = <h1>Hello, Crystal!</h1>;
```

element is an object same as createElement.

JSX is not understood by browsers directly, It gets converted (transpiled) into normal JavaScript.

Why Use JSX?

- Easier to Read
- Combine Logic + UI
- Dynamic Rendering
- Show more useful errors and warnings
- JSX prevents code injections (attacks) - Sanitizes the data

Key Rules of JSX

- Must return a single parent element
- Use className instead of class
- Expressions inside { }

> JSX is NOT HTML in JS, it is a HTML like or XML-like syntax

> Code is first for humans, then machines

## JS engine understands ECMAScript

```js
const element = <h1>Hello, Crystal!</h1>;
```

JS engine throws an error.

## Transpiler

A transpiler converts code from one high-level language → another high-level language.

Transpilation => Converting the code in such a format that the browsers can understand.

JSX (syntactic sugar for create el) => Code Transpiled by Babel to React Element (JS Object) => React coverst to HTMLElement(render) => JS Engine can render it

JSX → JavaScript
TypeScript → JavaScript

Parcel is using `babel` to transpile JSX to JS.

```js
const jsxHeading = <h1 id="heading">Hello World from React!</h1>;
root.render(jsxHeading);
```

root.render cannot understand jsxHEading - it has to be transpiled.

## Compiler

A compiler converts code from a high-level language → low-level language (machine code).

JS engine (like V8 JavaScript engine):

- Parses JS
- JIT compiles → machine code
- Executes

## Babel

Babel is called a JavaScript compiler because it follows the standard compiler pipeline of parsing, transforming, and generating code. However, unlike traditional compilers, it converts modern JavaScript or JSX into compatible JavaScript rather than machine code, making it more precisely a transpiler.
Babel parses token by token.

- Parsing (Tokenisation + AST creation)
  - Tokenisation (Lexical Analysis)
    - Babel first breaks your code into tokens (small meaningful pieces)
    - Each token has:
      - Type (keyword, identifier, operator, literal)
      - Value
  - Parsing → AST (Abstract Syntax Tree)
    - Tokens are converted into a tree structure representing code logic
    - AST is a structured representation of your code that Babel can understand and manipulate
- Transformation (modify AST)
  - Babel plugins traverse and modify the AST
  - JSX nodes replaced with React.createElement(...)
- Code Generation (AST → JS code)
  - Babel converts modified AST back into valid JS
  - Adds formatting, semicolons, etc.

  > Babel never executes your code—it only rewrites it in a way browsers understand.

  ### What Modifications Happen in AST?
  - JSX → React Function Calls

  Input:

  ```js
  <h1>Hello</h1>
  ```

  Output:

  ```js
  React.createElement("h1", null, "Hello");
  ```

  - Modern JS → Older JS
    Input:

  ```js
  const add = (a, b) => a + b;
  ```

  Output:

  ```js
  var add = function (a, b) {
    return a + b;
  };
  ```

  - Optional Chaining

Input:

```js
user?.name;
```

Output:

```js
user == null ? undefined : user.name;
```

- Adding Polyfills (via plugins)

> Promise

- Code Optimisation (sometimes)
  - Remove unused code (tree-shaking support)
  - Inline constants
  - Simplify expressions

## React Components

Everything in React is a Component. There are two types,

- Class based (OLD) -> uses JS classes
- Functional components (NEW) -> uses JS functions

Always name a component with a capital letter.

Function that returns jsx code is functional compoenent.

### Rendering React Components

```js
const HeadingComponent = () => {
  return <h1 id="heading">Hello World from React!</h1>;
};
root.render(<HeadingComponent />);
```

## Component Composition

A component inside a component. Calling a component inside another component is Component Composition.

```js
const Title = () => <h1>Namaste React</h1>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
  </div>
);
```

## Curly braces { } superpower

You can run JS inside JSX.

```js
const title = <h1>Namaste React</h1>;
const HeadingComponent = () => (
  <div id="container">
    {title} {100 + 200}
  </div>
);
```

Can run Component in a Element anf vice versa

```js
const HeadingComponent = () => <div id="container">{100 + 200}</div>;
const title = (
  <div>
    <h1>Namaste React</h1>
    <HeadingComponent />
  </div>
);
```

> <HeadingComponent /> or <HeadingComponent></HeadingComponent> or {HeadingComponent()}

> Order of declaration matters in JS.

## Assuming malicious injection of code

Cross-sit Scripting attack.

Get session, info about the data.

JSX takes care of the attack by escaping this, it sanitizes the data.

```js
const data = api.getData();
const title = (
  <div>
    <h1>Namaste React</h1>
    {data}
  </div>
);
```

```js
const userInput = "<script>alert('Hacked!')</script>";
<div>&lt;script&gt;alert('Hacked!')&lt;/script&gt;</div>;
```

> Script is displayed as text, not executed
