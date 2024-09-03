"use client";
import { useEffect, useMemo, useState } from "react";
import { Grid3x3GapFill, List } from "react-bootstrap-icons";
import { fetch2 } from "../../../fetchs";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "@nextui-org/pagination";

type Film = {
  filmId: number;
  nameRu: string;
};

function MainSearch() {
  const [search, setSearch] = useState<string>(""),
    [page, setPage] = useState<number>(1),
    [result, setResult] = useState<Film[]>([]);

  useEffect(() => {
    fetch(
      fetch2.baseUrl +
        `/v2.1/films/search-by-keyword?keyword=${search}&page=${page}`,
      { headers: fetch2.headers }
    )
      .catch((e) => console.log(e))
      .then((data: any) => data.json())
      .then((result) => setResult(result?.films));
  }, [search, page]);

  return (
    <section className="bg-bg2 mt-4 rounded-2xl">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex  p-3 rounded-xl w-full mx-auto gap-4 justify-center"
      >
        <input
          type="text"
          name="search-by-name"
          id="search-name"
          className="search rounded-xl p-3 pl-10 pr-2 bg-bg3 w-72"
          value={search}
          placeholder="Поиск по названию..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {result?.length > 0 && (
        <>
          <ul className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-1 grid-flow-row auto-rows-max">
            {result?.map((film) => (
              <li
                key={film?.filmId}
                className="w-70 bg-gray-800 p-2 rounded-xl"
              >
                <Link
                  href={"movie/" + film?.filmId}
                  className="flex gap-2 bg-bg3 p-2 rounded-2xl"
                >
                  <Image
                    src={`https://st.kp.yandex.net/images/film_iphone/iphone90_${film?.filmId}.jpg`}
                    alt="Постер фильма"
                    className="rounded-xl h-auto w-auto"
                    width={70}
                    height={100}
                  />

                  <div className="flex flex-col justify-between">
                    <p className="text-xl text-white text-clip">
                      {film?.nameRu}
                    </p>
                  </div>

                  {/*<WishlistButton type="wishlist" id={film?.id} />*/}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-2 pb-2">
            <Pagination
              disableCursorAnimation
              showControls
              total={10}
              initialPage={1}
              className="gap-2"
              radius="full"
              variant="light"
              onChange={setPage}
              size="lg"
              color="secondary"
            />
          </div>
        </>
      )}
    </section>
  );
}

export default MainSearch;
