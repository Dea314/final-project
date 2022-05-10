import React from "react";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
const CopyButton = ({ textToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();
  return (
    <button
      style={{
        backgroundColor: "#5279EC",
        color: "#fff",
        padding: "1rem",
        borderRadius: "5px",
        fontSize: "1rem",
        border: "1px solid white",
        marginLeft: "3rem",
      }}
      onClick={() => handleCopy(textToCopy)}
    >
      Copy to clipboard
    </button>
  );
};

export default CopyButton;
