import Link from "next/link";
import Image from "next/image";

import type { Actor } from "@/types";
import altImage from "@/app/assets/alt.png";

const Staff = ({
  staff,
  text,
}: {
  staff: Actor[] | undefined;
  text: string;
}) => {
  return (
    <section className="my-3 col-span-3 row-start-5">
      <h2 className="text-blue text-2xl font-bold">{text}</h2>

      <div className="flex w-full gap-3 mt-3 flex-wrap">
        {staff &&
          staff.map((actor) => (
            <Link
              className="shrink-0 flex flex-col grow-0 basis-24"
              key={actor.id}
              href={"/actor/" + actor.id}
            >
              <Image
                alt="Портрет актёра"
                height={143}
                width={90}
                src={`${
                  `https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone180_${actor.id}.jpg` ||
                  altImage ||
                  actor?.photo
                }`}
                className="rounded-2xl h-auto w-auto"
              />

              <p className="text-center">{actor?.name}</p>

              {actor?.description && (
                <p className="text-center">{actor?.description}</p>
              )}

              <p className="m-0 text-warning w120">
                {actor?.professions?.map((prof) => (
                  <span key={prof}>{prof.slice(0, -1) + " "}</span>
                ))}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Staff;
