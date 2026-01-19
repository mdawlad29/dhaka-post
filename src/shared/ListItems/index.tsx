import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export const ListItem = ({
  link,
  title,
  className,
}: {
  link?: string;
  title: string;
  className?: string;
}) => {
  return (
    <div className="border-b border-gray-200 last-of-type:border-0 flex gap-1 pb-3">
      <div>
        <IoMdArrowDropright className="text-black text-sm" />
      </div>

      <Link
        href={`${link ?? "#"}`}
        className={`inline-block leading-5 text-black text-sm -mt-1 ${className}`}
      >
        {title}
      </Link>
    </div>
  );
};
