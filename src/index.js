import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App.js";
import "./index.css";


ReactDOM.render(
    <SpeechProvider appId= "67578f7a-a24c-4418-a114-7cc875b4683b" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
);