import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AppWrapper from "./app-wrapper/app-wrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppWrapper>
      <App />
    </AppWrapper>
  </BrowserRouter>
);
