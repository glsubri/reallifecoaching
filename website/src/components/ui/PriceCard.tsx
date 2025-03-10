interface PriceCardProps {
  title: string;
  price: number;
  action?: number;
  description: string;
  features: string[];
}

export const PriceCard = ({
  title,
  price,
  action,
  description,
  features,
}: PriceCardProps) => {
  return (
    <div className="bg-white/50 rounded-lg shadow-md p-6 min-w-80 max-w-96 flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center min-h-16">{title}</h2>
      <Price price={price} action={action} />
      <p className="text-gray-600 mb-4 ">{description}</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="grow"></div>
      <p className="text-gray-600 text-xs">
        *Les actions ne sont disponibles que pour les étudiants et jusqu'au 28
        avril 2025.
      </p>
    </div>
  );
};

interface PriceProps {
  price: number;
  action?: number;
}

const Price = ({ price, action }: PriceProps) => {
  if (action == null || action == undefined) {
    return <p className="text-4xl font-bold mb-4">{price} CHF</p>;
  } else {
    return (
      <div className="mb-4 flex flex-row items-center justify-center gap-2">
        <p className="text-2xl font-bold text-red-700/80 line-through decoration-2">
          {price} CHF
        </p>
        <p className="text-4xl font-bold">
          {action} CHF<span>*</span>
        </p>
      </div>
    );
  }
};
