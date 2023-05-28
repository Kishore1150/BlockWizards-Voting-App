import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { VotingProvider } from "./utils/VotingContext";
import { ContextProvider } from "./context/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <VotingProvider>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </VotingProvider>
);
