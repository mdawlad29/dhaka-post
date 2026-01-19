import { PostCard } from "@/src/shared/Card";

export const SidebarCard = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="mb-8 last:mb-0">
          <PostCard
            link="#"
            author="John Doe"
            date="Mon, 12 May 2023"
            badgeTitle={i === 0 ? "Opinion" : "Lifestyle"}
            badgeClassName={
              i === 0
                ? "bg-yellow-500 absolute top-4 left-4"
                : "bg-pink-500 absolute top-4 left-4"
            }
            imgUrl={
              i === 0
                ? "/assets/images/image-4.jpg"
                : "/assets/images/image-3.jpg"
            }
            title="Democratic Party politician calls Prabowo ‘cardboard general’"
            desc="Even the all-powerful Pointing has no control about the blind texts."
          />
        </div>
      ))}
    </>
  );
};
