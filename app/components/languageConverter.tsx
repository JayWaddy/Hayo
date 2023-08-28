"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";
import { ClearIcon } from "./icons";
import { convertEngToPlc } from "../data/languageConverter.service";

export default function LanguageConverter() {
  const [inputValue, setInputValue] = useState<string>("");
  const [outputValue, setOutputValue] = useState<string>("");
  const inputRef = useRef<HTMLTextAreaElement>(null!);
  const outputRef = useRef<HTMLTextAreaElement>(null!);

  const inputPlaceholderText = "Hello! Write here";
  const outputPlaceholderText = convertEngToPlc(inputPlaceholderText);
  const characterMaxLength = 140;
  const isInput = inputValue !== "";

  useEffect((): void => {
    if (inputRef) {
      inputRef.current.style.height = "auto";
      outputRef.current.style.height = "auto";

      const inputScrollHeight = inputRef.current.scrollHeight;
      const scrollHeight = outputRef.current.scrollHeight;

      inputRef.current.style.height = inputScrollHeight + "px";
      outputRef.current.style.height = scrollHeight + "px";
    }
  }, [inputRef, inputValue]);

  const handleClearTextArea = (): void => {
    setInputValue("");
    setOutputValue("");
    inputRef.current.focus();
  };

  const handleUpdateInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputValue(event.target?.value);
    setOutputValue(convertEngToPlc(event.target?.value));
  };

  const handleCopyOutputText = (): void => {
    // TODO
  };

  return (
    <div className="border-ui">
      <div className="relative w-full h-full border-b-2 border-skin-base p-4">
        <div className="relative flex">
          <span className="left-0 text-info">English</span>
          {isInput && (
            <button className="absolute right-0 " onClick={handleClearTextArea}>
              <ClearIcon />
            </button>
          )}
        </div>
        <textarea
          className="my-4 w-full rounded-sm placeholder:text-skin-muted
          resize-none outline-none"
          name="input"
          placeholder={inputPlaceholderText}
          rows={1}
          maxLength={characterMaxLength}
          autoFocus={true}
          value={inputValue}
          onChange={(event) => handleUpdateInput(event)}
          ref={inputRef}
        />
        <div className="relative mt-4">
          <span className="absolute right-0 bottom-0 text-info">
            {isInput ? inputRef.current?.textLength : 0}/{characterMaxLength}
          </span>
        </div>
      </div>
      <div className="p-4">
        <span className="flex text-info">Planco</span>
        <textarea
          readOnly
          className={`
          my-4 w-full resize-none outline-none overflow-hidden
          text-2xl break-allplaceholder:text-skin-muted
          ${!isInput && "text-skin-muted"}`}
          name="output"
          placeholder={outputPlaceholderText}
          rows={1}
          value={outputValue}
          ref={outputRef}
        />

        {isInput && (
          <div className="relative mt-4">
            <button
              className="absolute bottom-0 right-0 copy-button"
              onClick={handleCopyOutputText}
            >
              copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
