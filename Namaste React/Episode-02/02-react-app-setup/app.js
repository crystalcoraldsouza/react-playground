import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", xyz: "abc", key: "h1" },
      "Hello World from React!",
    ),
    React.createElement("h1", { key: "h1-2" }, "I am a h1 tag"),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
