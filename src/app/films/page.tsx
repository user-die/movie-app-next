import FilmsList from "@/components/FilmsList";
import { fetch1, fetch2 } from "../../../fetchs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фильмы",
  description:
    "Большая подборка фильмов: популярные, сейчас в кино, последние, , лучшие, ожидаемые, случайные",
};

const selectedFields =
  "&selectFields=alternativeName&selectFields=id&selectFields=name&selectFields=poster&selectFields=year&selectFields=genres&selectFields=rating&selectFields=description";

export default async function page() {
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString("En", { month: "long" });

  function randomInteger(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const latestFilmsData = await fetch(
    fetch2.baseUrl +
      `v2.2/films/premieres?year=${year}&month=${month.toUpperCase()}&page=1&isSeries=false`,
    { headers: fetch2.headers }
  );

  const inCinemaData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&sortField=year&sortField=rating.kp&sortType=-1&sortType=-1&ticketsOnSale=true" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const PopularFilmsData = await fetch(
    fetch2.baseUrl +
      "v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1" +
      selectedFields,
    { headers: fetch2.headers }
  );

  const BestFilmsData = await fetch(
    fetch2.baseUrl +
      "/v2.2/films/collections?type=TOP_250_MOVIES&page=1" +
      selectedFields,
    { headers: fetch2.headers }
  );

  const WaitingFilmsData = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=20&sortField=votes.await&sortType=-1&lists=planned-to-watch-films&isSeries=false" +
      selectedFields,
    { headers: fetch1.headers }
  );

  const latestFilms = await latestFilmsData.json();
  const inCinemaFilms = await inCinemaData.json();
  const PopularFilms = await PopularFilmsData.json();
  const BestFilms = await BestFilmsData.json();
  const WaitingFilms = await WaitingFilmsData.json();

  // const { data: randomFilms } = useGetFilmListQuery(`movie?page=${randomPage}&limit=20&isSeries=${isSeries}`);

  return (
    <main className="container mx-auto px-3 xl:px-40">
      <FilmsList
        filmList={PopularFilms?.items}
        title="Популярные"
        id="popular"
      />

      <FilmsList
        filmList={inCinemaFilms?.docs}
        title="Сейчас в кино"
        id="inCinema"
      />

      <FilmsList filmList={latestFilms?.items} title="Последние" id="latest" />
      <FilmsList filmList={WaitingFilms?.docs} title="Ожидаемые" id="waiting" />

      <FilmsList filmList={BestFilms?.items} title="Лучшие" id="bests" />

      {/*<FilmsList filmList={randomFilms} title="Случайные" />*/}
    </main>
  );
}

/*
      <nav className="fixed left-0 mr-20 top-11 flex flex-col gap-1 text-text font-bold text-xl p-3 rounded-2xl list-none">
        <li>
          <a href="#popular">Популярные</a>
        </li>
        <li>
          <a href="#inCinema">Сейчас в кино</a>
        </li>
        <li>
          {" "}
          <a href="#latest">Последние</a>
        </li>
        <li>
          <a href="#waiting">Ожидаемые</a>
        </li>
        <li>
          <a href="#bests">Лучшие</a>
        </li>
      </nav>
      */
