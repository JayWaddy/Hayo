"use client";

import React from "react";
import { useRef, useState } from "react";
import { ClearIcon } from "../icons/icons";
import { convertEngToPlc } from "./input-converter.logic";
import CopyButton from "../copy-button/copy-button";

export default function InputConverter() {
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

    // BUG: does not auto resize on paste
    if (inputRef) {
      inputRef.current.style.setProperty("height", "auto");
      outputRef.current.style.setProperty("height", "auto");

      const inputScrollHeight = inputRef.current.scrollHeight;
      const outputScrollHeight = outputRef.current.scrollHeight;

      inputRef.current.style.setProperty("height", `${inputScrollHeight}px`);
      outputRef.current.style.setProperty("height", `${outputScrollHeight}px`);
    }
  };

  return (
    <div className="base-ui">
      <div className="relative h-full w-full border-b-2 border-skin-base p-4">
        <div className="relative flex">
          <span className="left-0 text-xs text-skin-muted">English</span>
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
          onChange={(element) => handleUpdateInput(element)}
          ref={inputRef}
        />
        <div className="relative mt-4">
          <span className="absolute bottom-0 right-0 text-xs text-skin-muted">
            {isInput ? inputRef.current?.textLength : 0}/{characterMaxLength}
          </span>
        </div>
      </div>
      <div className="p-4">
        <span className="flex text-xs text-skin-muted">Planco</span>
        <textarea
          readOnly
          className={`
          my-4 w-full resize-none overflow-hidden break-all text-2xl
          outline-none placeholder:text-skin-muted
          ${!isInput && "text-skin-muted"}`}
          name="output"
          placeholder={outputPlaceholderText}
          rows={1}
          value={outputValue}
          ref={outputRef}
        />
        {isInput && (
          <div className="relative mt-4">
            <CopyButton
              refElement={outputRef}
              style={"base-button absolute bottom-0 right-0"}
            />
          </div>
        )}
      </div>
    </div>
  );
}
