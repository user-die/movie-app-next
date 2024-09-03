/*
import Staff from "./Staff";

export type Person = {
  description: string | null;
  enName: string | null;
  enProfession: string;
  id: number;
  name: string | null;
  photo: string | null;
  profession: string;
  professions: string[];
};

export default function Persons({ persons }: { persons: Person[] }) {
  const actors = useMemo(() => {
    return persons.filter((el) => el.profession === "актеры");
  }, [persons]);

  const staff = useMemo(() => {
    return persons.filter((el) => el.profession !== "актеры");
  }, [persons]);

  const dubbingActors = useMemo(() => {
    return staff?.filter((el) => el.profession === "актеры дубляжа");
  }, [staff]);

  /*
  const sorderStaff = useMemo(() => {
    return staff
      .filter((el) => el.profession !== "актеры дубляжа")
      .reduce((acc, el) => {
        acc[el.name] = acc[el.name] || {
          name: el?.name,
          id: el?.id,
          photo: el?.photo,
          professions: [],
        };
        acc[el.name].professions.push(el?.profession);
        console.log(acc);
        return acc;
      });
  }, [staff]);

  
  const mainStaff = useMemo(() => {
    return (
      sorderStaff &&
      Object.fromEntries(
        Object.entries(sorderStaff).sort(
          (a, b) => b[1].professions.length - a[1].professions.length
        )
      )
    );
  }, [sorderStaff]);
*/
