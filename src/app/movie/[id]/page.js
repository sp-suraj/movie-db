const API = process.env.API_KEY;

import Image from "next/image";
import React from "react";

async function MoviePage({ params }) {
  const movieId = params.id;
  let movie = await getMovie(movieId);
  console.log(movie);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie Poster"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          {movie?.genres && (
            <p className="text-lg mb-2">
              <span className="font-semibold mr-1">Genre:</span>
              {movie.genres.map(
                (item, i) =>
                  item.name + (i < movie.genres.length - 1 ? ", " : "")
              )}
            </p>
          )}
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          {movie.runtime && (
            <p className="mb-3">
              <span className="font-semibold mr-1">Total Runtime:</span>
              {`${Math.trunc(Number(movie.runtime) / 60)}h ${
                Number(movie.runtime) % 60
              }min`}
            </p>
          )}
          <p className="mb-3">
            <span className="font-semibold mr-1">Total Vote:</span>
            {movie.vote_count}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {`${movie.vote_average}/10`}
          </p>
          {movie?.production_companies && (
            <p className="text-lg mb-2">
              <span className="font-semibold mr-1">Production Companies:</span>
              {movie.production_companies.map(
                (item, i) =>
                  item.name +
                  (i < movie.production_companies.length - 1 ? ", " : "")
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&language=en-US`
  );
  return res.json();
}
