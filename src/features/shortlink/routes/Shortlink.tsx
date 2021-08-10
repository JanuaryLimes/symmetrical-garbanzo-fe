import { Button, Center, Flex, Input, VStack } from "@chakra-ui/react";
import { createShortlink } from "../api";

export const Shortlink = () => {
  async function onShortenClick() {
    try {
      const result = await createShortlink({ data: { url: "google.com" } });
      console.log("result", { result });
    } catch (error) {
      //TODO notification
    }
  }
  return (
    <Center p="10">
      <VStack maxW="xl" shadow="md" w="full" p="10">
        <Flex w="full">
          <Input variant="filled" placeholder="Paste your URL here" />
          <Button onClick={onShortenClick} ml="5">
            Shorten
          </Button>
        </Flex>
        <Flex w="full">
          <Input placeholder="Custom link (optional)" />
        </Flex>
      </VStack>
    </Center>
  );
};
