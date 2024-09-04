//import WishlistButton from "../../../components/WishlistButton";
import kp from "../../assets/kp.png";
import imdb from "../../assets/imdb.png";
import Image from "next/image";

type Film = {
  top250: number;
  year: number;
  budget: {
    value: number;
    currency: string;
  };
  countries: { name: string }[];
  premiere: { russia: Date; world: Date };
  genres: { name: string }[];
  movieLength: number;
  ageRating: number;
  poster: string;
  id: number;
  name: string;
  alternativeName: string;
  shortDescription: string;

  fees: {
    russia: { value: number; currency: string };
    usa: { value: number; currency: string };
    world: { value: number; currency: string };
  };

  rating: { kp: number; imdb: number };

  director: string;
};

const About = ({ film }: { film: Film }) => {
  const getTimeFromMins = function (mins: number) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + " ч " + minutes + " мин ";
  };

  /*
      80
      120
      240px
      390px
      */

  return (
    <section className="col-start-4 col-end-5 grid grid-cols-2 flex-col p-3 gap-1 bg-transparent rounded-2xl">
      <h3 className="col-span-2 text-blue text-2xl font-bold">О фильме</h3>

      {film?.top250 && (
        <p className="text-xl col-span-2 text-gold font-bold">
          {film?.top250} МЕСТО В ТОП 250
        </p>
      )}

      {film?.year && (
        <>
          <p className="text-text">Год</p>
          <p className="text-white">{film?.year}</p>
        </>
      )}

      {film?.budget?.value > 0 && (
        <>
          {" "}
          <p className="text-text">Бюджет</p>
          <p className="text-white">
            {film?.budget?.value?.toLocaleString("ru")}
            {film?.budget?.currency}
          </p>
        </>
      )}

      {film?.countries?.length > 0 && (
        <>
          <p className="text-text">Страна</p>
          <p className="text-white">
            <span>{film?.countries?.map((el) => el.name).join(", ")}</span>
          </p>
        </>
      )}

      {film?.premiere?.russia && (
        <>
          <p className="text-text">Премьера в России</p>
          <p className="text-white">
            {new Date(film?.premiere?.russia).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </>
      )}

      {film?.genres?.length > 0 && (
        <>
          <p className="text-text">Жанры</p>
          <p className="text-white">
            <span>{film?.genres?.map((el) => el.name).join(", ")}</span>
          </p>
        </>
      )}

      {film?.premiere?.world && (
        <>
          <p className="text-text">Премьера в мире</p>
          <p className="text-white">
            {new Date(film?.premiere?.world).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </>
      )}

      {film.movieLength && (
        <>
          <p className="text-text">Время</p>
          <p className="text-white">{getTimeFromMins(film.movieLength)}</p>
        </>
      )}

      {film?.ageRating && (
        <>
          {" "}
          <p className="text-text">Возраст</p>
          <p className="text-white">{film.ageRating}+</p>
        </>
      )}

      {film.director && (
        <>
          <p className="text-text">Режиссер</p>
          <p className="text-white">{film.director}</p>
        </>
      )}

      {film?.fees?.world?.value > 0 && (
        <p className="flex flex-col text-text">
          Сборы:
          {film.fees.world?.value && <span className="mx-3">в мире</span>}
          {film.fees.russia?.value && <span className="mx-3">в России</span>}
          {film?.fees?.usa?.value && <span className="mx-3">в США</span>}
        </p>
      )}

      {film?.fees?.world?.value > 0 && (
        <p className="flex flex-col text-white">
          <br />
          <span>
            {film?.fees?.world?.value?.toLocaleString("ru")}
            {film?.fees?.world?.currency}
          </span>

          <span>
            {film?.fees?.russia?.value?.toLocaleString("ru")}
            {film?.fees?.russia?.currency}
          </span>

          <span>
            {film?.fees?.usa?.value?.toLocaleString("ru")}
            {film?.fees?.usa?.currency}
          </span>
        </p>
      )}

      {film?.rating?.imdb > 0 && (
        <div className="flex gap-2 items-center mt-3">
          <Image src={imdb} width={40} height={40} alt="IMDb" />
          <p className="text-2xl text-center text-warning fs-4">
            {film?.rating?.imdb.toFixed(1)}
          </p>
        </div>
      )}

      {film?.rating?.kp > 0 && (
        <div className="flex gap-2 items-center mt-3">
          <Image src={kp} width={40} height={40} alt="IMDb" />
          <p className="text-2xl text-center text-warning fs-4">
            {film?.rating?.kp.toFixed(1)}
          </p>
        </div>
      )}
    </section>
  );
};

export default About;
