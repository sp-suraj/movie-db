"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

function NavItem({ title, param }) {
  let searchParams = useSearchParams();
  let genre = searchParams.get("genre");
  console.log(genre);
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre == param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavItem;
