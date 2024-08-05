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
    <div className="bg-[#ecfcd5] pt-4 pb-2">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center px-6 py-2 border-2 shadow-button bg-white border-stone-900  rounded-full ">
          <a
            href="#main"
            className="flex justify-center items-center"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
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
    </div>
  );
}

export default Nav;
