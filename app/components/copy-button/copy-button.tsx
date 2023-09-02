import React, { useEffect, useRef, useState } from "react";

type Props = {
  refElement: React.RefObject<HTMLTextAreaElement> | null | undefined;
  style: string;
  isPinned?: boolean;
};

export default function CopyButton({
  refElement,
  style,
  isPinned,
}: Props): JSX.Element {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const resetButtonProps = (): void => {
    setTimeout((): void => {
      setIsClicked(false);
    }, 5_000);
  };

  const handleOnClick = (): void => {
    setIsClicked((prevState) => !prevState);

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      refElement?.current?.select();
      refElement?.current?.setSelectionRange(0, 99999);
      document.execCommand("copy");
      return;
    }

    if (typeof refElement?.current?.value === "string") {
      navigator.clipboard.writeText(refElement?.current?.value);
    }
  };

  useEffect((): void => {
    if (isClicked === true) {
      buttonRef.current?.classList.remove("muted-button");
      buttonRef.current?.classList.remove("base-button");
      buttonRef.current?.classList.add("pinned-button");
      resetButtonProps();
      return;
    }

    buttonRef.current?.classList.remove("pinned-button");
    buttonRef.current?.setAttribute("class", style);
  }, [isClicked, isPinned, buttonRef, style]);

  return (
    <button className={style} onClick={handleOnClick} ref={buttonRef}>
      {isClicked ? "copied" : "copy"}
    </button>
  );
}
