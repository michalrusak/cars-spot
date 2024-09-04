import { FC } from "react";

interface ImagesCarouselProps {
  images: string[];
}

const ImagesCarousel: FC<ImagesCarouselProps> = ({ images }) => {
  return (
    <>
      <div className="overflow-hidden w-full my-20">
        <div className="flex flex-row gap-32 w-[100%] mx-6 md:mx-32">
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
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="h-2.5 w-2.5 bg-blue-700 rounded-full"></div>
        <div className="h-2.5 w-2.5 bg-slate-300 rounded-full"></div>
        <div className="h-2.5 w-2.5 bg-slate-300 rounded-full"></div>
        <div className="h-2.5 w-2.5 bg-slate-300 rounded-full"></div>
        <div className="h-2.5 w-2.5 bg-slate-300 rounded-full"></div>
      </div>
    </>
  );
};

export default ImagesCarousel;
