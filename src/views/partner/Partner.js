import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  HStack,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import LodiText from 'components/LodiText';
import { offers } from 'utils/config';

import { ReactComponent as PartnerImg } from 'assets/img/partner.svg';
import GetNotified from 'components/GetNotified';
import Section from 'components/Section';

function Partner() {
  return (
    <Section id="partner">
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Box mb={{ base: 8, md: 20 }}>
          <Heading
            color="dark.100"
            mb={5}
            fontSize={{ base: '4xl', md: '6xl' }}
          >
            BE A
            <LodiText />
            PARTNER
          </Heading>
          <Text fontSize="xl" color="gray.400">
            Give your restaurant and online business a boost
          </Text>
        </Box>
        <Box py="4">
          <Text>
            We offer the best way for businesses such as yours to tap into a big
            market online!
          </Text>
        </Box>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Flex direction="column" justifyContent="space-evenly">
            <SimpleGrid
              templateRows="repeat(4, 1fr)"
              autoFlow="column"
              columns={{ base: 1, md: 2 }}
              spacing={8}
            >
              {offers.map((item) => (
                <HStack key={item} align="top">
                  <Box color="yellow" px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align="start">
                    <Text>{item}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
            <GetNotified index_key="1" />
          </Flex>
          <Box>
            <PartnerImg />
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Partner;
