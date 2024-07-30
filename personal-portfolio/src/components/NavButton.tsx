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
    <a
      className="hover:text-sky-blue transition-all"
      href={href}
      {...props}
    >
      {name}
    </a>
  );
}

export default NavButton;
