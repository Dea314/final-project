import React from "react";
import  useCopyToClipboard  from "../hooks/useCopyToClipboard";
const CopyButton = ({ textToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();
  return (
    <button
      style={{
        backgroundColor: "#3580d1",
        color: "#fff",
        padding: "1rem",
        borderRadius: "5px",
        fontSize: "1.2rem",
        border: "1px solid white",
        marginLeft: "3rem",
      }}
      onClick={() => handleCopy(textToCopy)}
    >
      Copy from clipboard
    </button>
  );
};

export default CopyButton;
