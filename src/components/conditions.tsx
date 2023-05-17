export default function Conditions() {
  return (
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
              Get a custom design done by a professional team to stand out from
              the competition.
            </p>
          </div>
        );
      })}
    </div>
  );
}
