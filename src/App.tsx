import { Routes } from "./routes";
import { Router, RouterOptions } from "wouter-preact";

export interface AppProps {
  routerProps?: RouterOptions;
}

export const App = ({ routerProps }: AppProps) => (
  <Router {...routerProps}>
    <Routes />
  </Router>
);
