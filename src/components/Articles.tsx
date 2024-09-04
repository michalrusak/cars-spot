const Articles = () => {
  return (
    <section className="flex flex-row justify-center items-center flex-wrap gap-20 bg-zinc-900 min-h-[50vh] text-white">
      <article className="min-w-96 w-[40vw]">
        <h3 className="text-xl font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sequi?
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          dolore ea, commodi itaque sequi aperiam velit totam maxime perferendis
          quod. [...]
        </p>
        <button className="text-xl py-2 px-1 border-b-2 border-current font-medium">
          Rozwiń
          <span className="pl-3">&#8595;</span>
        </button>
      </article>

      <article className="min-w-96 w-[40vw]">
        <h3 className="text-xl font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sequi?
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          dolore ea, commodi itaque sequi aperiam velit totam maxime perferendis
          quod. [...]
        </p>
        <button className="text-xl py-2 px-1 border-b-2 border-current font-medium">
          Rozwiń
          <span className="pl-3">&#8595;</span>
        </button>
      </article>
    </section>
  );
};

export default Articles;
