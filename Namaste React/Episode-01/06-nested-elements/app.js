/*
<div id="parent">
  <div id="child">
    <h1 id="heading" xyz="abc">Hello World from React!</h1>
    <h1>I am a h1 tag</h1>
  </div>
</div>
*/

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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent); // object with type, props and key. Props has id as attribute and children as array of objects.
