import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// =========================================
import App1 from "./components/app/App1";

// =========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App1></App1>
    </React.StrictMode>
);
