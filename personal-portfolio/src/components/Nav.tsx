"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavButton from "./NavButton";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const navElements = [
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#project" },
  { name: "Graduation", href: "graduation" },
];
function Nav() {
  return (
    <div className="bg-[#ecfcd5] pb-2 pt-4 text-lg md:px-12 xl:px-0">
      <MaxWidthWrapper>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-3xl border-2 border-stone-900 bg-white px-6 py-2 shadow-button"
        >
          <a href="#main" className="flex items-center justify-center gap-2">
            <Image src="/logo_2.png" alt="logo" width={50} height={50}></Image>
            <p className="text-xl font-bold transition-all">ahmad.aldabas</p>
          </a>
          <ul className="flex items-center gap-3">
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
                  <span> Contact Me</span>
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
        </motion.nav>
      </MaxWidthWrapper>
    </div>
  );
}

export default Nav;
