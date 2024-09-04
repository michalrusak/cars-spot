import ImagesCarousel from "./ImagesCarousel";
import img1 from "/src/assets/images/img1.jpg";
import img2 from "/src/assets/images/img2.jpg";
import img3 from "/src/assets/images/img3.jpg";

const Gallery = () => {
  const images = [img1, img2, img3];
  return (
    <section className="min-h-[50vh] py-20 overflow-hidden">
      <div className="px-32">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-4xl text-blue-700 text-center md:text-left">
          Prezentacja firmy
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-center md:text-left">
          Zobacz naszą galerię zdjęć
        </h2>
        <div className="flex flex-center md:justify-start items-center flex-col md:flex-row mt-10">
          <button className="text-xl text-blue-700 py-2 md:mr-8 mb-4 px-1 border-b-2 border-current font-medium">
            Samochody osobowe
          </button>
          <button className="text-xl py-2 md:pr-8 mb-4 px-1 rounded font-medium">
            Samochody dostawcze
          </button>
        </div>
      </div>
      <ImagesCarousel images={images} />
    </section>
  );
};

export default Gallery;
