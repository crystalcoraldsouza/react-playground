const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!",
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading); // object with type, props and key. Props has id and xyz as attributes.
