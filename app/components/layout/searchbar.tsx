"use client";

import React, { useRef, useState } from "react";
import { ClearIcon, SearchIcon } from "../icons/icons";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null!);
  const isInput = inputRef.current?.value !== "";

  const clearInputValue = (): void => {
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="base-ui relative my-auto flex h-12">
      <span className="left-4 my-auto ml-4">
        <SearchIcon />
      </span>
      <input
        className="ml-4 mr-14 w-full outline-none placeholder:text-skin-muted"
        type="text"
        placeholder="Search"
        autoFocus={true}
        maxLength={25}
        value={inputValue}
        onChange={(input): void => setInputValue(input.target.value)}
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
