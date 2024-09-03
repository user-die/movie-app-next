"use client";
import { useState, useEffect } from "react";
import { List } from "react-bootstrap-icons";
import { usePathname } from "next/navigation";
import Link from "next/link.js";
//import Modal from "./Modal";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [modalShow, setModalShow] = useState<boolean>(false);

  const pathname = usePathname();

  const closeModal = () => {
    setModalShow(false);
  };

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <header className="flex items-center p-2 justify-center">
      {width > 705 ? (
        <nav className="flex gap-8 font-bold text-text">
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
      ) : (
        <>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">
                <List />
                Навигация
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              {routes.map((route) => (
                <DropdownItem key={route.name} href={"/" + route.route}>
                  {route.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </>
      )}

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
