export type Award = {
  imageUrl: string;
  name: string;
  nominationName: string;
  persons: { nameEn: string; nameRu: string }[];
  win: boolean;
  year: number;
};

export type Fact = {
  spoiler: boolean;
  text: string;
  type: string;
};

export type Film = {
  id: number;
  name: string;
  description?: string;
  year: number;
  poster?: { previewUrl: string; url: string };
  genres?: { name: string }[] | { genre: string }[] | string[];
  enProfession?: string;
  rating?:
    | {
        kp?: number;
        imdb?: number;
        filmCritics?: number;
        russianFilmCritics?: number;
        await?: number;
      }
    | number;
  ratingImdb?: number;
  ratingKp?: number;
  ageRating?: number;
  alternativeName?: string;
  backdrop?: { previewUrl: string; url: string };
  countries?: { name: string }[];
  enName?: null;
  sequelsAndPrequels?: Film[];
  similarMovies?: Film[];
  isSeries?: boolean;
  logo?: {
    url: string;
  };
  persons?: Actor[];
  movieLength?: number;
  names?: { name: string }[];
  ratingMpaa?: string;
  seriesLength?: number;
  shortDescription?: string;
  status?: string;
  ticketsOnSale?: boolean;
  top10?: number;
  top250?: number;
  totalSeriesLength?: number;
  type?: string;
  typeNumber?: number;

  votes?: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };

  fees?: {
    russia: { value: number; currency: string };
    usa: { value: number; currency: string };
    world: { value: number; currency: string };
  };

  premiere?: any;
  premiereRu?: any;
  kinopoiskId?: number;
  nameRu?: string;
  nameEn?: string;
  posterUrlPreview?: string;
};

export type Actor = {
  name?: string;
  alternativeName?: string;
  age?: number;
  birthPlace?: { value: string }[];
  birthday?: string;
  countAwards?: number;
  createdAt?: string;
  death?: null | string;
  deathPlace?: { value: string }[];
  enName?: string;
  facts?: { value: string }[];
  growth?: number;
  id?: number;
  movies?: Film[];
  photo?: string;
  profession?: [];
  sex?: string;
  spouses?: {
    id: number;
    name: null | string;
    divorced: boolean;
    children: number;
    relation: string;
  }[];
  description?: string;
  professions: string[];
};
