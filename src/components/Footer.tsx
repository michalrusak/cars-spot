const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-center sm:justify-between items-center flex-wrap bg-zinc-900 min-h-[8vh] text-white px-32 py-4 border-t overflow-hidden">
      <a href="#" className="hover:text-gray-300 font-bold m-2 text-center">
        Cars Spot
      </a>
      <a
        href="#"
        className="hover:text-gray-300 underline underline-offset-4 m-2 text-center"
      >
        Polityka prywatności
      </a>
    </footer>
  );
};

export default Footer;
