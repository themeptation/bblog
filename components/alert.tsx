import Container from "./container";
import cn from "classnames";
import Link from "next/link";

type Props = {
  show?: boolean;
};

const Alert = ({ show }: Props) => {
  if (show) {
    return (
      <div
        className={cn(
          "border-b bg-black border-neutral-800 text-white dark:bg-gray-900"
        )}
      >
        <Container>
          <div className="py-4 text-center">
            The Bbloog Premium version with all features{" "}
            <Link
              href="https://themeptation.gumroad.com/l/bbloog?option=a9kQcLJ6ts_CBJlbTJGKow%3D%3D&_gl=1*1pzzdjy*_ga*OTg5MTQzMjAyLjE2NzQzOTgxODg.*_ga_6LJN6D94N6*MTY3NDQwMjYxNC4xMjYuMS4xNjc0NDAyNzMwLjAuMC4w"
              target="_blank"
              className="ml-2 btn btn-xs"
            >
              Here
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return null;
};

export default Alert;
