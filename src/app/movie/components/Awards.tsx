import type { Award } from "@/types";

export default function Awards({ awards }: { awards: Award[] }) {
  return (
    <>
      {awards?.filter((el: Award) => el.win).length > 0 && (
        <section className="col-span-4">
          <h2 className="text-blue text-2xl font-bold">Награды</h2>

          <ul className="list-disc ml-4 mt-2 flex flex-col gap-2 text-text">
            {awards
              ?.filter((el: Award) => el.win)
              .map((award: Award) => (
                <li key={award?.nominationName + award?.name + award?.year}>
                  {award?.name}, {award?.year}, {award?.nominationName}
                  {(award?.persons[0]?.nameRu &&
                    " - " + award?.persons[0]?.nameRu) ||
                    award?.persons[0]?.nameEn}
                </li>
              ))}
          </ul>
        </section>
      )}

      {awards?.filter((el: Award) => !el.win).length > 0 && (
        <section id="nominations" className="col-span-4 my-4">
          <h2 className="text-blue text-2xl font-bold">Номинации</h2>

          <ul className={`list-disc ml-4 mt-2 flex flex-col gap-2 text-text`}>
            {awards
              ?.filter((el: Award) => !el.win)
              .map((award: Award) => (
                <li key={award?.nominationName + award?.name + award?.year}>
                  {award?.name}, {award?.year}, {award?.nominationName}
                  {(award?.persons[0]?.nameRu &&
                    " - " + award?.persons[0]?.nameRu) ||
                    award?.persons[0]?.nameEn}
                </li>
              ))}
          </ul>
        </section>
      )}
    </>
  );
}
