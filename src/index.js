import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import "./index.css";
// =========================================
import App1 from "./components/app/App1";
// import App2 from "components/app/App2";
// =========================================
const theme = {
    colors: {
        red: "red",
        blue: "blue",
    },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App1></App1>
            {/* <App2></App2> */}
        </ThemeProvider>
    </React.StrictMode>
);
