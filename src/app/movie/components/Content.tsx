"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Staff from "./Staff";
import Awards from "./Awards";
import Facts from "./Facts";
import OtherFilms from "./OtherFilms";
import { Award, Fact, Film } from "@/types";

function Content({
  film,
  awards,
  facts,
}: {
  film: Film;
  awards: Award[];
  facts: Fact[];
}) {
  return (
    <section className="col-span-1 md:col-span-3 row-start-3 md:row-start-2 flex flex-col">
      <Tabs
        aria-label="Options"
        color="secondary"
        classNames={{
          tabList:
            "bg-bg2 border-none flex-col md:flex-row  rounded-2xl md:rounded-3xl",
          tab: "font-bold text-lg",
        }}
        variant="bordered"
      >
        <Tab key="description" title="Описание">
          <article className="bg-transparent p-3 rounded-2xl">
            {film?.description && (
              <section className="col-span-3 row-start-3" id="description">
                <h2 className="text-blue text-2xl font-bold mb-4">Описание</h2>
                <p className="text-xl text-text">{film?.description}</p>
              </section>
            )}

            <Staff
              staff={film?.persons?.filter(
                (el: any) => el.profession === "актеры"
              )}
              text="Актёры"
            />
          </article>
        </Tab>

        {film?.sequelsAndPrequels?.length && film?.similarMovies?.length && (
          <Tab key="similar" title="Другие части">
            <article className="bg-transparent p-3 rounded-2xl">
              {film?.sequelsAndPrequels && (
                <OtherFilms
                  films={film?.sequelsAndPrequels}
                  text="Другие части"
                />
              )}

              {film?.similarMovies && (
                <OtherFilms films={film?.similarMovies} text="Похожие фильмы" />
              )}
            </article>
          </Tab>
        )}

        {awards?.length > 0 && (
          <Tab key="awards" title="Награды">
            <article className="bg-transparent p-3 rounded-2xl">
              <Awards awards={awards} />
            </article>
          </Tab>
        )}

        {facts?.length > 0 && (
          <Tab key="facts" title="Факты">
            <article className="bg-transparent p-3 rounded-2xl">
              <Facts facts={facts} />
            </article>
          </Tab>
        )}
      </Tabs>

      {/*
      <section className="col-span-3 row-start-2 bg-bg2 p-6 rounded-2xl">
            {
          <Cadrs id={params.id} />
         }
            
          </section>
      */}
    </section>
  );
}

export default Content;
