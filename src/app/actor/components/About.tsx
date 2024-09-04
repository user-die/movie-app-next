import type { Actor } from "@/types";
import altImage from "@/app/assets/alt.png";
import Image from "next/image";

const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const pluralAge = (age: number) => {
  const lastNumber = Number(age.toString().at(-1));

  switch (true) {
    case lastNumber == 1:
      return age + " год";
    case lastNumber > 1 && lastNumber <= 4:
      return age + " года";
    default:
      return age + " лет";
  }
};

export default async function About({ actor }: { actor: Actor }) {
  return (
    <section className="col-start-1 md:col-start-4 row-start-2 md:row-start-2 flex flex-col items-center gap-3">
      <Image
        src={actor?.photo || altImage}
        alt="Портрет актёра"
        className="rounded-2xl row-span-3 justify-self-center"
        width={260}
        height={390}
      />

      <section className="grid grid-cols-2 flex-col p-3 gap-1 bg-transparent rounded-2xl w-full">
        {actor?.birthday && (
          <>
            <p className="text-text">Дата рождения</p>
            <p className="text-white">
              {new Date(actor?.birthday).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </>
        )}

        {actor?.birthday && (
          <>
            <p className="text-text">Возраст</p>
            <p className="text-white">
              {pluralAge(calculateAge(new Date(actor?.birthday)))}
            </p>
          </>
        )}

        {actor?.growth && (
          <>
            <p className="text-text">Рост</p>
            <p className="text-white">{actor?.growth} см</p>
          </>
        )}

        {actor?.birthday && (
          <>
            <p className="text-text">Место рождения</p>
            <span className="text-white">
              {actor?.birthPlace?.map((el) => el.value).join(", ")}
            </span>
          </>
        )}

        {actor?.movies?.filter((el) => el?.enProfession == "actor").length && (
          <>
            <p className="text-text">Всего фильмов</p>
            <p className="text-white">
              {
                actor?.movies?.filter((el) => el?.enProfession == "actor")
                  .length
              }
            </p>
          </>
        )}

        {actor?.countAwards && (
          <>
            <p className="text-text">Количество наград</p>
            <p className="text-white">{actor?.countAwards}</p>
          </>
        )}
      </section>
    </section>
  );
}
