export default function Pricing() {
  return (
    <div className="flex h-full  w-full flex-col items-center justify-center space-y-10 p-10 text-center mt-20">
      <h1 className="text-4xl font-bold">Price Estimates - monthly</h1>
      <div className="flex h-full w-full flex-col space-y-10 lg:w-max lg:flex-row lg:space-x-10 lg:space-y-0 ">
        {["small buisness", "Custom web", "enterprise"].map((i) => {
          return (
            <div className="flex w-full flex-col space-y-10 rounded-md bg-gray-800 p-10 ">
              <h2 className="text-4xl font-bold">{i}</h2>
              <hr className="mx-auto h-[1px] w-full rounded border-0 bg-gray-400 dark:bg-gray-700" />
              <ul className="max-w-md list-inside space-y-8 text-2xl">
                <li className="flex items-center">
                  <svg
                    className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  100 million datasets
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  100+ tokens
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  unlimited generation
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Discord server
                </li>
              </ul>
              <hr className="mx-auto h-[1px] w-full rounded border-0 bg-gray-400 dark:bg-gray-700" />
              <button className="btn btn-wide bg-white text-black">
                Enquire
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
