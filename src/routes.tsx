import loadable from "@loadable/component";
import { Switch, Route } from "wouter";

const Index = loadable(() => import("./pages/index"));
const About = loadable(() => import("./pages/about"));

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Index} />

      <Route path="/about" component={About} />
    </Switch>
  );
};
