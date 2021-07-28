import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";

export const Shortlink = () => {
  return (
    <Center p="10">
      <VStack maxW="xl" shadow="md" w="full" p="10">
        <Flex w="full">
          <Input variant="filled" placeholder="Paste your URL here" />
          <Button ml="5">Shorten</Button>
        </Flex>
        <Flex w="full">
          <Input placeholder="Custom link (optional)" />
        </Flex>
      </VStack>
    </Center>
  );
};
