import profileImage from "@/assets/profile.jpg";
import { H3 } from "./ui/Subtitle";

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
