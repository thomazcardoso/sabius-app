import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.tsx";
import { GlobalStyle } from "./styles/globaStyles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
