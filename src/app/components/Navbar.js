import React from "react";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className="flex items-center justify-center bg-amber-100 dark:bg-zinc-700 lg:text-lg p-4">
      <NavItem title="Trending" param="trending" />
      <NavItem title="Top Rated" param="topRated" />
    </div>
  );
}

export default Navbar;
