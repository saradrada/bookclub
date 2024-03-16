import Image from "next/image";

export const CoverBook = ({ src }: { src: string }) => {
  return (
    <div className="relative h-4/5 w-3/5">
      <Image src={src} alt="book cover" objectFit="cover" fill/>
    </div>
  );
};
