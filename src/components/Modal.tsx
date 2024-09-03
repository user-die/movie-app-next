/*
"use client";
import { useState } from "react";
import Login from "./Login";
import SignIn from "./Signin";

export default function Modal({ closeModal }) {
  const [tab, setTab] = useState<1 | 2>(1);

  return (
    <div className="w-full h-full fixed top-0 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-bg2 rounded-3xl w-80 h-2/5">
        <div className="mt-4 flex gap-4 justify-center">
          <button
            className={`bg-bg3 p-2 rounded-xl ${tab === 1 && "bg-blue"}`}
            onClick={() => setTab(1)}
          >
            Вход
          </button>
          <button
            className={`bg-bg3 p-2 rounded-xl ${tab === 2 && "bg-blue"}`}
            onClick={() => setTab(2)}
          >
            Регистрация
          </button>
        </div>

        {tab === 1 ? (
          <Login closeModal={closeModal} />
        ) : (
          <SignIn closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}
*/
