interface RelaxedPProps {
  className?: string;
  children: React.ReactNode;
}

const defaultSizeClasses = "text-lg";
const smallSizeClasses = "text-sm";
const sharedClasses = "text-gray-600 leading-relaxed";

export const RelaxedP = ({ children, className }: RelaxedPProps) => {
  return (
    <p className={`${defaultSizeClasses} ${sharedClasses} ${className || ""}`}>
      {children}
    </p>
  );
};

export const SmallRelaxedP = ({ children, className }: RelaxedPProps) => {
  return (
    <p className={`${smallSizeClasses} ${sharedClasses} ${className || ""}`}>
      {children}
    </p>
  );
};
