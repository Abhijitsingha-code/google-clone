import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ResultContextProvider } from "./context/ResultContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>
);
