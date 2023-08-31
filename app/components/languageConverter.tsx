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

  const handleClearTextArea = (): void => {
    setInputValue("");
    setOutputValue("");
    inputRef.current.style.height = "auto";
    outputRef.current.style.height = "auto";
    inputRef.current.focus();
  };

  const handleUpdateInput = (
    textAreaElement: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setInputValue(textAreaElement.target?.value);
    setOutputValue(convertEngToPlc(textAreaElement.target?.value));

    if (inputRef) {
      inputRef.current.style.height = "auto";
      outputRef.current.style.height = "auto";

      const inputScrollHeight = inputRef.current.scrollHeight;
      const outputScrollHeight = outputRef.current.scrollHeight;

      inputRef.current.style.height = `${inputScrollHeight}px`;
      outputRef.current.style.height = `${outputScrollHeight}px`;
    }
  };

  const handleCopyOutputText = (): void => {
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      outputRef.current.select();
      outputRef.current.setSelectionRange(0, 99999);
      document.execCommand("copy");
      return;
    }

    navigator.clipboard.writeText(outputValue);
  };

  return (
    <div className="border-ui">
      <div className="relative h-full w-full border-b-2 border-skin-base p-4">
        <div className="relative flex">
          <span className="text-info left-0">English</span>
          {isInput && (
            <button className="absolute right-0 " onClick={handleClearTextArea}>
              <ClearIcon />
            </button>
          )}
        </div>
        <textarea
          className="my-4 w-full resize-none rounded-sm
          outline-none placeholder:text-skin-muted"
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
          <span className="text-info absolute bottom-0 right-0">
            {isInput ? inputRef.current?.textLength : 0}/{characterMaxLength}
          </span>
        </div>
      </div>
      <div className="p-4">
        <span className="text-info flex">Planco</span>
        <textarea
          readOnly
          className={`
          break-allplaceholder:text-skin-muted my-4 w-full resize-none overflow-hidden
          text-2xl outline-none
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
              className="copy-button absolute bottom-0 right-0"
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
