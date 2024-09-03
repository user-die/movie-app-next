import React from "react";
import { fetch1 } from "../../../fetchs";
import FilmTable from "./FilmTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Топ 250",
  description: "Топ 250 лучших фильмов по версии Кинопоиск и imdb.",
};

export default async function Top250() {
  const data = await fetch(
    fetch1.baseUrl +
      "/movie?page=1&limit=250&lists=top250&sortField=rating.kp&sortType=-1&selectFields=id&selectFields=name&selectFields=poster&selectFields=year&selectFields=genres&selectFields=rating&selectFields=description",
    { headers: fetch1.headers, next: { revalidate: 86400 } }
  );

  const films = await data.json();

  return (
    <main>
      <FilmTable
        films={films?.docs?.map(
          (film: any) =>
            (film = {
              rating: film?.rating,
              id: film.id,
              name: film?.name,
              description: film?.description,
              year: film?.year,
              poster: film?.poster,
              genres: film?.genres?.map((g: any) => g?.name),
            })
        )}
      />
    </main>
  );
}
