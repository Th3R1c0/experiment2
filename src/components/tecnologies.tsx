export default function Tecnologies() {
  return (
    <div className="">
      {/* tecnolgoies */}
      {[1, 2].map((i) => {
        return (
          <div
            key={i}
            className="sticky top-0  flex items-center justify-center  p-52"
          >
            <div className="flex h-max space-x-20 bg-white  rounded-lg p-10  ">
              <div className="w-1/3 ">
                <img
                  src="3.jpg"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <div className="flex flex-col space-y-10 bg-white text-black w-2/3 p-20">
                <div className="rounded-md bg-white border-gray-200 border-2  flex items-center p-2 w-max ">
                  - how we work
                </div>
                <h3 className="text-6xl font-bold">
                  Modern Industry Technologies
                </h3>
                <div className="flex text-black flex-col text-3xl">
                  {["modern frameworks", "industry giants", "CMS"].map(
                    (title, index) => {
                      return (
                        <div key={index} className="flex flex-col">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-6 w-6 mr-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                              />
                            </svg>
                            <h4 className="flex-grow">{title}</h4>
                          </div>

                          <p className="text-lg max-w-2xl">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                          </p>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
