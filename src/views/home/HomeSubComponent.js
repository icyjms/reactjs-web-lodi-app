import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

import { features } from 'utils/config';

const HomeSubComponent = () => {
  return (
    <Box bg="dark.100" position="relative">
      <Container maxW="7xl" zIndex={10} position="relative">
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color="gray.400"
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 16, xl: 20 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color="white"
                mb={5}
                fontSize={{ base: '4xl', md: '6xl' }}
              >
                WE’RE HERE FOR YOU IN THE NEW NORMAL!
              </Heading>
              <Text fontSize="xl" color="gray.400">
                Fast, easy and hassle-free on-demand delivery service
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {features.map((item) => (
                <Stack
                  justify="center"
                  direction={{ base: 'column', lg: 'row' }}
                  key={item.title}
                >
                  <Avatar bg={item.bg} />
                  <Flex flexDirection="column">
                    <Text
                      fontFamily="heading"
                      fontSize="3xl"
                      color="white"
                      mb={3}
                    >
                      {item.title}
                    </Text>
                    <Text fontSize="xl" color="gray.400">
                      {item.content}
                    </Text>
                  </Flex>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomeSubComponent;
