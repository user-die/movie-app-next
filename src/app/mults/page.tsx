import FilmsList from "@/components/FilmsList";
import { fetch1, fetch2 } from "../../../fetchs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мультфильмы",
  description:
    "Большая подборка мультфильмов: популярные, сейчас в кино, ожидаемые, лучшие",
};

const selectedFields =
  "&ageRating=%2118&selectFields=alternativeName&selectFields=id&selectFields=name&selectFields=poster&selectFields=year&selectFields=genres&selectFields=rating&selectFields=description";

export default async function page() {
  const inCinemaData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&selectFields=&sortField=ticketsOnSale&sortType=-1&type=cartoon&type=animated-series&ticketsOnSale=true" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const PopularFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&selectFields=&sortField=audience.count&sortType=-1&type=cartoon&type=animated-series" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const BestFilmsData = await fetch(
    fetch2.baseUrl + "v2.2/films/collections?type=KIDS_ANIMATION_THEME&page=1",

    { headers: fetch2.headers }
  );

  const WaitingFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&sortField=year&sortType=-1&type=cartoon&type=animated-series&status=filming&status=post-production&status=pre-production&status=announced" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const inCinemaFilms = await inCinemaData.json();
  const PopularFilms = await PopularFilmsData.json();
  const BestFilms = await BestFilmsData.json();
  const WaitingFilms = await WaitingFilmsData.json();

  return (
    <main className="container mx-auto px-3 xl:px-40">
      <FilmsList
        filmList={PopularFilms?.docs}
        title="Популярные"
        id="popular"
      />

      <FilmsList
        filmList={inCinemaFilms?.docs}
        title="Сейчас в кино"
        id="inCinema"
      />

      <FilmsList filmList={BestFilms?.items} title="Лучшие" id="bests" />

      <FilmsList filmList={WaitingFilms?.docs} title="Ожидаемые" id="waiting" />
    </main>
  );
}
