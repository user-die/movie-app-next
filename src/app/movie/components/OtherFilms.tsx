import Image from "next/image";
import Link from "next/link";
import altImage from "@/app/assets/alt.png";
import type { Film } from "@/types";

const OtherFilms = ({ text, films }: { text: string; films: Film[] }) => {
  return (
    <>
      {films?.length > 0 && (
        <section className="col-span-4 w-100">
          <h2 className="text-blue text-2xl font-bold">{text}</h2>

          <div className="flex flex-wrap w-100 gap-3 mt-2">
            {films
              ?.sort((a, b) => b?.year - a?.year)
              .map((sequel) => (
                <Link
                  key={sequel.id}
                  href={"/movie/" + sequel.id}
                  className="shrink-0 grow-0 flex flex-col basis-24"
                >
                  <Image
                    alt="постер фильма"
                    height={180}
                    width={120}
                    src={
                      sequel?.poster?.url?.replace("orig", "x240") || altImage
                    }
                    className="rounded-2xl"
                  />
                  <p className="text-center">
                    {sequel?.name || sequel?.alternativeName}
                  </p>
                  <p className="text-center">{sequel?.year}</p>
                </Link>
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default OtherFilms;
