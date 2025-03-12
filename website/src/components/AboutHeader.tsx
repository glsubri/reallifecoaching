import profileImage from "@/assets/profile.jpg";
import { H3 } from "./ui/Subtitle";
import Card from "./ui/Card";

const DotSeparator = () => <span className="text-gray-300">•</span>;

export const AboutHeader = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-10">
      <img
        src={profileImage.src}
        alt="Photo de profile"
        className="size-48 rounded-full mb-4 object-cover"
      />
      <div className="flex flex-col gap-4">
        <H3>À propos de moi</H3>
        <div className="flex flex-row items-center justify-center gap-4 text-gray-600 text-lg">
          Guy-Laurent Subri
          <DotSeparator />
          31 ans
          <DotSeparator />
          Ingénieur en Informatique
        </div>
      </div>
    </div>
  );
};

export const SmallAboutHeader = () => {
  return (
    <div className="bg-white/80 shadow p-2 border border-gray-300 rounded-lg mb-4 max-w-md ">
      <div className="w-full flex flex-row items-center justify-between md:justify-start gap-0 md:gap-8">
        <img
          src={profileImage.src}
          alt="Photo de profile"
          className="size-32 border border-gray-400/80 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex flex-col items-end md:items-start justify-center gap-2 text-gray-600 text-lg">
          <div>Guy-Laurent Subri</div>
          <div>31 ans</div>
          <div>Ingénieur en Informatique</div>
        </div>
      </div>
    </div>
  );
};
