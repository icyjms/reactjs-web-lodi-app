import React from 'react';
import Section from 'components/Section';
import { ReactComponent as Benefit1 } from 'assets/img/benefits/benefit1.svg';
import { ReactComponent as Benefit2 } from 'assets/img/benefits/benefit2.svg';
import { ReactComponent as Benefit3 } from 'assets/img/benefits/benefit3.svg';
import { ReactComponent as Benefit4 } from 'assets/img/benefits/benefit4.svg';
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { benefitsData } from 'utils/config';

function Benefits() {
  const benefits = [Benefit1, Benefit2, Benefit3, Benefit4];
  return (
    <Section>
      <Container
        backgroundColor="black"
        maxW="12xl"
        px={[4, 8, 16]}
        py={[4, 8, 16]}
      >
        <Heading
          color="white"
          mb={5}
          fontSize={{ base: '4xl', md: '6xl', lg: '7xl', '2xl': '8xl' }}
        >
          WE’RE HERE FOR YOU IN THE NEW NORMAL!
        </Heading>
        <Box pb={4}>
          <Text fontSize={{ base: 'md', '2xl': '2xl' }} color="white">
            Fast, easy and hassle-free on-demand delivery service
          </Text>
        </Box>
        <Divider color="white" borderBottomWidth={3} />
        <SimpleGrid
          autoFlow={{ base: 'row', lg: 'column' }}
          templateRows={{ lg: 'repeat(2, 1fr)' }}
          justifyContent="center"
          columns={{ base: 1, sm: 2, lg: 2 }}
          spacing={16}
          py={[4, 8, 16]}
        >
          {benefitsData.map((item, i) => (
            <HStack key={i} align="top">
              <Box color="yellow" px={2}>
                <Icon as={benefits[i]} fontSize="100px" />
              </Box>
              <VStack align="start">
                <Text
                  color="white"
                  fontSize={{
                    base: 'md',
                    md: 'md',
                    lg: '2xl',
                    '2xl': '2xl',
                  }}
                  marginBottom="unset"
                  fontWeight="bold"
                >
                  {item.title}
                </Text>
                <Text color="white">{item.description}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  );
}

export default Benefits;
