import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container maxW={"4xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Kerjakan dengan mudah <br />
          <Text as={"span"} color={"blue.400"}>
            Client koendang mu
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          Monetize your content by charging your most loyal readers and reward
          them loyalty points. Give back to your loyal readers by granting them
          access to your pre-releases and sneak-peaks.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"blue.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "blue.500",
            }}
          >
            Get Started
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
