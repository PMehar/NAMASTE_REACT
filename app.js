import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child_1"},[
        React.createElement("h1",{},"This is Namaste React🚀"),
        React.createElement("h2",{},"This is h2 tag from child 1"),
    ]),
    React.createElement("div",{id:"child_2"},[
        React.createElement("h1",{},"i am igniting my app"),
        React.createElement("h2",{},"This is h2 tag from child 2"),
    ]),
]);
const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(parent);