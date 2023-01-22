type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-[1600px] mx-auto px-5 sm:px-8">{children}</div>;
};

export default Container;
