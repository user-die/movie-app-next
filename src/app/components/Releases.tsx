import FilmsTable from "./FilmsTable";
import { fetch2 } from "../../../fetchs";

type Film = {
  kinopoiskId?: number;
  nameRu?: string;
  year?: number;
  posterUrlPreview?: string;
  premiereRu?: string;
  id?: number;
  name?: string;
  poster?: string;
  premiere?: string;
};

export default async function Releases() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("En", { month: "long" }).toUpperCase();
  const today = date.getDate();

  const data = await fetch(
    fetch2.baseUrl + `v2.2/films/premieres?year=${year}&month=${month}`,
    {
      headers: fetch2.headers,
    }
  );

  const films = await data.json();

  const lastReleases = films.items
    .filter((el: Film) => Number(el?.premiereRu?.slice(-2)) < today)
    .map(
      (element: Film) =>
        (element = {
          id: element.kinopoiskId,
          name: element.nameRu,
          year: element.year,
          poster: element.posterUrlPreview,
          premiere: element.premiereRu,
        })
    );

  const comingSoon = films.items
    .filter((el: Film) => Number(el?.premiereRu?.slice(-2)) >= today)
    .map(
      (element: Film) =>
        (element = {
          id: element.kinopoiskId,
          name: element.nameRu,
          year: element.year,
          poster: element.posterUrlPreview,
          premiere: element.premiereRu,
        })
    );

  return (
    <article className="cv text-danger">
      <FilmsTable films={lastReleases} title="Новинки месяца" />

      <FilmsTable films={comingSoon} title="Скоро выйдут" />
    </article>
  );
}
