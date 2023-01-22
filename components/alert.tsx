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
              href="#"
              className="underline transition-colors duration-200 hover:text-blue-600"
            >
              here
            </Link>
            .
          </div>
        </Container>
      </div>
    );
  }

  return null;
};

export default Alert;
