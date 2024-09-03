import type { Fact } from "@/types";

export default function Facts({ facts }: { facts: Fact[] }) {
  return (
    <section className="col-span-4 text-text">
      {facts.filter((el) => !el.spoiler).length > 0 && (
        <article>
          <h2 className="text-blue text-2xl font-bold">Факты</h2>

          <ul className="mt-2 flex flex-col gap-3">
            {facts
              ?.filter((el: Fact) => !el.spoiler)
              .map((fact: Fact) => (
                <li key={fact.text} className="text-lg border-t-2 pt-2">
                  {fact?.text.replace(/\&.*?;/g, "").replace(/\<.*?>/g, "")}
                </li>
              ))}
          </ul>
        </article>
      )}

      {facts?.filter((el) => el.spoiler).length > 0 && (
        <article className="my-4">
          <h2 className="text-blue text-3xl font-bold">
            Ошибки (возможны спойлеры !)
          </h2>

          <ul className="mt-2 flex flex-col gap-3">
            {facts
              ?.filter((el: Fact) => el.spoiler)
              .map((fact: Fact) => (
                <li key={fact?.text} className="text-lg border-t-2 pt-2">
                  {fact?.text.replace(/\&.*?;/g, "").replace(/\<.*?>/g, "")}
                </li>
              ))}
          </ul>
        </article>
      )}
    </section>
  );
}
