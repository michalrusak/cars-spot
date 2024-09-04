import { useState } from "react";

const Articles = () => {
  const [isShowFirstArcticle, setIsShowFirstArcticle] = useState(false);
  const [isShowSecondArcticle, setIsShowSecondArcticle] = useState(false);

  const handleSetShowFirstArticle = () => {
    setIsShowFirstArcticle(!isShowFirstArcticle);
  };
  const handleSetShowSecondArticle = () => {
    setIsShowSecondArcticle(!isShowSecondArcticle);
  };

  return (
    <section className="flex flex-row justify-center flex-wrap gap-10 bg-zinc-900 min-h-[30vh] py-32 text-white overflow-hidden">
      <article className="min-w-80 w-[40vw] m-10">
        <h3 className="text-xl font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sequi?
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          dolore ea, commodi itaque sequi aperiam velit totam maxime perferendis
          quod.
          {!isShowFirstArcticle && <span>[...]</span>}
        </p>
        {isShowFirstArcticle && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptates dignissimos neque a impedit obcaecati culpa asperiores
            eos repellendus nam, saepe quas sequi praesentium? Consectetur
            accusamus aut omnis minus? Harum doloribus vel recusandae esse
            architecto, tempora adipisci quidem quibusdam quis?
          </p>
        )}
        <button
          className="text-xl py-2 px-1 border-b-2 border-current font-medium"
          onClick={handleSetShowFirstArticle}
        >
          {isShowFirstArcticle ? "Zwiń" : "Rozwiń"}
          {isShowFirstArcticle ? (
            <span className="pl-3">&#8593;</span>
          ) : (
            <span className="pl-3">&#8595;</span>
          )}
        </button>
      </article>

      <article className="min-w-80 w-[40vw] m-10">
        <h3 className="text-xl font-bold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sequi?
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          dolore ea, commodi itaque sequi aperiam velit totam maxime perferendis
          quod.
          {!isShowSecondArcticle && <span>[...]</span>}
        </p>
        {isShowSecondArcticle && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptates dignissimos neque a impedit obcaecati culpa asperiores
            eos repellendus nam, saepe quas sequi praesentium? Consectetur
            accusamus aut omnis minus? Harum doloribus vel recusandae esse
            architecto, tempora adipisci quidem quibusdam quis?
          </p>
        )}
        <button
          className="text-xl py-2 px-1 border-b-2 border-current font-medium"
          onClick={handleSetShowSecondArticle}
        >
          {isShowSecondArcticle ? "Zwiń" : "Rozwiń"}

          {isShowSecondArcticle ? (
            <span className="pl-3">&#8593;</span>
          ) : (
            <span className="pl-3">&#8595;</span>
          )}
        </button>
      </article>
    </section>
  );
};

export default Articles;
