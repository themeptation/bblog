import SubscribeForm from "./subscribe-form";

const Cta = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-5 sm:px-8 text-center lg:text-left lg:flex lg:gap-20  xl:gap-36 items-center mt-36">
      <div className="flex-grow mb-12 lg:mb-0">
        <h2 className="mb-4 text-3xl font-bold sm:text-6xl">
          Subscribe to new posts
        </h2>
      </div>
      <div>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Cta;
