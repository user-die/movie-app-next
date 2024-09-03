import FilmsList from "@/components/FilmsList";
import { fetch1, fetch2 } from "../../../fetchs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сериалы",
  description: "Большая подборка сериалов: популярные, последние, лучшие",
};

export default async function page() {
  const selectedFields =
    "&selectFields=alternativeName&selectFields=id&selectFields=name&selectFields=poster&selectFields=year&selectFields=genres&selectFields=rating&selectFields=description";

  const latestFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&sortField=year&sortField=rating.imdb&sortType=-1&sortType=-1&type=tv-series&status=!announced&status=!completed&status=!filming&status=!post-production&status=!pre-production" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const PopularFilmsData = await fetch(
    fetch2.baseUrl + "v2.2/films/collections?type=POPULAR_SERIES&page=1",
    { headers: fetch2.headers }
  );

  const BestFilmsData = await fetch(
    fetch2.baseUrl + "v2.2/films/collections?type=TOP_250_TV_SHOWS&page=1",
    { headers: fetch2.headers }
  );

  const latestFilms = await latestFilmsData.json();
  const PopularFilms = await PopularFilmsData.json();
  const BestFilms = await BestFilmsData.json();

  return (
    <main className="container mx-auto px-3 xl:px-40">
      <FilmsList
        filmList={PopularFilms?.items}
        title="Популярные"
        id="popular"
      />

      <FilmsList filmList={latestFilms?.docs} title="Последние" id="latest" />

      <FilmsList filmList={BestFilms?.items} title="Лучшие" id="bests" />
    </main>
  );
}
