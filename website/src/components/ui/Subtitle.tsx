interface SubtitleProps {
  children: React.ReactNode;
  withMT?: boolean;
}

export const H2 = ({ children, withMT }: SubtitleProps) => {
  return (
    <h3
      className={`text-3xl font-medium text-gray-700 ${withMT ? "mt-10" : ""}`}
    >
      {children}
    </h3>
  );
};

export const H3 = ({ children, withMT }: SubtitleProps) => {
  return (
    <h3
      className={`text-2xl font-medium text-gray-700 ${withMT ? "mt-10" : ""}`}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, withMT }: SubtitleProps) => {
  return (
    <h4
      className={`text-xl font-medium text-gray-700 ${withMT ? "mt-10" : ""}`}
    >
      {children}
    </h4>
  );
};
