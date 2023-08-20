import Image from "next/image";
const API = process.env.API_KEY;
import MoviesResult from "./components/MoviesResult";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "trending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "topRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API}&language=en-US&page=1`
  );
  let data = await res.json();
  return (
    <div>
      <MoviesResult results={data.results} />
    </div>
  );
}
