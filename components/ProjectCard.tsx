import Image, { type StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  imgSrc?: string | StaticImageData;
};

export default function ProjectCard({ title, description, imgSrc }: Props) {
  return (
    <div className="border p-3 rounded-xl hover:shadow-lg transition">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        {imgSrc ? (
          <Image
            className="w-full h-auto rounded-lg"
            src={imgSrc}
            alt={title}
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : null}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
