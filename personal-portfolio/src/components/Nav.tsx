"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavButton from "./NavButton";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";
import Hamburger from "hamburger-react";

const navElements = [
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#project" },
  { name: "Graduation", href: "#graduation" },
];

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const buttonVariants = {
  open: { rotate: 45, y: 5 },
  closed: { rotate: 0, y: 0 },
};

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#ecfcd5] px-8 pb-2 pt-4 text-lg md:px-12 xl:px-0">
      <MaxWidthWrapper>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-between rounded-3xl border-2 border-stone-900 bg-white px-6 py-2 shadow-button"
        >
          <a href="#main" className="flex items-center justify-center gap-2">
            <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
            <p className="text-base font-bold transition-all md:text-xl">
              ahmad.aldabas
            </p>
          </a>
          {/* {"Desktop menu"} */}
          <ul className="hidden items-center gap-1 text-base md:flex lg:gap-3 lg:text-lg">
            {navElements.map((el, i) => (
              <li key={i} className="group relative">
                <NavButton href={el.href} name={el.name} />
              </li>
            ))}
            <li>
              <Button
                className="ml-2 px-6 hover:translate-x-0 hover:translate-y-0"
                onClick={() => alert("Coming Soon")}
              >
                <span className="flex items-center justify-between gap-1">
                  <span>Contact Me</span>
                  <svg
                    fill="#000000"
                    viewBox="0 0 200 200"
                    data-name="Layer 1"
                    className="w-6"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title></title>
                      <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"></path>
                    </g>
                  </svg>
                </span>
              </Button>
            </li>
          </ul>
          {/* Mobile menu button */}
          <div className="relative z-20 md:hidden">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
          {/* Mobile menu */}
          <motion.div
            initial="closed"
            className="absolute left-0 right-0 top-full z-10 flex items-start justify-center lg:hidden"
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
          >
            <ul className="mb-11 mt-11 flex w-[95%] flex-col rounded-xl border-2 border-stone-800 bg-white p-8 shadow-button">
              {navElements.map((el, i) => (
                <li key={i} className="mb-6">
                  <NavButton href={el.href} name={el.name} />
                </li>
              ))}
              <li>
                <Button
                  className="w-full"
                  onClick={() => {
                    alert("Coming Soon");
                    setIsMenuOpen(false);
                  }}
                >
                  Contact Me
                </Button>
              </li>
            </ul>
          </motion.div>
        </motion.nav>
      </MaxWidthWrapper>
    </div>
  );
}

export default Nav;
