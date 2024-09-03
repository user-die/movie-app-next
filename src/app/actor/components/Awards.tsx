import Link from "next/link";

export type Award = {
  createdAt: string;
  id: string;
  movie: { id: number; name: string; rating: number };
  nomination: {
    award: {
      title: string;
      year: number;
    };
    title: string;
  };
  personId: number;
  updatedAt: string;
  winning: boolean;
};

function Awards({ awards }: { awards: Award[] }) {
  const winnings = awards?.filter(
    (el, index, arr) =>
      el.winning === true &&
      index ===
        arr.findIndex(
          (t) =>
            t.nomination.title === el.nomination.title &&
            t.nomination.award.title === el.nomination.award.title &&
            t.nomination.award.year === el.nomination.award.year
        )
  );

  const nominations = awards?.filter(
    (el, index, arr) =>
      el.winning !== true &&
      index ===
        arr.findIndex(
          (t) =>
            t.nomination.title === el.nomination.title &&
            t.nomination.award.title === el.nomination.award.title &&
            t.nomination.award.year === el.nomination.award.year
        )
  );

  return (
    <>
      {winnings && (
        <section className="col-span-3">
          <h2 className="text-blue text-2xl font-bold">Награды</h2>

          <ul className="list-disc ml-4 mt-2 flex flex-col gap-2 text-text">
            {winnings?.map((award) => (
              <li key={award?.id}>
                {award?.nomination?.award?.title},
                {award?.nomination?.award?.year} -{award?.nomination?.title}
                {award?.movie?.name && (
                  <Link
                    href={"/movie/" + award?.movie?.id}
                    className="text-secondary text-decoration-none"
                  >
                    {", " + award?.movie?.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {nominations && (
        <section className="col-span-3 my-4">
          <h2 className="text-blue text-2xl font-bold">Номинации</h2>

          <ul className="list-disc ml-4 mt-2 flex flex-col gap-2 text-text">
            {nominations &&
              nominations?.map((award) => (
                <li key={award?.id}>
                  {award?.nomination?.award?.title},
                  {" " + award?.nomination?.award?.year} -
                  {award?.nomination?.title}
                  {award?.movie?.name && (
                    <Link
                      href={"/movie/" + award?.movie?.id}
                      className="text-secondary text-decoration-none"
                    >
                      {" " + award?.movie?.name}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default Awards;
