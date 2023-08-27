import React from "react";
import Searchbar from "../components/searchbar";

export default function Page() {
  return (
    <main className="flex flex-col justify-center mt-6">
      <Searchbar />
      <span>Dictionary</span>
    </main>
  );
}
