import { Card, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import CodePreview from "./CodePreview";

const ConvertTool = () => {
  const codeConvertVideo = `ffmpeg -y -i "" -movflags faststart test.mp4`;
  const codeConvertImg = `mogrify -auto-orient -resize 60% -quality 95% -format webp *.jpg`;
  const mediaQuery = `"@media screen and (max-width: 576px)":{}`;
  const objectPositionCommand = `{"objectPosition":"50% 50%"}`;
  return (
    <Stack>
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontFamily={"Karla"}
      >
        <Text as={"span"} position={"relative"}>
          Command
        </Text>{" "}
        <Text color={"blue.400"} as={"span"}>
          Tools
        </Text>{" "}
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "md", lg: "lg" }}>
        Untuk melakukan resize poto dan video dengan command dibawah, anda
        diharapkan sudah menginstall tools ffmpeg & image magick.
      </Text>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={5}
        mt={5}
      >
        <Card flex={1} bgColor={"transparent"}>
          <CodePreview
            code={codeConvertVideo}
            codeName="Resize your video with ffmpeg"
            language="bash"
          />
        </Card>

        <Card flex={1} bgColor={"transparent"}>
          <CodePreview
            code={codeConvertImg}
            codeName="Convert & Resize your image with image magick"
            language="bash"
          />
        </Card>

        <Card flex={1} bgColor={"transparent"}>
          <CodePreview
            code={mediaQuery}
            codeName="Media Query"
            language="bash"
          />
        </Card>

        <Card flex={1} bgColor={"transparent"}>
          <CodePreview
            code={objectPositionCommand}
            codeName="Object position image command"
            language="bash"
          />
        </Card>
      </Grid>
    </Stack>
  );
};

export default ConvertTool;
