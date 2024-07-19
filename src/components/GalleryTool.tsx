import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import CodePreview from "./CodePreview";

export default function GalleryTool() {
  const [rowCount, setRowCount] = useState<string>("");
  const [formAreas, setFormAreas] = useState<ReactNode[]>([]);
  const [gridStyle, setGridStyle] = useState<string>("");
  const formRefs = useRef<(HTMLInputElement | null)[]>([]);

  const defaultDesignPg2 = `{
    "2": {
      "gridTemplateRows": "repeat(5, 1fr)",
      "gridTemplateColumns": "repeat(6, 1fr)",
      "gridTemplateAreas":
        "'image1 image1 image2 image2 image2 image2' 'image3 image3 image3 image3 image4 image4' 'image5 image5 image5 image6 image6 image6' 'image7 image7 image8 image8 image9 image9' 'image10 image10 image10 image11 image11 image11'"
    }
  }`;

  const generateFormAreas = () => {
    const areas: ReactNode[] = [];
    formRefs.current = []; // reset the refs array
    for (let i = 1; i <= Number(rowCount); i++) {
      areas.push(
        <FormControl key={i}>
          <FormLabel>Grid Areas row {i}</FormLabel>
          <Input
            type="text"
            name={`row-areas-${i}`}
            ref={(el) => (formRefs.current[i - 1] = el)}
          />
        </FormControl>
      );
    }
    setFormAreas(areas);
  };

  const generateDesignPg2 = () => {
    const values = formRefs.current.map((input) => input?.value || "");

    let areaIndex = 1;
    const rows = values
      .map((value) => {
        const areas = value
          .split(",")
          .map((val) => {
            const area = `image${areaIndex}`;
            areaIndex++;
            if (parseInt(val, 10) === 6) {
              return Array(6).fill(area).join(" ");
            } else {
              return Array(parseInt(val, 10)).fill(area).join(" ");
            }
          })
          .join(" ");
        return `'${areas}'`;
      })
      .join(" ");

    const gridConfig = `{
      "2": {
        "gridTemplateRows": "repeat(${values.length}, 1fr)",
        "gridTemplateColumns": "repeat(6, 1fr)",
        "gridTemplateAreas": "${rows}"
      }
    }`;

    setGridStyle(gridConfig);
  };

  const handleResetForm = () => {
    setRowCount("");
    setFormAreas([]);
    formRefs.current = [];
  };

  useEffect(() => {
    setGridStyle(defaultDesignPg2);
  }, []);

  return (
    <Flex
      gap="5"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontFamily={"Karla"}
          >
            <Text as={"span"} position={"relative"}>
              Generate
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Design PG2
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Generate design PG2 kamu dengan mudah. Cukup masukan format CSS Grid
            Area dengan column 6 dan row bebas. Jika ingin full 1 gambar dalam 1
            baris bisa masukan <Badge colorScheme="red">6</Badge> jika mau 1
            baris 2 gambar masukan <Badge colorScheme="red">3,3</Badge> Dan jika
            mau 1 baris 3 gambar masukan <Badge colorScheme="red">2,2,2</Badge>
          </Text>
        </Stack>
        <form
          style={{
            boxShadow:
              "1px 1px 5px rgba(0,0,0,0,2), -1px -1px 5px rgba(0,0,0,0.2)",
            margin: "auto",
            width: "100%",
          }}
        >
          <Stack maxH="300px" overflow="auto" mb="5" mt={5}>
            {formAreas.length === 0 && (
              <FormControl>
                <FormLabel>Row</FormLabel>
                <Flex alignItems="center" gap="3">
                  <Input
                    type="text"
                    placeholder="masukan row pg2"
                    value={rowCount}
                    onChange={(e) => setRowCount(e.target.value)}
                  />
                  <Button onClick={generateFormAreas} colorScheme="blue">
                    Generate
                  </Button>
                </Flex>
              </FormControl>
            )}
            {formAreas.map((areas) => areas)}
          </Stack>
          {formAreas.length !== 0 && (
            <>
              <Button onClick={generateDesignPg2} colorScheme="blue">
                Generate design PG2
              </Button>

              <Button ml={5} colorScheme="red" onClick={handleResetForm}>
                Reset
              </Button>
            </>
          )}
        </form>
      </Box>

      <Box w="700px" h="300px" rounded="xl">
        <CodePreview code={gridStyle} codeName="Design PG2" language="json" />
      </Box>
    </Flex>
  );
}
