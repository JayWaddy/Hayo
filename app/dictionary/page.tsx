import React from "react";
import Searchbar from "../components/layout/searchbar";

export default function Page() {
  return (
    <main className="mt-6 flex flex-col justify-center">
      <Searchbar />
      <span>Dictionary</span>
    </main>
  );
}
