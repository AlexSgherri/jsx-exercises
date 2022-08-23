import React from "react";
import ReactDOM from "react-dom";

function sum (a, b){
    const result = <h2>{a + b}</h2>
    return result;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(sum(19, 31));