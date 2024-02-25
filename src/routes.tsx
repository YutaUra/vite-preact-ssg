import { Component, ComponentType, Suspense, lazy } from "preact/compat";
import { Route, Switch } from "wouter-preact";

type SuspenseProps = Suspense extends Component<infer P> ? P : never;

const withSuspense =
  <P extends object>(
    WrappedComponent: ComponentType<P>,
    fallback: SuspenseProps["fallback"] = null,
  ) =>
  (props: P) => (
    <Suspense fallback={fallback}>
      <WrappedComponent {...props} />
    </Suspense>
  );

const Index = withSuspense(lazy(() => import("./pages/index")));
const About = withSuspense(lazy(() => import("./pages/about")));

export const Routes = () => (
  <Switch>
    <Route path="/" component={Index} />

    <Route path="/about" component={About} />
  </Switch>
);
