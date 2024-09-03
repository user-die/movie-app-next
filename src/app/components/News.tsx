import Post from "./Post";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
//import { useRef } from "react";
import { fetch2 } from "../../../fetchs";

type Post = {
  title: string;
  description: string;
  imageUrl: string;
  kinopoiskId: number;
  publishedAd: string;
  url: string;
};

export default async function News() {
  //const carousel = useRef(null);

  const data = await fetch(fetch2.baseUrl + "v1/media_posts", {
    headers: fetch2.headers,
    next: { revalidate: 86400 },
  });
  const posts = await data.json();

  return (
    <article className="d-flex align-items-center justify-content-center gap-2 my-3">
      <button
        //onClick={() => (carousel.current.scrollLeft -= 416)}
        className=""
      >
        <CaretLeftFill />
      </button>

      <section className="list416">
        <h2 className="">Последние новости</h2>
        <div
          className="flex overflow-hidden gap-6"
          // ref={carousel}
        >
          {posts?.items?.map((post: Post) => (
            <Post
              key={post?.kinopoiskId}
              post={{
                title: post?.title,
                description: post?.description,
                imageUrl: post?.imageUrl,
                id: post?.kinopoiskId,
                publishedAd: post?.publishedAd,
                url: post?.url,
              }}
            />
          ))}
        </div>
      </section>

      <button
        //onClick={() => (carousel.current.scrollLeft += 416)}
        className=""
      >
        <CaretRightFill />
      </button>
    </article>
  );
}
