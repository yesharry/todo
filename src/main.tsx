import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
