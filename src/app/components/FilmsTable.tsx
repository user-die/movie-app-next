import Link from "next/link";
import Image from "next/image";
import type { Film } from "@/types";
//import WishlistButton from "@/components/WishlistButton";

export default async function FilmsTable({
  title,
  films,
}: {
  title: string;
  films: Film[];
}) {
  return (
    <>
      {films?.length > 0 && (
        <section className="mt-4 bg-bg2 rounded-2xl p-3">
          <h2 className="text-3xl font-bold text-blue mb-2">{title}</h2>
          <ul className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-1 grid-flow-row auto-rows-max">
            {films.map((film: Film) => (
              <li key={film?.id} className="w-70 bg-gray-800 p-2 rounded-xl">
                <Link
                  href={"movie/" + film?.id}
                  className="flex gap-2 bg-bg3 p-2 rounded-2xl"
                >
                  <Image
                    src={`https://st.kp.yandex.net/images/film_iphone/iphone90_${film?.id}.jpg`}
                    alt="Постер фильма"
                    className="rounded-2"
                    width={70}
                    height={100}
                  />

                  <div className="flex flex-col justify-between">
                    <p className="text-xl text-white text-clip">{film?.name}</p>
                    <span className="text-text">
                      {new Date(film?.premiere).toLocaleDateString("ru", {
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>

                  {/*<WishlistButton type="wishlist" id={film?.id} />*/}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
