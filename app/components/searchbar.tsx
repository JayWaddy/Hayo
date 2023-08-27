"use client";

import React, { useRef, useState } from "react";
import { ClearIcon, SearchIcon } from "./icons";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null!);
  const isInput = inputValue !== "";

  const clearInputValue = (): void => {
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative flex my-auto h-12 border-ui">
      <span className="left-4 ml-4 my-auto">
        <SearchIcon />
      </span>
      <input
        className="ml-4 mr-14 outline-none w-full"
        type="text"
        placeholder="Search"
        autoFocus={true}
        maxLength={25}
        value={inputValue}
        onChange={(event): void => setInputValue(event.target.value)}
        ref={inputRef}
      />
      {isInput && (
        <button className="absolute right-3 my-2.5" onClick={clearInputValue}>
          <ClearIcon />
        </button>
      )}
    </div>
  );
}
