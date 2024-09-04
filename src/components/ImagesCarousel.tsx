import { FC, useEffect, useState } from "react";

interface ImagesCarouselProps {
  images: string[];
}

const ImagesCarousel: FC<ImagesCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(120);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setTranslateValue(40);
    } else if (window.innerWidth >= 500) {
      setTranslateValue(105);
    } else {
      setTranslateValue(125);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full my-20 overflow-hidden">
      <div
        className="flex flex-row gap-32 w-[100%] mx-6 md:mx-32"
        style={{
          transform: `translateX(-${currentIndex * translateValue}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-[90%] md:w-[35%] flex-shrink-0">
            <img
              src={image}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center items-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-700" : "bg-slate-300"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImagesCarousel;
