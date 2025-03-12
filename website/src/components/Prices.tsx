import { PriceCard } from "./ui/PriceCard";

export const Prices = () => (
  <div className="w-full flex flex-row gap-4 overflow-x-scroll pb-4 pr-4">
    <PriceCard
      title="Gestion du temps"
      price={500}
      action={375}
      length="Session de 2-4 heures"
      description="Prend le contrôle de ton calendrier et de toutes tes tâches en quelques heures."
      features={[
        "Coaching en personne 🙋‍♂️",
        "Théorie de gestion du temps 📆",
        "Mise en place de ton système de gestion du temps",
      ]}
    />
    <PriceCard
      title="Gestion du temps & prise de notes"
      price={700}
      action={525}
      length="Session de 3-5 heures"
      description="Prend le contrôle de ton calendrier et de toutes tes tâches en quelques heures. Adopte un système de prise de notes efficace."
      features={[
        "Coaching en personne 🙋‍♂️",
        "Théorie de gestion du temps 📆",
        "Mise en place de ton système de gestion du temps",
        "Théorie de la prise de notes efficace 📝",
        "Mise en place de ton système de prise de notes",
      ]}
    />
  </div>
);
