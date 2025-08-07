import { MovieProps } from "@/interfaces";
import Image from "next/image";

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  const fallbackImage = "/fallback.jpg"; // Place this in /public directory
  const imageSrc = posterImage || fallbackImage;

  return (
    <div className="h-[563px]">
      <div>
        <Image
          className="h-[430px] w-full rounded-md hover:cursor-pointer object-cover"
          src={imageSrc}
          width={300}
          height={430}
          alt={title}
          unoptimized // Avoids Next.js optimization timeouts
        />
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
