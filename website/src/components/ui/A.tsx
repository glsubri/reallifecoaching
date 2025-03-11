export const A = ({
  children,
  href,
  local = true,
}: {
  children: React.ReactNode;
  href: string;
  local: boolean;
}) => {
  const hrefWithPrefix = local ? import.meta.env.BASE_URL + href : href;
  return (
    <a href={hrefWithPrefix} className="underline text-sky-600">
      {children}
    </a>
  );
};
