import FilmCard from "./FilmCard";

import type { Film } from "@/types";

const FilmsList = ({
  filmList,
  title,
  id,
}: {
  filmList: Film[];
  title: string;
  id: string;
}) => {
  return (
    <article className="mb-10" id={id}>
      <h2 className="text-3xl text-blue font-bold mb-2">{title}</h2>

      <ul className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-flow-row auto-rows-max gap-3">
        {filmList &&
          filmList.map((film: any) => (
            <FilmCard
              listType={false}
              key={film?.id || film?.kinopoiskId}
              film={film}
            />
          ))}
      </ul>
    </article>
  );
};

export default FilmsList;
