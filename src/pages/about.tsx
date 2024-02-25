import { css } from "@styled-system/css";
import { button } from "@styled-system/recipes";
import { Link, RouteComponentProps } from "wouter-preact";
import { Counter } from "../components/Counter";

const Page = (_: RouteComponentProps) => {
  return (
    <div>
      <h1
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
        })}
      >
        About Page
      </h1>

      <Link
        to="/"
        className={button({
          size: "medium",
          priority: "tertiary",
        })}
      >
        Go to Home Page
      </Link>

      <Counter />
    </div>
  );
};

export default Page;
