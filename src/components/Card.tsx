import React, { useEffect } from "react";

import { motion, useAnimate, useAnimationControls } from "framer-motion";

const Cards = () => {
  const [scope, animate] = useAnimate();
  const [position, setPosition] = React.useState(100);
  const [progress, play] = React.useState(false);
  const controls = useAnimationControls();
  const handleAnimate = () => {
    setPosition(position + 100);
    console.log(position);
  };

  const handleDelayedAnimation = () => {
    play(true);
    setTimeout(() => {
      play(false);
    }, 1000);
  };

  return (
    // container
    <div className="w-[200%] overflow-hidden relative flex-1 text-white flex items-center justify-center">
      {/* inner countainer */}
      <motion.div
        ref={scope}
        animate={controls}
        className="w-[200%]  flex items-center justify-center absolute"
      >
        {Array(10)
          .fill(0)
          .map((i, index) => {
            return (
              <div
                key={index}
                onClick={handleAnimate}
                className={`absolute w-[300px] h-[500px] rounded-lg bg-blue-600 text-white flex items-center justify-center font-4xl`}
              >
                card 2{" "}
              </div>
            );
          })}
      </motion.div>
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
