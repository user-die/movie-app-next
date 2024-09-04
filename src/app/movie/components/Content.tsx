"use client";
import { useEffect, useRef, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Staff from "./Staff";
import Awards from "./Awards";
import Facts from "./Facts";
import OtherFilms from "./OtherFilms";
import { Award, Fact, Film } from "@/types";
import { useSwipeable } from "react-swipeable";

function Content({
  film,
  awards,
  facts,
}: {
  film: Film;
  awards: Award[];
  facts: Fact[];
}) {
  const [selected, setSelected] = useState<any>("description");

  const tabs = [
    "description",
    (film?.sequelsAndPrequels?.length || film?.similarMovies?.length) &&
      "similar",
    awards?.length && "awards",
    facts?.length && "facts",
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSelected((prev: string) => {
        const i = tabs.indexOf(prev);
        return tabs.at(i + 1);
      }),
    onSwipedRight: () =>
      setSelected((prev: string) => {
        const i = tabs.indexOf(prev);
        return tabs.at(i - 1);
      }),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      className="col-span-1 md:col-span-3 row-start-3 md:row-start-2 flex flex-col"
      {...handlers}
    >
      <Tabs
        aria-label="Options"
        color="secondary"
        classNames={{
          tabList:
            "bg-bg2 border-none flex-col md:flex-row  rounded-2xl md:rounded-3xl",
          tab: "font-bold text-lg",
        }}
        variant="bordered"
        selectedKey={selected}
        onSelectionChange={setSelected}
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

        {(film?.sequelsAndPrequels?.length || film?.similarMovies?.length) && (
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
