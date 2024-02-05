import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import { App } from "./App";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
