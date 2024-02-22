import "./index.css";
import { hydrate } from "preact";
import { Router } from "wouter-preact";
import { App } from "./App";

hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")!
);
