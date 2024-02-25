import { css } from "@styled-system/css";
import { button } from "@styled-system/recipes";
import { Link, RouteComponentProps } from "wouter-preact";
import { Counter } from "../components/Counter";

const Page = (_: RouteComponentProps) => {
  return (
    <div>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Home Page
      </h1>

      <Link
        to="/about"
        className={button({
          size: "medium",
          priority: "tertiary",
        })}
      >
        Go to About Page
      </Link>

      <Counter />
    </div>
  );
};

export default Page;
