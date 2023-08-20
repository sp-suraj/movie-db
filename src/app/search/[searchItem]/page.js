import MoviesResult from "@/app/components/MoviesResult";
import React from "react";
let API = process.env.API_KEY;

async function SearchPage({ params }) {
  let searchItem = params.searchItem;
  const searchdata = await getSearchData(searchItem);
  if (searchdata?.results?.length === 0)
    return <h1 className="text-center pt-6">No result found.</h1>;
  return (
    <div>
      <MoviesResult results={searchdata.results} />
    </div>
  );
}

export default SearchPage;

async function getSearchData(text) {
  let res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${text}&language=en-US`
  );
  return res.json();
}
