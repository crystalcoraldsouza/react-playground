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
