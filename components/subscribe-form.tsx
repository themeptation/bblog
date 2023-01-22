import React, { ChangeEvent, FormEvent, useState } from "react";

const SubscribeForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonLoading(true);
    setMsg("Processing your application");
    setButtonLoading(false);
  };

  return (
    <div className=" lg:min-w-[450px] max-w-[500px]">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-wrap bg-transparent sm:flex-nowrap gap-y-4 gap-x-2 sm:gap-x-0 sm:bg-gray-100 sm:dark:bg-white/10 sm:rounded-full"
      >
        <label className="sr-only" htmlFor="email">
          email
        </label>
        <input
          className="w-full flex-basis-[300px] h-16 border-none flex-grow rounded-full sm:bg-transparent px-6 bg-gray-100 dark:bg-white/10 sm:dark:bg-transparent outline-none"
          name="email"
          placeholder="Your email address"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          type="email"
          value={emailInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmailInput(e.target.value)
          }
          required
        />
        <button
          className="relative flex-grow btn sm:flex-grow-0"
          type="submit"
          disabled={buttonLoading}
        >
          {buttonLoading ? (
            <svg
              className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="1"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
          <span>Subscribe</span>
        </button>
      </form>
      {msg ? (
        <div className="inline-flex px-3 py-1 mt-3 text-xs text-black bg-gray-200 rounded-full">
          {msg}
        </div>
      ) : null}
    </div>
  );
};

export default SubscribeForm;
