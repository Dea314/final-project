import { useState } from "react";
import copy from "copy-to-clipboard";
<<<<<<< HEAD


function useCopyToClipboard=()=> {
  const [ copied, setCopied] = useState(false)

  const handleCopy = (textToCopy) =>{
copy(textToCopy.toString())
setCopied(true)
  }
  return (
  [copied, handleCopy]
  
  )
}

export default useCopyToClipboard;
=======
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
>>>>>>> origin/main
