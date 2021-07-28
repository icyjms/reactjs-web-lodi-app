import { Button, Input, Stack } from '@chakra-ui/react';

const GetNotified = () => {
  return (
    <Stack
      maxW="xl"
      align="center"
      spacing={{ base: 4, sm: 6 }}
      direction="row"
    >
      <Input placeholder="Email" />
      <Button bg="brand.100" px={12}>
        GET NOTIFIED
      </Button>
    </Stack>
  );
};

export default GetNotified;
