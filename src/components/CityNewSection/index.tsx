"use client";

import FeaterPost from "./FeaturePost";
import LatestList from "./LatestList";
import { SidebarCard } from "./SidebarCard";

const CityNewsSection = () => {
  return (
    <section className="px-4 py-8 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-12 min-h-screen">
        {/* Left Sidebar  */}
        <div className="lg:col-span-3 lg:sticky lg:top-40 self-start">
          <LatestList />
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6">
          <FeaterPost />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 lg:sticky lg:top-40 self-start">
          <SidebarCard />
        </div>
      </div>
    </section>
  );
};

export default CityNewsSection;
