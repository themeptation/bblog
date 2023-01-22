import { BLOG_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <>
      <h1 className="max-w-screen-xl mb-16 text-3xl font-normal tracking-tight sm:text-7xl sm:leading-tight">
        <b> This is {BLOG_NAME}.</b> A blog that covers productivity, tips,
        inspiration, and strategies for massive profits.
      </h1>
    </>
  );
};

export default Intro;
