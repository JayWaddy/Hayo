"use client";

import React, { useEffect, useRef, useState } from "react";
import { AddIcon, PinnedIcon } from "../icons/icons";
import CopyButton from "../copy-button/copy-button";
import { convertEngToPlc } from "../input-converter/input-converter.logic";

export default function InputConverterHistoryCard() {
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const plancoOutputRef = useRef<HTMLTextAreaElement>(null!);

  const englishText = "Example text here; long enough to wrap over two lines";
  const plancoText = convertEngToPlc(englishText);

  useEffect(() => {
    handleOnInput();
  }, [plancoOutputRef]);

  const handleOnInput = (): void => {
    if (plancoOutputRef) {
      plancoOutputRef.current?.style.setProperty("height", "auto");

      const scrollHeight = plancoOutputRef.current?.scrollHeight;

      plancoOutputRef.current?.style.setProperty("height", `${scrollHeight}px`);
    }
  };

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
      <div className="grid grid-cols-5">
        <div className="col-span-4 flex flex-col">
          <span
            className={`${
              isPinned ? "border-skin-pinned" : "border-skin-card"
            } mb-4 border-b-2 pb-4`}
          >
            {englishText}
          </span>
          <textarea
            readOnly
            className="resize-none overflow-hidden break-all bg-inherit font-semibold outline-none"
            rows={1}
            onInput={handleOnInput}
            ref={plancoOutputRef}
            value={plancoText}
          />
        </div>
        <CopyButton
          isPinned={isPinned}
          refElement={plancoOutputRef}
          style={"muted-button ml-auto mt-auto"}
        />
      </div>
    </div>
  );
}
