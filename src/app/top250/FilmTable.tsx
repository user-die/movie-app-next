"use client";
import React, { useEffect, useMemo, useState } from "react";
import FilmCard from "@/components/FilmCard";
import { Grid3x3GapFill, List } from "react-bootstrap-icons";
import { useInView } from "react-intersection-observer";

type Film = {
  id?: number;
  kinopoiskId?: number;
  posterUrlPreview: string;
  poster: { previewUrl: string };
  name: string;
  nameRu?: string;
  nameEn?: string;
  alternativeName?: string;
  year?: number;
  ratingImdb?: number;
  ratingKp?: number;
  rating?: { imdb: number; kp: number };
  description?: string;
  genres: string[];
};

const FilmTable = ({ films }: { films: Film[] }) => {
  const [search, setSearch] = useState<string>(""),
    [genre, setGenre] = useState<string>(""),
    [listType, setListType] = useState<boolean>(false),
    [page, setPage] = useState<number>(1);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) setPage((prev) => prev + 1);
  }, [inView]);

  const genres = useMemo(() => {
    return [
      "Биография",
      "Боевик",
      "Вестерн",
      "Военный",
      "Детектив",
      "Детский",
      "Для взрослых",
      "Документальный",
      "Драма",
      "Игра",
      "История",
      "Комедия",
      "Концерт",
      "Короткометражка",
      "Криминал",
      "Мелодрама",
      "Музыка",
      "Мультфильм",
      "Мюзикл",
      "Новости",
      "Нуар",
      "Приключения",
      "Реальное ТВ",
      "Семейный",
      "Спорт",
      "Ток-шоу",
      "Триллер",
      "Ужасы",
      "Фантаскика",
      "Фэнтези",
      "Церемония",
    ];
  }, []);

  const searchedFilms = useMemo(
    () =>
      films.filter((film) =>
        film.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, films]
  );

  const FilteredFilmsByGenres = useMemo(
    () =>
      genre
        ? searchedFilms.filter((film) =>
            film.genres.includes(genre.toLowerCase())
          )
        : searchedFilms,
    [genre, searchedFilms]
  );

  return (
    <div className="container mx-auto xl:px-40 p-2">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex bg-bg2 p-3 rounded-xl w-full mx-auto gap-4 justify-center flex-col sm:flex-row"
      >
        <input
          type="text"
          name="search-by-name"
          id="search-name"
          className="search rounded-xl p-3 pl-10 pr-2 bg-bg3 border-blue border-2"
          value={search}
          placeholder="Поиск по названию..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <label htmlFor="select-genre" className="self-center hidden sm:block">
          Жанр
        </label>
        <select
          name="select-by-genre"
          id="select-genre"
          className="rounded-xl p-3 px-2 bg-bg3 border-blue border-2"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Не выбрано</option>

          {genres.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/*

             <label htmlFor="select-type" className="self-center">
          Тип
        </label>
        <select
          name="select-by-type"
          id="select-type"
          className="rounded-xl p-1 px-2 bg-bg3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="null">Не выбрано</option>

          {types.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
            */}

        <div className="hidden sm:block">
          <button
            className="bg-bg3 p-3 rounded-lg text-white"
            onClick={() => setListType((prev) => !prev)}
          >
            {listType ? <Grid3x3GapFill /> : <List className="text-white" />}
          </button>
        </div>
      </form>

      <ul
        className={`grid mt-3 gap-3   ${
          listType
            ? "grid-cols-1"
            : "grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row auto-rows-max"
        }`}
      >
        {FilteredFilmsByGenres.slice(0, page * 20).map((film: any) => (
          <FilmCard
            key={film?.id || film?.kinopoiskId}
            film={film}
            listType={listType}
          />
        ))}
      </ul>

      <div className="h-10" ref={ref}></div>
    </div>
  );
};

export default FilmTable;
