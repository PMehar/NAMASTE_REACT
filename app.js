import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object =>HTML (render)

const header = React.createElement("div", { className: "title" }, [
  React.createElement(
    "h1",
    { key: "h1" },
    "Namaste React🚀 React.creteElement"
  ),
  React.createElement("h2", { key: "h2" }, "This is h2 tag"),
  React.createElement("h3", { key: "h3" }, "This is h3 tag"),
]);

//React Element
//jsx - (HTML/XML like structure) => Babel transpiles it to React.createElement =>JS object => HTML(render)

const jsxHeader = (
  <div className="title">
    <h1> Namaste React🚀 JSX </h1>
    <h2>This is h2 tag</h2>
    <h3>This is h3 tag</h3>
  </div>
);

// React Component - functional component
const Title =()=>{
    return <h1 className="head">Component Comosition(❁❁)</h1>
};

const HeaderComponent = () => (
  <div className="title">
    {header}<Title/>
    <h1>Namaste React 🚀 Functional Component</h1>
    <h2>This is h2 tag </h2>
    <h3>This is h3 tag</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
