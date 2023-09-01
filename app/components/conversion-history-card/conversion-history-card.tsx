"use client";

import React, { useState } from "react";
import { AddIcon, PinnedIcon } from "../icons/icons";

export default function InputConverterHistoryCard() {
  const [isPinned, setIsPinned] = useState<boolean>(false);

  const handleIsPinnedToggle = () => {
    setIsPinned((prevState) => !prevState);
  };

  return (
    <div
      className={`${isPinned ? "pinned-card" : "base-card"} relative mt-4 p-4`}
    >
      <div className="mb-4 flex justify-between">
        <span
          className={`${
            isPinned ? "text-skin-base" : "text-skin-muted"
          } text-xs`}
        >
          {5} sec ago
        </span>
        <button onClick={handleIsPinnedToggle}>
          {isPinned ? <PinnedIcon /> : <AddIcon />}
        </button>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-3 flex flex-col">
          <span className="mb-2">English sentence</span>
          <span className="font-semibold">Planco dapans paddo</span>
        </div>
        <button
          className={`${
            isPinned ? "pinned-button" : "muted-button"
          } muted-button col-span-1 ml-auto mt-auto text-xs`}
        >
          copy
        </button>
      </div>
    </div>
  );
}
