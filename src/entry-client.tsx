import { hydrate } from "preact";
import { App } from "./App";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: index.html には #root があるので null になることはない
hydrate(<App />, document.getElementById("root")!);
