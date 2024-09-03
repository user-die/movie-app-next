type Fact = {
  value: string;
};

export default function Facts({ facts }: { facts: Fact[] }) {
  return (
    <>
      {facts?.length > 0 && (
        <section className="text-text">
          <h2 className="text-blue font-bold text-2xl">Интересные факты</h2>

          <ul className="list-disc ml-4 mt-2 flex flex-col gap-2">
            {facts?.map((fact) => (
              <li key={fact.value}>
                {fact.value.replace(/\&.*?;/g, "").replace(/\<.*?>/g, "")}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
