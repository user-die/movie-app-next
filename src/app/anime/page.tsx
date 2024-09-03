import FilmsList from "@/components/FilmsList";
import { fetch1, fetch2 } from "../../../fetchs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аниме",
  description:
    "Большая подборка аниме: популярные, сейчас в кино, последние, лучшие, ожидаемые",
};

const selectedFields =
  "&ageRating=%2118&selectFields=alternativeName&selectFields=id&selectFields=name&selectFields=poster&selectFields=year&selectFields=genres&selectFields=rating&selectFields=description";

export default async function page() {
  const latestFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&sortField=year&sortField=rating.imdb&sortType=-1&sortType=-1&type=anime" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const inCinemaData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&selectFields=&sortField=ticketsOnSale&sortType=-1&type=anime&ticketsOnSale=true" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const PopularFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&selectFields=&sortField=audience.count&sortType=-1&type=anime" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const BestFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&sortField=rating.imdb&sortField=rating.kp&sortType=-1&sortType=-1&type=anime" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const WaitingFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&sortField=year&sortType=-1&type=anime&status=filming&status=post-production&status=pre-production&status=announced" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const latestFilms = await latestFilmsData.json();
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

      <FilmsList filmList={latestFilms?.docs} title="Последние" id="latest" />
      <FilmsList filmList={WaitingFilms?.docs} title="Ожидаемые" id="waiting" />

      <FilmsList filmList={BestFilms?.docs} title="Лучшие" id="bests" />
    </main>
  );
}
