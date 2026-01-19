import { slideItems } from "@/dummy";
import { ImageInlineCard } from "@/src/shared/Card";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const FeaturedPostTopSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      goNext();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + slideItems.length) % slideItems.length,
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideItems.length);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white flex gap-2 px-3 items-center shadow-md overflow-hidden h-20 py-3">
      {/* Prev Arrow */}
      <button
        onClick={goPrev}
        className="border border-gray-300 px-1 h-full flex items-center justify-center hover:bg-gray-100 transition z-20"
      >
        <IoIosArrowBack />
      </button>

      {/* Cards Container */}
      <div className="flex-1 overflow-hidden relative cursor-grab">
        <div
          className="flex gap-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 110}px)`,
          }}
        >
          {slideItems.map((card, i) => (
            <div key={i} className="shrink-0 w-40">
              <ImageInlineCard
                imgWidth={60}
                imgHeight={46}
                title={card.title}
                imgUrl={card.image}
                className="font-medium! text-[12px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={goNext}
        className="border border-gray-300 px-1 h-full flex items-center justify-center hover:bg-gray-100 transition z-20"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};
