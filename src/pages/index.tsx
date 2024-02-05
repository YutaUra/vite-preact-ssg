import { Link, RouteComponentProps } from "wouter";
import { Counter } from "../components/Counter";

const Page = (_: RouteComponentProps<{}>) => {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/about">Go to About Page</Link>

      <Counter />
    </div>
  );
};

export default Page;
