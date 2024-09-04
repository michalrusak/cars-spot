import backgroundImage from "/src/assets/images/main.png";

const MainSection = () => {
  return (
    <section className="relative min-h-[100vh] lg:min-h-[130vh] xl:min-h-[150vh] 3xl:min-h-[90vh] bg-no-repeat bg-right-bottom lg:bg-[url(/src/assets/images/main.png)] lg:bg-right-bottom overflow-hidden overflow-hidden">
      <div className="flex justify-center items-center flex-col w-full px-16 text-center md:block md:w-4/6 md:mx-32 my-32 md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-bold uppercase tracking-tighter mb-5">
          Sprzedajemy samochody z europy
        </h1>
        <h4 className="text-xl my-5">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </h4>

        <div className="flex justify-center flex-col md:flex-row md:justify-start items-center gap-4">
          <a
            href="#images"
            className="bg-blue-700 hover:bg-blue-500 hover:border-blue-500 border-solid border-2 border-blue-700 text-white py-2 px-4 rounded"
          >
            Zobacz zdjęcia
          </a>

          <button className="hover:bg-gray-100 border-solid border-2 border-blue-700 text-blue-700 py-2 px-4 rounded">
            Zadzwoń do nas
          </button>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center ml-2 my-2">
        <img className="w-full " src={backgroundImage} alt="logo" />
      </div>
    </section>
  );
};

export default MainSection;
