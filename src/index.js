import React from "react";
import ReactDOM from "react-dom/client";

function FirstComponent() {
  return <h1>My First Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirstComponent />);
