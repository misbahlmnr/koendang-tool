import { Box, Text, Stack, Flex, Button } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const CodePreview = ({
  code,
  codeName,
  language,
}: {
  code: string;
  codeName: string;
  language: string;
}) => {
  const [copy, setCopy] = useState(false);
  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <Box position="relative" bgColor={"#242630"} rounded={"10px"}>
      <Flex
        py={2}
        px={3}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text color={"#fff"}>{codeName}</Text>
        <Button
          bgColor={"transparent"}
          size={"xs"}
          gap={1}
          color={"#fff"}
          textTransform={"uppercase"}
          _hover={{ bgColor: "transparent" }}
          onClick={!copy ? handleCopyClipboard : () => {}}
        >
          <Text ml={1} fontSize={"lg"} mt={1}>
            <ion-icon
              name={copy ? "checkmark-sharp" : "clipboard-outline"}
            ></ion-icon>
          </Text>
          {copy ? "Copied!" : "Copy code"}
        </Button>
      </Flex>
      <Stack overflow={"hidden"}>
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          wrapLongLines={true}
          customStyle={{
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Stack>
    </Box>
  );
};

export default CodePreview;
