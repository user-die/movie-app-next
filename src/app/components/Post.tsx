import Image from "next/image";

type Post = {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
  publishedAd: string;
  url: string;
};

export default async function Post({ post }: { post: Post }) {
  return (
    <a
      target="blank"
      href={post?.url}
      className="rounded-2xl bg-sky-500 w-1/3 p-4"
      style={{ flexBasis: "600px" }}
    >
      <p className="">{post?.title}</p>

      <Image
        src={post?.imageUrl?.replace("orig", "320x180")}
        key={post?.imageUrl}
        width={320}
        height={180}
        alt="Изображение из новости"
      />
    </a>
  );
}
