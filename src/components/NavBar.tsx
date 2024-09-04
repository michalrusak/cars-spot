import { useState } from "react";
import logo from "/src/assets/images/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <div className="flex justify-center items-center h-8">
            <img className="w-full h-full" src={logo} alt="logo" />
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="#images" className="hover:text-gray-300">
            Galeria zdjęć
          </a>
          <a href="#" className="hover:text-gray-300">
            FaQ
          </a>
        </div>

        <div>
          <button className="hidden md:flex bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded">
            Zadzwoń do nas
          </button>
        </div>

        <div className="md:hidden relative">
          <div
            className="absolute top-1/2 right-2.5 h-10 w-10 transform -translate-y-1/2 cursor-pointer z-50"
            onClick={toggleMenu}
          >
            <span
              className={`block absolute left-0 w-full h-2 bg-black transition-transform duration-200 ${
                isMenuOpen ? "top-3.5 transform rotate-45" : "top-0"
              }`}
            ></span>
            <span
              className={`block absolute left-0 w-full h-2 bg-black transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"
              }`}
            ></span>
            <span
              className={`block absolute left-0 w-full h-2 bg-black transition-transform duration-200 ${
                isMenuOpen ? "bottom-1/2 transform -rotate-45" : "bottom-0"
              }`}
            ></span>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col justify-between items-center gap-y-3">
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">
              Galeria zdjęć
            </a>
            <a href="#" className="hover:text-gray-300">
              FaQ
            </a>
          </div>

          <div>
            <button className=" bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Zadzwoń do nas
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
