const DotSeparator = () => <span className="text-gray-300">•</span>;

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const hrefWithPrefix = import.meta.env.BASE_URL + href;

  return (
    <a href={hrefWithPrefix} className="text-gray-600 hover:text-gray-900">
      {children}
    </a>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-300 bg-sky-100/50 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex gap-4 items-center">
            <FooterLink href="/" children="Accueil" />
            <DotSeparator />
            <FooterLink href="/faq" children="FAQ" />
            <DotSeparator />
            <FooterLink href="/about" children="À propos" />
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:gls.reallifecoaching@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              gls.reallifecoaching@gmail.com
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8">
          {currentYear} Real Life Coaching
        </div>
      </div>
    </footer>
  );
};
