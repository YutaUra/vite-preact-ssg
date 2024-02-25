import { Router, RouterOptions } from "wouter-preact";
import { Routes } from "./routes";

export interface AppProps {
  routerProps?: RouterOptions;
}

export const App = ({ routerProps }: AppProps) => (
  <Router {...routerProps}>
    <Routes />
  </Router>
);
