import LatestList from "./LatestList";
import FeaturedPost from "./FeaturePost";
import { PostCard } from "@/src/shared/Card";

const CityNewsSection = () => {
  return (
    <section className="px-4 py-8 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-3">
          <LatestList />
        </div>

        {/* Center */}
        <div className="lg:col-span-6">
          <FeaturedPost />
        </div>

        {/* Right */}
        <div className="lg:col-span-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-4 last-of-type:mb-0">
              <PostCard
                key={i}
                link="#"
                author="John Doe"
                badgeTitle={i === 0 ? "opinion" : "Lifestyle"}
                badgeColor={i === 0 ? "bg-yellow-500" : "bg-pink-500"}
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
        </div>
      </div>
    </section>
  );
};

export default CityNewsSection;
