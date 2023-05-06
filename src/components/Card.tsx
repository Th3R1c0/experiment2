import React, { useEffect, useState } from "react";

import {
  motion,
  useAnimate,
  useAnimationControls,
  Variants,
} from "framer-motion";

const Cards = () => {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate(scope.current, {
      width: "100%",
    });
  };
  const itemVariants: Variants = {
    open: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%)",
      transition: { duration: 0.4 },
    },
    closed: {
      opacity: 1,
    },
  };
  const cardvariant: Variants = {
    initial: {
      clipPath: "polygon(0% 0%, 48.25% 0%, 0% 100%, 0% 99%)",
      zIndex: 10,
    },
    open: {
      zIndex: 100,
    },
  };
  const [active, setActive] = useState(true);
  return (
    // container
    <div className="w-full h-screen text-white  bg-red-200 relative">
      {/* inner container */}
      <motion.div
        variants={cardvariant}
        animate={active ? "open" : "initial"}
        onClick={() => setActive(!active)}
        transition={{ duration: 0.2, type: "spring" }}
        initial="initial"
        className="group  p-[10rem] left-0 absolute w-full h-full flex items-start justify-start "
      >
        <div className="z-50 text-6xl font-bold">Amazon Cloud</div>
        <img
          src="/1.jpg"
          className="group-hover:brightness-[100%] transition-all absolute filter brightness-[40%] left-0 top-0 w-full h-full"
        />
      </motion.div>

      <div
        style={{
          clipPath: "polygon(100% 0%, 48.25% 0%, 0% 100%, 48.25% 100%)",
        }}
        className="group p-[10rem] left-0 absolute w-full h-full flex items-center justify-center"
      >
        <div className="z-50 text-6xl font-bold">Google Framer</div>
        <img
          src="/2.jpg"
          className="group-hover:brightness-[100%] absolute filter brightness-[40%] left-0 top-0 w-full h-full"
        />
      </div>

      <div
        style={{
          clipPath: " polygon(100% 0%, 100% 0%, 100% 100%, 48.25% 100%)",
        }}
        className="group p-[10rem] left-0 absolute w-full h-full flex items-end justify-end "
      >
        <div className="z-50 text-6xl  font-bold">CheryPicked</div>
        <img
          src="/3.jpg"
          className="group-hover:brightness-[100%] absolute filter brightness-[40%] left-0 top-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default Cards;

// {/* <div className="w-screen h-full relative flex-1 text-white flex items-center justify-center">
// {/* container */}

// <div className="absolute -rotate-[15deg] top-0 left-0 w-[300px] h-[500px] rounded-lg bg-gray-600 text-white flex items-center justify-center font-4xl">
//   card 1{" "}
// </div>
// <div className="absolute w-[300px] h-[500px] rounded-lg bg-gray-600 text-white flex items-center justify-center font-4xl">
//   card 2{" "}
// </div>
// <div className="absolute rotate-[15deg]  bottom-0  right-0 w-[300px] h-[500px] rounded-lg bg-gray-600 text-white flex items-center justify-center font-4xl">
//   card 3{" "}
// </div>
// </div> */}
