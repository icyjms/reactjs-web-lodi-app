import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import LodiText from '../../components/LodiText';
// import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { offers } from 'utils/config';

// import GetNotified from 'components/GetNotified';
import Section from 'components/Section';
import { ReactComponent as PartnerImg } from 'assets/img/partner.svg';

function Partner() {
  return (
    <Section id="partner">
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Flex direction="column" justifyContent="space-evenly">
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color="dark.100"
                mb={5}
                fontSize={{ base: '4xl', sm: '5xl', lg: '6xl', '2xl': '8xl' }}
              >
                BE A
                {/* <Box
                  width={{ base: '60px', md: '96px', lg: '160px' }}
                  display="inline-block"
                >
                  <Logo width="100%" height="100%" />
                </Box> */}
                <LodiText />
                PARTNER
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'xl', lg: 'xl', '2xl': '2xl' }}
                color="gray.400"
              >
                Give your business a boost
              </Text>
            </Box>
            <Box pb={8}>
              <Text fontSize={{ base: 'md', md: 'xl', lg: 'xl', '2xl': '2xl' }}>
                We offer the best way for your businesses to tap the big market
              </Text>
            </Box>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Flex
                direction="column"
                justifyContent="space-evenly"
                gridGap={16}
              >
                <SimpleGrid
                  autoFlow={{ base: 'row', lg: 'column' }}
                  templateRows={{ lg: 'repeat(3, 1fr)' }}
                  justifyContent="center"
                  columns={{ base: 1, lg: 2 }}
                  spacing={4}
                >
                  {offers.map((item, i) => (
                    <HStack key={i} align="top">
                      <Box color="yellow" px={2}>
                        <Icon as={CheckIcon} />
                      </Box>
                      <VStack align="start">
                        <Text
                          fontSize={{
                            base: 'md',
                            md: 'md',
                            lg: '2xl',
                            '2xl': '2xl',
                          }}
                        >
                          {item}
                        </Text>
                      </VStack>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Flex>
            </Stack>
          </Flex>
          <Center>
            <PartnerImg />
          </Center>
        </Stack>
        {/* <GetNotified index_key="1" /> */}
      </Container>
    </Section>
  );
}

export default Partner;
