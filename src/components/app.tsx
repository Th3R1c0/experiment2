import EarthScene from "./EarthScene";

export default function App() {
  return (
    <>
      {/* <!-- hero section --> */}
      <div className="flex bg-black py-96  w-full items-center justify-center h-full  relative">
        <img
          src="/hero-bg.jpg"
          className="w-full  top-10 object-fill   blur-lg absolute brightness-[.2]"
        />{" "}
        {/*video playing in the background*/}
        <div className="flex z-10 h-max w-full flex-col items-center justify-center space-y-10 text-center ">
          <h1 className="sm:text-6xl tracking-wide text-5xl font-bold">
            <span className=" text-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Service
            </span>
            <br />
            NZ Webdesign & Development
            <br />
            from brainlabs
          </h1>
          <div className="text-2xl">Complete affordable custom Websites</div>
          <div className="flex space-x-4">
            <button className="btn">Sign in</button>
            <button className="btn wide bg-white text-black hover:bg-white">
              Get started for free
            </button>
          </div>
        </div>
      </div>
      {/* <!-- macbook design --> */}

      <EarthScene />

      <div className="flex h-full w-full flex-col items-center justify-center space-y-10 p-10 text-center mt-20">
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

      {/* <div className="w-full h-full">
        <img
          src="/hero-bg.jpg"
          className="w-full h-full object-cover blur-lg"
        />
      </div> */}
      <div className="flex w-full h-full py-40 px-20 items-center justify-between space-x-20">
        {[1, 2, 3].map((i) => {
          return (
            <div
              key={i}
              className="flex flex-col  word-wrap space-y-10 text-2xl items-center justify-center text-center"
            >
              <div className="p-8 rounded-[100%] w-max bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>

              <h3 className="font-bold text-3xl">Custom Designs</h3>
              <p>
                Get a custom design done by a professional team to stand out
                from the competition.
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
