"use client";
import { useState, useEffect } from "react";
import { List } from "react-bootstrap-icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link.js";
//import Modal from "./Modal";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  //const [width, setWidth] = useState<number>(0);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const closeModal = () => {
    setModalShow(false);
  };
  /*
  const handleResize = () => setWidth(window.innerWidth);

  
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  */

  const routes = [
    { route: "", name: "Главная" },
    { route: "films", name: "Фильмы" },
    { route: "serials", name: "Сериалы" },
    { route: "mults", name: "Мультфильмы" },
    { route: "anime", name: "Аниме" },
    { route: "top250", name: "Топ 250" },
    //{ route: "favorites", name: "Избранное" },
    //{ route: "wishlist", name: "Закладки" },
  ];

  return (
    <header className="items-center p-2 justify-center flex">
      <nav className="hidden md:flex gap-8 font-bold text-text">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={"/" + route.route}
            className={`p-2 rounded-lg hover:bg-bg3 ${
              pathname === "/" + route.route ? "bg-blue text-white" : ""
            }`}
          >
            {route.name}
          </Link>
        ))}
      </nav>

      <select
        onChange={(e) => router.push("/" + e.target.value)}
        name=""
        id=""
        className="inline-flex md:hidden p-3 rounded-2xl w-1/2 border-blue border-2 bg-bg2 text-blue"
      >
        {routes.map((route) => (
          <option
            key={route.name}
            className="text-blue rounded-xl border-blue border-2"
            value={route.route}
          >
            {route.name}
          </option>
        ))}
      </select>

      {/*
 <button
        className="gradient p-2 rounded-lg"
        onClick={() => setModalShow(true)}
      >
        Sign in
      </button>
      {modalShow && <Modal closeModal={closeModal} />}
      */}
    </header>
  );
};

export default Navbar;
