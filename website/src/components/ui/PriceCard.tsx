import { generateEmailContent } from "@/components/ui/Email";

const TakeAppointmentButton = ({ title }: { title: string }) => {
  return (
    <a
      href={generateEmailContent(title)}
      className="bg-sky-600 text-white py-2 px-4 rounded-md text-center hover:bg-sky-700 transition-colors mb-4"
    >
      Prendre RDV
    </a>
  );
};

interface PriceCardProps {
  title: string;
  price: number;
  action?: number;
  length: string;
  description: string;
  features: string[];
}

export const PriceCard = ({
  title,
  price,
  action,
  length,
  description,
  features,
}: PriceCardProps) => {
  return (
    <div className="bg-white/80 border border-gray-300 rounded-lg shadow p-6 min-w-80 max-w-96 flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center min-h-16">{title}</h2>
      <Price price={price} action={action} />
      <p className="text-gray-600 mb-4 ">{description}</p>
      <p className="text-gray-800 mb-4">{length}</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="grow"></div>
      <TakeAppointmentButton title={title} />
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
