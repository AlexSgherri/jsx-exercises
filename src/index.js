import React from "react";
import ReactDOM from "react-dom";

function ChoseName (name){
    const nameTag = <h1>Hello, {name}</h1>
    return nameTag;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(ChoseName("Vittorio"));