import { useState } from "react";
import copy from "copy-to-clipboard";


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