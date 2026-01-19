import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";

interface IPostCardProps {
  link: string;
  desc?: string;
  title: string;
  date?: string;
  imgUrl: string;
  author?: string;
  className?: string;
  badgeTitle?: string;
  badgeColor?: string;
  badgeClassName?: string;
  badgeBottomCenter?: boolean;
}

export const PostCard = ({
  link,
  desc,
  title,
  date,
  imgUrl,
  author,
  className = "",
  badgeTitle,
  badgeClassName = "bg-gray-500",
}: IPostCardProps) => {
  return (
    <Link href={link ?? "#"} className="block">
      <div className="bg-white shadow-md overflow-hidden">
        {/* Image + Badge */}
        <div className="relative w-full h-52">
          <Image
            src={imgUrl ?? "/assets/images/image-4.jpg"}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />

          {badgeTitle && (
            <span
              className={`text-[10px] text-white font-semibold uppercase py-1 px-2 flex justify-center items-center ${badgeClassName ?? "absolute top-4 left-4"}
              `}
            >
              {badgeTitle}
            </span>
          )}
        </div>

        {/* Content */}
        <div className={`p-4 flex flex-col ${className}`}>
          <h4 className="mt-2 text-[20px] font-semibold leading-7">{title}</h4>

          {(author || date) && (
            <div
              className={`flex flex-col ${
                className.includes("text-center")
                  ? "items-center"
                  : "items-start"
              } gap-1 mt-2 text-xs text-gray-400`}
            >
              {author && (
                <span className="font-semibold uppercase text-gray-800">
                  by {author}
                </span>
              )}

              {date && (
                <span className="flex items-center gap-1">
                  <CiClock2 /> {date}
                </span>
              )}
            </div>
          )}

          {desc && (
            <p className="mt-4 text-sm leading-6 text-gray-600">{desc}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export const ImageInlineCard = ({
  imgUrl,
  title,
  className,
  imgWidth,
  imgHeight,
}: {
  title: string;
  imgUrl: string;
  className?: string;
  imgWidth?: number;
  imgHeight?: number;
}) => {
  return (
    <div className="flex gap-2">
      <Image
        src={imgUrl}
        alt="latest-image"
        width={imgWidth ?? 96}
        height={imgHeight ?? 64}
        style={{
          width: imgWidth ?? 96,
          height: imgHeight ?? 64,
        }}
        className="object-cover"
      />

      <p className={`text-sm font-semibold leading-snug ${className}`}>
        {title}
      </p>
    </div>
  );
};
