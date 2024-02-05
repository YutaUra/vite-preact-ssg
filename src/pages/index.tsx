import { css } from "@styled-system/css";
import { Link, RouteComponentProps } from "wouter";
import { Counter } from "../components/Counter";

const Page = (_: RouteComponentProps<{}>) => {
  return (
    <div>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Home Page
      </h1>

      <Link to="/about">Go to About Page</Link>

      <Counter />
    </div>
  );
};

export default Page;
