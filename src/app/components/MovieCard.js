import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

function MovieCard({ movie }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-500 sm:shadow-lg rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={700}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Image not available"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-none sm:line-clamp-3 text-md">
            {movie.overview}
          </p>
          <h2 className="truncate text-lg font-bold py-1">
            {movie.title || movie.name}
          </h2>
          <p className="flex justify-between">
            <span>{movie.release_date || movie.first_air_date}</span>
            <span className="flex">
              <FiThumbsUp className="h-5 mr-1 ml-3" />
              {movie.vote_count}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
