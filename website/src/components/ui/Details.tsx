interface DetailsProps {
  title: string;
  children?: React.ReactNode;
}

export const Details = ({ title, children }: DetailsProps) => {
  return (
    <details className="group bg-white/50 border border-gray-300 rounded-md p-4">
      <summary className="text-xl font-medium text-gray-700 cursor-pointer [&::-webkit-details-marker]:hidden [&::-webkit-details-marker]:me-0">
        <div className="flex items-center gap-2">
          <svg
            className="size-4 flex-shrink-0 transition-transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>{title}</span>
        </div>
      </summary>
      <div className="p-4">{children}</div>
    </details>
  );
};
