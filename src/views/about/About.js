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
import { contactNumbers, officeAddress } from 'utils/config';

import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { ReactComponent as FB } from 'assets/img/fb.svg';
import { ReactComponent as IG } from 'assets/img/ig.svg';
import { ReactComponent as YT } from 'assets/img/youtube.svg';

const About = () => {
  return (
    <Section direction="column">
      <Box w="full" h="50vh">
        <Image
          width="full"
          objectFit="cover"
          height="full"
          // src="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1484&q=80"
          src="/about-photo.jpg"
        />
      </Box>
      <Stack px={[4, 8, 12]} w="full" alignItems="center">
        <Flex direction="column" justifySelf="center" maxW="6xl">
          <Heading fontWeight="normal" py={[2, 4, 6]}>
            LODI, the newest service of Logistikus Inc., offers on-demand
            deliveries.
          </Heading>
          <Text>
            Though the company is relatively new in the industry, it is built on
            a solid foundation with the best minds in the business.
            <b> Our Management Team and employees</b> have a collective
            experience in supply chain logistics for over 20 years. These
            logistic experts share the same goal—to provide the kind of delivery
            services that would respond{' '}
            <b>
              to the needs of a customer group based on its business demands.
            </b>
          </Text>
          <Text py={2}>
            LODI aims to be the leading delivery booking app in the country. As
            the need for <b>on-demand deliveries</b> continue to rise, we will
            set the bar higher by bringing the best possible customer
            experience.
          </Text>
          <SimpleGrid py={[2, 4, 8]} columns={{ base: 1, md: 2 }}>
            <Stack direction="column">
              <Text>
                Got some questions? Do you have a concern about one of our
                items? Do you need further assistance?
              </Text>
              <Stack h="5px"></Stack>
              <Text fontWeight="bold" fontSize="smaller">
                Talk to us today!
              </Text>
              <VStack align="start">
                <Text fontSize="smaller">
                  <EmailIcon /> support@lodi.com.ph
                </Text>
                {contactNumbers.map((item, i) => (
                  <Text key={i} fontSize="smaller">
                    <PhoneIcon /> {item}
                  </Text>
                ))}
              </VStack>
              <Stack h="5px"></Stack>
              <Text fontWeight="bold" fontSize="smaller">
                Connect to us online!
              </Text>
              <HStack align="start">
                <FB />
                <IG />
                <YT />
              </HStack>
              <Stack h="5px"></Stack>
              <Text fontWeight="bold" fontSize="smaller">
                Visit our Office
              </Text>
              {officeAddress.map((text, i) => (
                <Text key={i} fontSize="smaller">
                  {text}
                </Text>
              ))}
            </Stack>
            <Box>
              <iframe
                title="LODI"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.290872488916!2d121.08570251535168!3d14.582494381428434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7a13ab1a17f%3A0xac5420df76fd43ff!2sLogistikus!5e0!3m2!1sen!2sph!4v1627545002092!5m2!1sen!2sph"
                src="https://maps.google.com/maps?q=Logistikus%20Express%20Philippines,%20Inc.%2020th%20Floor,%20Inoza%20Tower%2040th%20Avenue,%20Bonifacio%20Global%20City%20Taguig%20City,%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
