import About from "../components/About";
import { fetch1 } from "../../../../fetchs";
import Content from "../components/Content";
import type { Actor } from "@/types";

type Role = {
  enProfession?: string;
  rating: number;
  id: number;
  year: number;
};

export default async function Actor(params: { params: { id: string } }) {
  const data = await fetch(fetch1.baseUrl + `/person/${params.params.id}`, {
    headers: fetch1.headers,
  });

  const actor = await data.json();

  const movies = await actor?.movies
    ?.filter((el: Role) => el?.enProfession === "actor")
    ?.sort((a: Role, b: Role) => b?.rating - a?.rating)
    ?.reduce((acc: number[], el: Role) => (acc = [...acc, el.id]), []);

  const awardsData = await fetch(
    fetch1.baseUrl +
      `/person/awards?page=1&limit=250&personId=${params.params.id}`,
    {
      headers: fetch1.headers,
    }
  );

  const awards = await awardsData.json();

  const moviesFetch = await fetch(
    fetch1.baseUrl +
      `/movie?page=1&limit=250&id=${movies.join("&id=")}` +
      "&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=poster&selectFields=year",
    {
      headers: fetch1.headers,
    }
  );

  const moviesData = await moviesFetch.json();

  return (
    <>
      <title>{actor?.name}</title>
      <meta
        name="description"
        content={`${actor?.name}. Информация об актёре / актрисе: рост, дата рождения, место рождения, всего фильмов. участие в фильмах и сериалах, награды, интересные факты`}
      />

      <main className="container mx-auto xl:px-40 py-4 px-2 grid gap-y-3 md:gap-3 grid-cols-1 md:grid-cols-4 grid-rows-auto">
        <section className="col-span-1 md:col-span-4 row-start-1 grid items-center grid-cols-1 md:grid-cols-4 gap-3">
          <h1 className="font-bold text-red text-4xl col-span-3 text-center md:text-start">
            {actor?.name || actor?.alternativeName}
          </h1>

          {/*<WishlistButton
            type="favoritesActors"
            id={actor?.id}
            text="Любимая звезда"
          />*/}
        </section>

        <About actor={actor} />

        <Content
          facts={actor?.facts}
          awards={awards?.docs}
          films={moviesData?.docs}
        />

        <section className="flex flex-col gap-3 col-span-3"></section>
      </main>
    </>
  );
}
