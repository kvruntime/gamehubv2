import { useGenresHook } from "@/lib/server-hooks";
import { GenresList } from "./games/genres-list";

async function Aside() {
  const { data: genres, isError } = await useGenresHook()
  if (isError) return <span>Not found!!</span>

  return (<section>
    <h2 className="text-xl font-semibold">Genres</h2>
    <GenresList genres={genres} />
  </section>
  );
}

export default Aside;