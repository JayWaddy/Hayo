"use client";

import React, { ChangeEvent } from "react";
import { useRef, useState, useEffect } from "react";
import DeleteIcon from "../icons/deleteIcon";

export default function LanguageConverter() {
  const [inputValue, setInputValue] = useState<string>("");
  const [outputValue, setOutputValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null!);
  const outputRef = useRef<HTMLTextAreaElement>(null!);
  const isInput = inputValue !== "";
  const placeholderText = "Translate here!";

  useEffect((): void => {
    if (textAreaRef) {
      textAreaRef.current.style.height = "auto";
      const scrollHeight = textAreaRef.current.scrollHeight;

      textAreaRef.current.style.height = scrollHeight + "px";
    }

    // Placeholder for translation functionality
    setOutputValue(inputValue);
  }, [textAreaRef, inputValue]);

  const resetMessage = (): void => {
    setInputValue("");
    textAreaRef.current.focus();
  };

  const resizeTextArea = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const height = event.target.style.height;
    height == "0";

    const scrollHeight = event.target.scrollHeight + "px";
    height == scrollHeight;
  };

  const copyOutputText = () => {
    //
  };

  return (
    <div className="border-2 border-black rounded-2xl">
      <div className="w-full h-full border-b-2 border-black p-4">
        <div className="relative flex">
          <span className="left-0 text-info">English</span>
          {isInput && (
            <button
              className="absolute right-0 translate-x-1 -translate-y-1"
              onClick={resetMessage}
            >
              <DeleteIcon />
            </button>
          )}
        </div>
        <textarea
          className="mt-4 w-full resize-none outline-none"
          name="input"
          placeholder={placeholderText}
          rows={1}
          maxLength={250}
          autoFocus={true}
          value={inputValue}
          onChange={(event): void => setInputValue(event.target.value)}
          ref={textAreaRef}
        />
      </div>
      <div className="p-4">
        <span className="flex text-info">Planco</span>
        <span
          className={`flex w-full h-auto my-4 text-2xl font-semibold 
            ${!isInput && "text-zinc-400"}`}
          ref={outputRef}
        >
          {isInput ? outputValue : placeholderText}
        </span>
        <div className="flex justify-between">
          <span className="flex text-info">
            {isInput ? textAreaRef.current?.textLength : 0}/250
          </span>
          <button className="text-info" onClick={copyOutputText}>
            copy
          </button>
        </div>
      </div>
    </div>
  );
}
