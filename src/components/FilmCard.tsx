"use client";
import Image from "next/image";
import Link from "next/link.js";
//import WishlistButton from "./WishlistButton.tsx";
import kp from "@/app/assets/kp.png";
import imdb from "@/app/assets/imdb.png";
import altImage from "@/app/assets/alt.png";

type FilmProps = {
  id?: number;
  kinopoiskId?: number;
  posterUrlPreview: string;
  poster: { previewUrl: string };
  name?: string;
  nameRu?: string;
  nameEn?: string;
  alternativeName?: string;
  year?: number;
  ratingImdb?: number;
  ratingKp?: number;
  rating?: { imdb: number; kp: number };
  description?: string;
  genres: { name?: string; genre?: string }[];
};

export default function FilmCard({
  listType,
  film,
}: {
  listType: boolean;
  film: FilmProps;
}) {
  return (
    <li>
      <Link href={"/movie/" + (film?.id || film?.kinopoiskId)}>
        <article
          className={`bg-bg2 rounded-2xl h-full p-2 ${
            listType ? "flex-row" : "flex-col"
          }`}
        >
          <div
            className={`flex h-full items-center ${
              listType ? "" : "flex-col "
            }`}
          >
            <Image
              src={
                film?.posterUrlPreview || film?.poster?.previewUrl || altImage
              }
              width={listType ? 80 : 130}
              height={200}
              alt="Постер фильма"
              className="rounded-2xl w-auto h-auto"
            />

            <div
              className={`text-text gap-1 grid ${
                listType
                  ? "h-100 p-2 grid-rows-[40px, 40px] grid-cols-[400px,_auto,_100px] items-center gap-1 gap-x-6"
                  : "mt-2 grid-rows-[auto,_auto,_auto] h-full justify-items-center"
              }`}
            >
              <h3 className="text-2xl font-bold text-center row-start-1 row-end-2 text-ellipsis overflow-hidden h-full w-full">
                {film?.name ||
                  film?.nameRu ||
                  film?.nameEn ||
                  film?.alternativeName}
              </h3>

              <p className="text-center col-start-1 col-end-2">
                {film?.year}
                {film?.genres?.map((elem) => (
                  <span key={`${elem?.name || elem?.genre || elem}`}>
                    {", " + (elem?.name || elem?.genre || elem)}
                  </span>
                ))}
              </p>

              {listType && (
                <p className="text-ellipsis overflow-hidden h-24 row-start-1 row-end-3 col-span-1 ">
                  {film?.description}
                </p>
              )}

              <div
                className={`flex gap-3 ${
                  listType
                    ? "row-start-1 row-end-3 col-start-3"
                    : "row-start-3 items-end"
                }`}
              >
                {film?.ratingImdb ||
                  (film?.rating?.imdb && (
                    <section>
                      <Image
                        src={imdb}
                        alt="иконка imdb"
                        width={30}
                        height={30}
                        className="w-8 h-8"
                      />
                      <p className="text-center">
                        {(film?.ratingImdb || film?.rating?.imdb)?.toFixed(1)}
                      </p>
                    </section>
                  ))}

                {film?.ratingKp ||
                  (film?.rating?.kp && (
                    <section className="">
                      <Image
                        src={kp}
                        className="w-8 h-8"
                        alt="иконка imdb"
                        width={30}
                        height={30}
                      />
                      <p className="text-center">
                        {(film?.ratingKp || film?.rating?.kp)?.toFixed(1)}
                      </p>
                    </section>
                  ))}

                {/*<WishlistButton type="favoritesFilms" id={item.id} />*/}

                {/*<WishlistButton type="wishlist" id={item.id} />*/}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}
