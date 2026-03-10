# Episode-01 | Inception Notes

A few examples were explored and concepts were covered.

## Examples

### 01-simple-html-file

Created a simple html file with `html:5` which is in an in built feature of VSCode.

#### Emmet

Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full-fledged boiler plate code for writing HTML and CSS.

### 02-injecting-html-using-JS

Inject html using js script tag.

### 03-simple-react-app

Using CDN (Content Delivery Network) of React and ReactDOM to render a react page. Made use of React and ReactDOM, createRoot and render respectively.

### 04-simple-react-app

Created a simple React app with seperate JS file by moving the script. Also explored the object returned usinf createElement.

```js
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!",
);
```

Heading object:

```js
{
   key: null,
   props: {
      children: "Hello World from React!",
      id: "heading",
      xyz: "abc"
   },
   ref: null,
   type: "h1"
}
```

H1 heading is an object (react) with type, props and key. Props has id and xyz as attributes.
The third param `"Hello World from React!"` are the children.

The second param {} or with values is used to give attributes to the tag.

```js
root.render(heading);
```

This converts the React Object into the H1 tag

### 05-simple-react-app

Importing css file and assigning some style.

### 06-nested-elements

By using create element in the third argument of createElement. We created siblings by using an array of children.

```js
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", xyz: "abc" },
      "Hello World from React!",
    ),
    React.createElement("h1", null, "I am a h1 tag"),
  ]),
);
```

The object of parents looks like:

```js
{
   key: null,
   props: {
      id: "parent",
      children: {
         props: {
            id: "child",
            children: [
               {
                  props: {
                     id: "heading",
                     xyz: "abc"
                     children: "Hello World from React!"
                  }
                  type: "h1"
               },
               {
                  props: {
                     children: "I am a h1 tag"
                  }
                  type: "h1"
               },
            ]
         }
         type: "div"
      }
   },
   ref: null,
   type: "div"
}
```

This can be very elaborate structurally and hence we have jsx to simplify it!

## Order of files in html

### Importing app.js before or after React injection

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="./app.js"></script>
```

vs:

```js
<script src="./app.js"></script>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

This throws an error! `Uncaught ReferenceError: React is not defined`

## ReactDOM render replaces the root children

Initially the app executes and renders the HTML `"Crystal is here".` After it encounters script, it loads react, reactDOM and then the app.js is loaded and executed. Once render is executed, it `replaces` not `append` the root div with the elements mentioned.

## CDN

A Content Delivery Network (CDN) is a distributed network of servers located in different geographic regions that deliver web content (like images, videos, CSS, JavaScript, and APIs) to users from the server closest to them.

Normally, when a user loads a website:

1. Browser sends a request to the origin server (your main server).
2. The server sends back the requested files.

If the user is far away (e.g., a server in the US and user in Europe), the request takes longer.

### Faster loading speed

Content is delivered from a server geographically closer to the user.

1. Your content is cached on multiple servers worldwide (called edge servers).
2. The user request is routed to the nearest CDN node.
3. The CDN serves the cached content quickly.
   So instead of always hitting your main server, the nearest CDN server responds.
   Result: lower latency and faster page load.

### Reduces load on your server

Static assets are cached on CDN nodes. Example assets are Images, JS bundles, CSS, Fonts, Videos, etc. Instead of 10,000 users hitting your server, CDN handles most requests

### Improves reliability

If one server fails, CDN automatically routes traffic to another edge node. This increases uptime and fault tolerance.

### Security benefits

Most CDNs provide built-in protections:

- DDoS protection
- Rate limiting
- Web Application Firewall (WAF)
- Bot protection

### Better scalability

If your site suddenly gets 1M visitors, CDN absorbs the traffic spike.

This is crucial for:

- product launches
- viral posts
- high-traffic apps

### React CDN

A React CDN is when React is loaded directly using a `<script>` tag from a CDN instead of bundling it.
It is useful for:

- quick prototypes
- small demos
- simple static pages

However, large production React applications typically bundle React using tools like Vite or Webpack and then deploy the built files to a CDN for performance and caching.

### Why React apps create a vendor.js bundle and serve it via CDN

In many React builds, the output is split into files like:

```js
dist/
├── main.js
├── vendor.js
├── runtime.js
└── style.css
```

vendor.js contains third-party libraries, such as React, React DOM, Axios, Lodash

```js
vendor.js
├── React
├── ReactDOM
├── Lodash
└── Axios
```

```js
main.js
├── your components
├── your business logic
└── UI code
```

#### Better caching

Third-party libraries rarely change. Every small change forces users to re-download everything.

Browser cache works better.User downloads vendor.js once, later visits reuse cached file. Only main.js downloads again

#### Faster page load

Browsers can download files in parallel improving performance

#### CDN caching benefits

When vendor.js is served from a CDN the file is cached globally on edge servers.

#### Long-term caching strategy

Production apps use cache hashing

Example:

```js
vendor.8f3a1.js // remains same
main.9bd23.js // hash changes
```

So browsers reuse cached vendor.js.

## Why do we need React and React DOM?

React and React DOM serve different purposes in a React application.

### React Core

React is the core library responsible for:

- Creating components
- Managing state and props
- Handling the Virtual DOM
- Defining the UI structure

React itself does not know how to render the UI to a specific platform.

The same React core can be used for different platforms such as:

- Web browsers
- Mobile apps
- 3D environments

React is platform-agnostic.

### React DOM

React DOM is the package that connects React to the browser DOM.

Its responsibilities include:

- Rendering React components to the HTML DOM
- Updating the DOM when state changes
- Managing efficient updates using the Virtual DOM diffing algorithm

## Most costly operation DOM Manipulation

All frameworks are tryign to optimise the same. This is the main philosophy of React.

## Crossorigin

`crossorigin` is an HTML attribute used when loading resources from a different origin (domain).

```js
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
```

The `crossorigin` attribute tells the browser how to handle CORS (Cross-Origin Resource Sharing) when fetching the script.

It controls whether credentials (cookies, authentication) are sent and whether error information is exposed.

Without crossorigin, some errors from external scripts may appear as: `Script error.` instead of showing the real error.

### Values of crossorigin

#### crossorigin="anonymous" (most common)

```js
<script crossorigin="anonymous" src="..."></script>
```

- No cookies or credentials are sent
- Allows proper error reporting
- Used for CDNs like React, Vue, etc.

#### crossorigin="use-credentials"

```js
<script crossorigin="use-credentials" src="..."></script>
```

- Sends cookies and authentication data
- Requires the server to allow credentials in CORS headers

### Why React CDN uses it

React CDN includes crossorigin so that:

- browser can fetch the script from another domain
- proper error stack traces appear in DevTools
- it works correctly with CORS policies

## Why is React called a library vs a framework?

React is called a library rather than a framework mainly because of how much control it has over your application.

> A library is used by your code. <br />
> A framework controls your code.

React only focuses on building UI components, while frameworks usually control the entire application structure.

React is a library because it focuses only on building UI components and does not control the overall application architecture, unlike frameworks which provide a complete structure for building applications.

### It only handles the View layer.

React’s primary responsibility is rendering UI.
It does not include built-in solutions for:

- routing
- state management
- HTTP requests
- form handling
- project structure

You often add other libraries:
Routing → React Router
State → Redux, Zustand, Context API
HTTP → Axios

### You control the architecture

With React, you decide how the app is structured.
Example project structures can vary:
src/
components/
hooks/
services/
pages/
src
├── components
├── hooks
├── services
└── pages

React doesn't enforce this. Frameworks usually enforce conventions.

### No strict application lifecycle control

Frameworks typically control - application flow, folder structure, module system. React just provides functions and components you call.

### Inversion of Control

The deeper reason React is considered a library is because of something called Inversion of Control (IoC). Inversion of Control (IoC) is a design principle where the control of program flow is transferred from the developer’s code to a framework or external system, which decides when and how the code runs.

React does use some IoC concepts, but overall it is still considered a library because the developer retains most of the control.
React partially uses Inversion of Control, but does not fully control the application like a framework does.

- You control the app structure
- You decide when to render
- You choose routing, state management, data fetching

### Where React does use IoC (a little)

React controls some things internally:

- Component lifecycle
- Rendering process
- Reconciliation algorithm
- Hook execution order

## What is React? Why React is known as ‘React’?

React is a JavaScript Library. The name `React` was chosen because the library was designed to allow developers to react to changes in state and data within an application, and to update the user interface in a declarative and efficient
manner.

## What is Library?

Library is a collections of prewritten code snippets that can be used and reused to perform certain tasks. A particular JavaScript library code can be plugged into application code which leads to faster development and fewer vulnerabilities to have errors.

Examples: React, jQuery

## What is Framework?

Framework provides a basic foundation or structure for a website or an application.

Examples: Angular

## Similarities between Library and Framework

Frameworks and libraries are code written by third parties to solve regular/common problems or to optimise performance.

## Difference between Library and Framework

A key difference between the two is Inversion of control. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.
