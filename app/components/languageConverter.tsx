"use client";

import React, { ChangeEvent } from "react";
import { useRef, useState, useEffect } from "react";
import { ClearIcon } from "./icons";

export default function LanguageConverter() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [outputValue, setOutputValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null!);
  const outputRef = useRef<HTMLTextAreaElement>(null!);

  const characterMaxLength = 140;
  const isInput = textAreaValue !== "";
  const placeholderText = "Translate here!";

  useEffect((): void => {
    if (textAreaRef) {
      textAreaRef.current.style.height = "auto";
      const scrollHeight = textAreaRef.current.scrollHeight;

      textAreaRef.current.style.height = scrollHeight + "px";
    }

    // Placeholder for translation functionality
    setOutputValue(textAreaValue);
  }, [textAreaRef, textAreaValue]);

  const clearInputValue = (): void => {
    setTextAreaValue("");
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
    <div className="border-ui">
      <div className="w-full h-full border-b-2 border-black p-4">
        <div className="relative flex">
          <span className="left-0 text-info">English</span>
          {isInput && (
            <button
              className="absolute right-0 translate-x-1 -translate-y-1"
              onClick={clearInputValue}
            >
              <ClearIcon />
            </button>
          )}
        </div>
        <textarea
          className="mt-4 w-full resize-none outline-none"
          name="input"
          placeholder={placeholderText}
          rows={1}
          maxLength={characterMaxLength}
          autoFocus={true}
          value={textAreaValue}
          onChange={(event): void => setTextAreaValue(event.target.value)}
          ref={textAreaRef}
        />
      </div>
      <div className="p-4">
        <span className="flex text-info">Planco</span>
        <span
          className={`flex h-auto break-all my-4 text-2xl 
            ${!isInput && "text-zinc-400"}`}
          ref={outputRef}
        >
          {isInput ? outputValue : placeholderText}
        </span>
        <div className="flex justify-between">
          <span className="flex text-info">
            {isInput ? textAreaRef.current?.textLength : 0}/{characterMaxLength}
          </span>
          <button className="text-info" onClick={copyOutputText}>
            copy
          </button>
        </div>
      </div>
    </div>
  );
}
