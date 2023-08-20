import React from "react";
import MovieCard from "./MovieCard";

function MoviesResult({ results }) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesResult;
