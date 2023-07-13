import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// =========================================
import App1 from "./components/app/App1";
// import App2 from "components/app/App2";
// =========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App1></App1>
        {/* <App2></App2> */}
    </React.StrictMode>
);
