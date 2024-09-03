import MainSearch from "./components/MainSearch";
import Releases from "./components/Releases";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Большая база данных с фильмами и актёрами:  релизы и даты выхода новинок, полная сводка данных о фильмах и актёрах.",
};

export default async function Home() {
  return (
    <>
      <main className="container mx-auto xl:px-40 py-4 px-2">
        <MainSearch />
        <Releases />
      </main>
    </>
  );
}
