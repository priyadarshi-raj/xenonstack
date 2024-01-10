import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./context/auth.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </NextUIProvider>
);
