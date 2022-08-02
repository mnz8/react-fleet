import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "../config/routes";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container!);

const App: React.FC = () => {
  let element = useRoutes(routes);
  return element;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
