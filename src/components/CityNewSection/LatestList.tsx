import { LatestItems, OpinionItems } from "@/dummy";
import { ImageInlineCard } from "@/src/shared/Card";
import { CardHeader } from "@/src/shared/Card/CardHeader";
import { ListItem } from "@/src/shared/ListItems";
import Link from "next/link";

const LatestList = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 shadow-md">
        <CardHeader title="the latest" />

        {LatestItems?.map((item, idx) => (
          <Link
            key={idx}
            href={"#"}
            className="inline-block mb-4 last-of-type:mb-0"
          >
            <ImageInlineCard title={item?.title} imgUrl={item?.image} />
          </Link>
        ))}
      </div>

      {/*<---- Opinion ---->*/}
      <div className="bg-white p-4 shadow-md">
        <CardHeader title="opinion" />

        <div className="space-y-5">
          {OpinionItems?.map((opinion, idx) => (
            <ListItem key={idx} title={opinion?.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestList;
