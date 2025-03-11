export const generateEmailContent = (title: string) => {
  const subject = `Intéressé par la séance : ${title}`;
  const body = `Bonjour,

Je suis intéressé(e) par une séance "${title}".

Je suis disponible les: ...

J'aimerai qu'on se recontre: chez moi / à ...

Merci d'avance !`;

  return `mailto:gls.reallifecoaching@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const CTA = () => {
  return (
    <div className="fixed bottom-8 left-0 right-0 w-full flex justify-center items-center z-50">
      <a
        href={generateEmailContent("Gestion du temps")}
        className="bg-sky-600 text-white text-lg font-bold py-4 px-8 rounded-full
                   shadow-lg hover:shadow-xl
                   transform hover:-translate-y-0.5
                   transition-all duration-200
                   flex items-center gap-2"
      >
        Prendre RDV
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};
