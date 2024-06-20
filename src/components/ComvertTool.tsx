import { Heading, Stack, Text } from "@chakra-ui/react";
import CodePreview from "./CodePreview";

const ConvertTool = () => {
  const codeConvertVideo = `ffmpeg -y -i "" -movflags faststart test.mp4`;
  const codeConvertImg = `mogrify -auto-orient -resize 60% -quality 95% -format webp *.jpg`;
  return (
    <Stack>
      <Heading color={"gray.700"}>Convert Tool</Heading>
      <Text color={"gray.500"}>For resize your image or mp4</Text>

      <Text mt={5}>Resize your video</Text>
      <CodePreview code={codeConvertVideo} language="json" />

      <Text>Convert & Resize your image</Text>
      <CodePreview code={codeConvertImg} language="json" />
    </Stack>
  );
};

export default ConvertTool;
