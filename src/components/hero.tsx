export default function Hero() {
  return (
    <div className="flex overflow-hidden bg-black  w-full items-center justify-center h-full  relative">
      <img
        src="/hero-bg.jpg"
        className="w-full top-10 object-cover blur-lg absolute brightness-[.2] min-w-[100%] min-h-[100%]"
      />

      {/*video playing in the background*/}
      <div className="flex z-10 h-screen w-full flex-col items-center justify-center space-y-10 text-center ">
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
  );
}
