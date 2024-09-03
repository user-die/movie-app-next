/*
import { useGetCadrsQuery } from "../../../store/movieApi2server";

function Cadrs({ id }: { id: number }) {
  const { data, isSuccess, isError, error } = useGetCadrsQuery(id);

  return (
    <>
      {isError && <div>{error?.data?.message}</div>}

      {isSuccess && (
        <section id="cadrs" v-if="isFinished" className="cv">
          <h2 className="text-blue mb-3 fs-5 fw-bold">Кадры</h2>

          <Carousel>
            {data.items.map((cadr) => (
              <LazyImage
                alt="Кадры из фильма"
                src={cadr.previewUrl}
                key={cadr.previewUrl}
                className="rounded-4 h400 w-100 object-fit-cover"
              />
            ))}
          </Carousel>
        </section>
      )}
    </>
  );
}

export default Cadrs;
*/
