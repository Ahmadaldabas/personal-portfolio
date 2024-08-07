import React from "react";
import { motion } from "framer-motion";

const arrowMotion = {
  rest: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.2, type: "tween", ease: "easeOut" },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, type: "tween", ease: "easeIn" },
  },
};

const textMotion = {
  rest: {
    x: 0,
    transition: { duration: 0.2, type: "tween", ease: "easeOut" },
  },
  hover: {
    x: 10,
    transition: { duration: 0.2, type: "tween", ease: "easeIn" },
  },
};

function NavButton({
  name,
  href,
  props,
}: {
  name: React.ReactNode;
  href: string;
  props?: object;
}) {
  return (
    <motion.a
      href={href}
      className="flex items-center transition-all"
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...props}
    >
      <motion.div
        variants={arrowMotion}
        className="flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
      <motion.span variants={textMotion}>{name}</motion.span>
    </motion.a>
  );
}

export default NavButton;
