import { useState } from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (textToCopy) => {
    copy(textToCopy.toString());
    setCopied(true);
    toast.info("Copied to clipboard");
  };
  return [copied, handleCopy];
}

export default useCopyToClipboard;
