export const fetch1 = {
  baseUrl: "https://api.kinopoisk.dev/v1.4",
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_KEY as string,
  },
};

export const fetch2 = {
  baseUrl: "https://kinopoiskapiunofficial.tech/api/",
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_KEY2 as string,
  },
};
