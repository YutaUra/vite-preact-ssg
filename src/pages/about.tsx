import { Link, RouteComponentProps } from "wouter";
import { Counter } from "../components/Counter";

const Page = (_: RouteComponentProps<{}>) => {
  return (
    <div>
      <h1>About Page</h1>

      <Link to="/">Go to Home Page</Link>

      <Counter />
    </div>
  );
};

export default Page;
