import React from "react";
import ReactDOM from "react-dom/client";

function Aaa() {
  return <div>111</div>;
}
eval(`function add(a, b) {
  return a + b;
}
console.log(add(1,2))
`);

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(React.createElement(Aaa));
