import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "Full Stack Developer",
            "New York Metropolitan Area", 
            "Tech Enthusiast"
        ],
          autoStart: true,
          loop: true,
          pause: 100,
          deleteSpeed: 50
      }}
    />
  );
}

export default Type;
