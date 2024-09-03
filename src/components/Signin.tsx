/*
import { sql } from "@vercel/postgres";
import { useEffect, useState, useRef } from "react";
import { useId } from "react";

export default function SignIn({ closeModal }) {
  const [mail, setMail] = useState<string>(""),
    [username, setUsername] = useState<string>(""),
    [password1, setPassword1] = useState<string>(""),
    [password2, setPassword2] = useState<string>("");

  const id = useId();
  const error = useRef(null);

  useEffect(() => {
    if (password1 !== password2) {
      error.current.classList.remove("hidden");
    } else {
      error.current.classList.add("hidden");
    }
  }, [password1, password2]);

  const CreateAccount = async (e) => {
    e.preventDefault();
    e.target.reportValidity();

    await sql`INSERT into users values (${username}, ${mail}, ${password1}, ${id})`;
  };

  return (
    <form
      onSubmit={CreateAccount}
      className="flex flex-col p-4 gap-3 items-center justify-between h-80"
    >
      <div className="flex flex-col gap-3 w-full">
        <input
          placeholder="Имя пользователя"
          type="text"
          className="p-2 pl-11 rounded-xl w-full men"
          min="3"
          max="26"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Почта"
          type="email"
          className="p-2 pl-11 rounded-xl w-full mail"
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <input
          placeholder="Пароль"
          type="password"
          name="password"
          className="password pl-11 p-2 rounded-xl w-full"
          required
          min="6"
          max="20"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />

        <input
          placeholder="Повторите пароль"
          type="password"
          name="confirm-password"
          className="password pl-11 p-2 rounded-xl w-full"
          required
          min="6"
          max="20"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <p ref={error} className="text-red text-center hidden">
          Пароли должны совпадать
        </p>
      </div>

      <div>
        <button onClick={closeModal} className="bg-red w-max rounded-xl p-2 ">
          Закрыть
        </button>

        <button type="submit" className="bg-blue w-max rounded-xl p-2 ml-4">
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}
*/
