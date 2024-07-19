"use client";

import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            display={"flex"}
            fontFamily={"Karla"}
            mx={"auto"}
          >
            Simple koendang tools
          </Heading>
          <Text color={"gray.500"}>
            Gunakan aplikasi ini untuk membantu kita dalam mengerjakan undangan
            client. Khususnya anda dapat mencopy beberapa command dari pada
            menulis berulang kali. Disini juga terdapat{" "}
            <b style={{ color: "#0ea5e9" }}>Tools Generate Design PG2</b> yang
            memudahkan kita dalam mengatur design PG2.
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
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
