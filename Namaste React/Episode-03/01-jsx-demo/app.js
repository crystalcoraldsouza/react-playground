import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!",
// );

// React Element

const TitleComponent = () => {
  return <h1 id="heading">Hello World from React!</h1>;
};

const jsxHeading = (
  <div>
    <h1 id="heading">Hello World from React!</h1>
    <TitleComponent />
  </div>
);
console.log(jsxHeading);

// React Functional Component

// const TitleComponent = () => {
//   return <h1 id="heading">Hello World from React!</h1>;
// };

// const HeadingComponent = () => {
//   return <h1 id="heading">Hello World from React!</h1>;
// };

// const HeadingComponent2 = () => <h1 id="heading">Hello World from React!</h1>;

// const HeadingComponent3 = () => (
//   <h1 id="heading" className="heading">
//     Hello World from React!
//   </h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
// root.render(<HeadingComponent />);
