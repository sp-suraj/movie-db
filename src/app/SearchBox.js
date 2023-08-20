"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function submitHandler(e) {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/search/${searchText}`);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex max-w-6xl justify-between mx-auto items-center px-5"
    >
      <input
        type="text"
        placeholder="Search keywords ..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(e) => setSearchText(e.target.value.trim())}
      ></input>
      <button
        disabled={!searchText}
        className="text-amber-600 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
