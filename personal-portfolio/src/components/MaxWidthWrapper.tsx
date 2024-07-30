function MaxWidthWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  return <div className="max-w-main mx-auto">{children}</div>;
}

export default MaxWidthWrapper;
