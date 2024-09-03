import { fetch1, fetch2 } from "../../../../fetchs";
import About from "../components/About";
import Watch from "../components/Watch";
import WishlistButton from "@/components/WishlistButton";
import Image from "next/image";
import Content from "../components/Content";

export default async function Movie(params: { params: { id: string } }) {
  const data = await fetch(fetch1.baseUrl + `/movie/${params.params.id}`, {
    headers: fetch1.headers,
    cache: "force-cache",
    next: { revalidate: false },
  });

  const film = await data.json();

  const FactsData = await fetch(
    fetch2.baseUrl + `v2.2/films/${params.params.id}/facts`,
    {
      headers: fetch2.headers,
      cache: "force-cache",
      next: { revalidate: false },
    }
  );

  const facts = await FactsData.json();

  const AwardsData = await fetch(
    fetch2.baseUrl + `v2.2/films/${params.params.id}/awards`,
    {
      headers: fetch2.headers,
      cache: "force-cache",
      next: { revalidate: false },
    }
  );

  const awards = await AwardsData.json();

  // 30 40 60 70 80 330 660 700 900

  return (
    <>
      <title>{film?.name || film?.alternativeName}</title>
      <meta
        name="description"
        content={`${
          film?.name || film?.alternativeName
        }. Информация о фильме: актёры, режиссёр, продюссеры, стаф, кадры, бюджет, хронометраж, сиквелы и приквелы, похожие фильмы, где посмотреть, интересные факты, ошибки и ляпы`}
      />

      <main
        style={
          film?.backdrop?.url && {
            background: `linear-gradient(rgba(22, 24, 28, 0.8) 0%, rgba(22, 24,28, 0.8)),  url(${film?.backdrop?.url?.replace(
              "orig",
              "x660"
            )})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "50% 50%",
          }
        }
        className="bg"
      >
        <article className="container mx-auto xl:px-40 py-4 px-2 grid gap-3 grid-cols-1 md:grid-cols-4 grid-rows-auto">
          <section className="col-span-1 row-start-1 md:col-span-4 grid items-center grid-cols-1 md:grid-cols-4 gap-3">
            <div className="col-span-1 md:col-span-3">
              <h1 className="font-bold text-red text-4xl col-start-1 col-end-4 row-start-1 row-end-2">
                {film?.name + " "}
                <span className="text-text text-3xl">
                  ({film?.alternativeName})
                </span>{" "}
              </h1>

              <p className="text-2xl row-start-2 col-start-1 md:col-end-4 text-text">
                {film?.shortDescription}
              </p>
            </div>

            <div className="flex justify-center gap-3 row-start-2 md:row-start-1 md:col-start-4 md:col-end-5">
              {
                <WishlistButton
                  type="wishlist"
                  id={film.id}
                  text="В закладки"
                />
              }

              {
                <WishlistButton
                  type="favoritesFilms"
                  id={film.id}
                  text="В избранное"
                />
              }
            </div>
          </section>

          <section className="col-start-1 col-span-1 row-start-2 md:col-start-4 gap-3 flex flex-col">
            <Image
              alt="Постер фильма"
              src={film?.poster?.previewUrl?.replace("orig", "x390")}
              width={260}
              height={390}
              className="rounded-2xl row-start-2 row-end-5 justify-self-center self-center"
            />

            <About
              film={{
                poster: film?.poster?.url,
                id: film.id,
                name: film?.name,
                alternativeName: film?.alternativeName,
                shortDescription: film?.shortDescription,
                year: film?.year,
                countries: film?.countries,
                genres: film?.genres,
                budget: film?.budget,
                movieLength: film?.movieLength,
                fees: film?.fees,
                ageRating: film?.ageRating,
                premiere: film?.premiere,
                rating: film?.rating,
                top250: film?.top250,
                director: film?.persons?.find(
                  (el: any) => el.profession === "режиссеры"
                ).name,
              }}
            />

            {film?.watchability?.items.length > 0 && (
              <Watch watch={film.watchability?.items} />
            )}
          </section>

          <Content film={film} awards={awards?.items} facts={facts?.items} />
        </article>
      </main>
    </>
  );
}
