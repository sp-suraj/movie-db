"use client";

import React from "react";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h2>Something went wrong</h2>
      <button onClick={() => reset()} className="hover:text-amber-600">
        Try Again
      </button>
    </div>
  );
}
