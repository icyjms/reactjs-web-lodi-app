import Section from 'components/Section';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { contactNumbers } from 'utils/config';

import { ReactComponent as FB } from 'assets/img/fb.svg';
import { ReactComponent as IG } from 'assets/img/ig.svg';
import { PhoneIcon } from '@chakra-ui/icons';

const About = () => {
  return (
    <Section direction="column">
      <Box w="full" h="50vh">
        <Image
          width="full"
          objectFit="cover"
          height="full"
          src="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1484&q=80"
        />
      </Box>
      <Stack px={[4, 8, 12]} w="full" alignItems="center">
        <Flex direction="column" justifySelf="center" maxW="6xl">
          <Heading fontWeight="normal" py={[2, 4, 6]}>
            We are LODI
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text py={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quod
            beatae rerum quidem eius quisquam a molestiae modi itaque illum.
          </Text>
          <SimpleGrid py={[2, 4, 8]} columns={{ base: 1, md: 2 }}>
            <Stack direction="column">
              <Text>
                Got some questions? Do you have a concern about one of our
                items? Do you need further assistance?
              </Text>
              <Text fontWeight="bold" fontSize="smaller">
                Talk to us today!
              </Text>
              <VStack align="start">
                {contactNumbers.map((item, i) => (
                  <Text key={i} fontSize="smaller">
                    <PhoneIcon /> {item}
                  </Text>
                ))}
              </VStack>
              <Text fontWeight="bold" fontSize="smaller">
                Connect to us online!
              </Text>
              <HStack align="start">
                <FB />
                <IG />
              </HStack>
            </Stack>
            <Box>
              <iframe
                title="LODI"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.290872488916!2d121.08570251535168!3d14.582494381428434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7a13ab1a17f%3A0xac5420df76fd43ff!2sLogistikus!5e0!3m2!1sen!2sph!4v1627545002092!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </SimpleGrid>
        </Flex>
      </Stack>
    </Section>
  );
};

export default About;
