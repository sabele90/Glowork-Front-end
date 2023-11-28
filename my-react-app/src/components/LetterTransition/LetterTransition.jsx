import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

const letters = [
  "W",
  "H",
  "E",
  "R",
  "E",
  " ",
  "W",
  "O",
  "U",
  "L",
  "D",
  " ",
  "Y",
  "O",
  "U",
  " ",
  "L",
  "I",
  "K",
  "E",
  " ",
  "T",
  "O",
  " ",
  "G",
  "O",
  "?",
];

const LetterTransition = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`fly-in-text ${isVisible ? "" : "hidden"}`}>
      {letters.map((letter, index) => (
        <AnimatedLetter key={index} isVisible={isVisible} delay={index * 100}>
          {letter}
        </AnimatedLetter>
      ))}
    </div>
  );
};

const AnimatedLetter = ({ isVisible, delay, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-100px)",
    config: config.molasses,
    delay,
  });

  return (
    <animated.span
      style={{
        ...props,
        display: "inline-block",
        marginTop: "-1em",
        padding: "0 4px",
        marginRight: "0",
        letterSpacing: "0",
        fontWeight: 20,
        fontSize: "2rem",
        color: "#fff",
        transition: "all 100ms ease",
      }}
    >
      {children}
    </animated.span>
  );
};

export default LetterTransition;
