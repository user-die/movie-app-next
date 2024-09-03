"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Facts from "./Facts";
import type { Film } from "@/types";
import type { Award } from "./Awards";
import Awards from "./Awards";

type Fact = {
  value: string;
};

import OtherFilms from "@/app/movie/components/OtherFilms";

function Content({
  films,
  awards,
  facts,
}: {
  films: Film[];
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
        <Tab key="Роли" title="Роли">
          <article className="bg-transparent p-3 rounded-2xl">
            <OtherFilms text="Участие в кино" films={films} />
          </article>
        </Tab>

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
