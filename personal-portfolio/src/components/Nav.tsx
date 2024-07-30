import MaxWidthWrapper from "./MaxWidthWrapper";
import NavButton from "./NavButton";
import Image from "next/image";

const navElements = [
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#project" },
  { name: "Graduation", href: "graduation" },
];
function Nav() {
  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between items-center py-10 ">
        <a href="#main" className="flex justify-center items-center">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <p className="font-semibold hover:text-yellow-cta transition-all">
            ahmad.aldabas
          </p>
        </a>
        <ul className="flex gap-5">
          {navElements.map((el, i) => (
            <li key={i}>
              <NavButton href={el.href} name={el.name} />
            </li>
          ))}
        </ul>
      </nav>
    </MaxWidthWrapper>
  );
}

export default Nav;
