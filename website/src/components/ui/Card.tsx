interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={`bg-sky-200 p-6 rounded-lg ${className}`}>{children}</div>
  );
};

export default Card;
