type watchItem = {
  logo: { url: string };
  name: string;
  url: string;
};

const Watch = ({ watch }: { watch: watchItem[] }) => {
  return (
    <section className="bg-bg2 rounded-2xl col-start-4 p-3">
      <h2 className="text-blue text-2xl font-bold">Где посмотреть</h2>

      <div className="mt-2 flex flex-col gap-3">
        {watch.map((item) => (
          <a
            key={"/" + item.name}
            href={item.url}
            target="_blank"
            className="text-blue-600"
          >
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Watch;
