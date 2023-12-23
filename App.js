import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX (transpiled before it reaches the JS - PARCEL - BABEL)

// JSX = React.createElement => ReactElement - JS Object = HtmlElement (render)
const elem = <span>React Element</span>;
const heading = <h1 id="heading">Namaste React using JSX.</h1>;

// React Component
const body = (
  <h1 className="body">
    {elem}
    This is body
  </h1>
);

// Functional Based Component - NEW
const Title = () => <h1 className="head">Namaste React By Sahitya</h1>;

// Component Composition
const HeadingComponent = () => {
  return (
    <>
      <div className="container">
        {body}
        <h1 className="heading">Namaste React Function Component</h1>
        <Title />
      </div>
    </>
  );
};

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
