import React from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
const CopyButton = ({ textToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();
  return <button onClick={() => handleCopy(textToCopy)}>Copy</button>;
};

export default CopyButton;
