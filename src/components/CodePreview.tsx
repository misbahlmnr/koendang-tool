import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodePreview = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Box position="relative">
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <Button
          size="sm"
          position="absolute"
          top="10px"
          right="10px"
          zIndex="1"
          bg={isCopied ? "green.400" : "blue.400"}
          color="white"
          _hover={{ bg: isCopied ? "green.500" : "blue.500" }}
        >
          {isCopied ? "Copied" : "Copy"}
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodePreview;
