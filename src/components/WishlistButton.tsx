"use client";
import { Heart, Bookmarks, BookmarkStar } from "react-bootstrap-icons";

const lists = {
  wishlist: {
    addFn: (id: number) => id,
    removeFn: (id: number) => id,
    icon: Bookmarks,
  },
  favoritesFilms: {
    addFn: (id: number) => id,
    removeFn: (id: number) => id,
    icon: BookmarkStar,
  },
  favoritesActors: {
    addFn: (id: number) => id,
    removeFn: (id: number) => id,
    icon: Heart,
  },
};

export default function WishlistButton({
  id,
  type,
  text,
}: {
  id: number;
  type: "wishlist" | "favoritesFilms" | "favoritesActors";
  text?: string;
}) {
  const inTheList = "qwe"; //list?.includes(id);

  return (
    <button
      className={`outline rounded-2xl p-2 flex items-center gap-1
        ${inTheList ? "btn" : ""}`}
    >
      {text}
      {type === "wishlist" && <Bookmarks />}
      {type === "favoritesFilms" && <BookmarkStar />}
      {type === "favoritesActors" && <Heart />}
    </button>
  );
}
