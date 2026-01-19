import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";

interface IPostCardProps {
  link: string;
  desc?: string;
  title: string;
  imgUrl: string;
  author?: string;
  badgeTitle?: string;
  badgeColor?: string;
}

export const PostCard = ({
  desc,
  link,
  title,
  author,
  imgUrl,
  badgeTitle,
  badgeColor,
}: IPostCardProps) => {
  const date = new Date().toDateString();

  return (
    <Link href={`${link ?? "#"}`}>
      <div className="bg-white shadow-md">
        <div className="relative">
          <Image
            src={imgUrl ?? "/assets/images/image-4.jpg"}
            alt="sidebar"
            width={300}
            height={300}
            className="w-full h-52 object-cover"
          />
          <span
            className={`text-[10px] text-white font-semibold leading-2.5 absolute top-4 left-4 uppercase ${badgeColor} py-1 px-1`}
          >
            {badgeTitle}
          </span>
        </div>

        <div className="p-4">
          <h4 className="mt-2 text-[20px] font-semibold leading-7">{title}</h4>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-400 leading-5">by</span>
            <span className="text-xs font-semibold leading-5 uppercase">
              {author}
            </span>
            <span className="text-xs text-gray-400 leading-5 flex items-center gap-1">
              <CiClock2 />
              {date}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600">{desc}</p>
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

      <p
        className={`line-clamp-1 text-sm font-semibold leading-snug ${className}`}
      >
        {title}
      </p>
    </div>
  );
};
