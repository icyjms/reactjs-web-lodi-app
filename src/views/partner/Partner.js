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

import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { offers } from 'utils/config';

import GetNotified from 'components/GetNotified';
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
                fontSize={{ base: '4xl', md: '6xl', lg: '7xl', '2xl': '8xl' }}
              >
                BE A &nbsp;
                <Box
                  width={{ base: '62px', md: '96px' }}
                  display="inline-block"
                >
                  <Logo width="100%" height="100%" />
                </Box>
                &nbsp; PARTNER
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'xl', lg: 'xl', '2xl': '2xl' }}
                color="gray.400"
              >
                Give your restaurant and online business a boost
              </Text>
            </Box>
            <Box pb={8}>
              <Text fontSize={{ base: 'md', md: 'xl', lg: 'xl', '2xl': '2xl' }}>
                We offer the best way for businesses such as yours to tap into a
                big market online!
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
                  templateRows={{ lg: 'repeat(4, 1fr)' }}
                  justifyContent="center"
                  columns={{ base: 1, lg: 2 }}
                  spacing={8}
                >
                  {offers.map((item) => (
                    <HStack key={item} align="top">
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
                <GetNotified index_key="1" />
              </Flex>
            </Stack>
          </Flex>
          <Center>
            <PartnerImg />
          </Center>
        </Stack>
      </Container>
    </Section>
  );
}

export default Partner;
