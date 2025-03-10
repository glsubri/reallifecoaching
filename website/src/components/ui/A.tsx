export const A = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a href={href} className="underline text-sky-600">
      {children}
    </a>
  );
};
