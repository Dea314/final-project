import { useEffect, useState } from "react";
import { CodeBlock } from "react-code-blocks";

const CodeSnippet = ({ language, theme, snippets }) => {
  const [code, setCode] = useState(null);

  useEffect(() => {
    language && setCode(snippets[language]);
    // eslint-disable-next-line
  }, [language]);

  return (
    <div className="codeblock">
      {language && code && (
        <CodeBlock
          text={code}
          language={language}
          showLineNumbers={true}
          theme={theme}
        />
      )}
    </div>
  );
};

export default CodeSnippet;
