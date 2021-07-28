import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Container,
} from '@chakra-ui/react';

import { ReactComponent as DeviceImg } from 'assets/img/pre-launch-device.svg';
import GetNotified from 'components/GetNotified';
import LodiText from 'components/LodiText';
import Section from 'components/Section';
import { Link } from 'react-router-dom';

function Home() {
  const subtext = 'Get notified when we launch';

  const goTo = (path) => {
    // window.history.pushState({}, document.title, path);
    window.location.href = path;
  };

  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Stack
          justifyContent="space-between"
          spacing={{ base: 16, md: 10 }}
          py={{ base: 4, md: 16 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack>
            <Stack
              maxW="4xl"
              flex={2}
              height="100%"
              spacing={{ base: 8, md: 10 }}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: '4xl', sm: '3xl', lg: '7xl' }}
              >
                <Text
                  as="span"
                  color="dark.100"
                  style={{ textTransform: 'uppercase' }}
                >
                  Parating na ang bagong
                  <LodiText />
                  ng delivery!
                </Text>
              </Heading>
              <Stack>
                <Text
                  color="gray.500"
                  fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                >
                  {subtext}
                  {/* Gusto mo bang maging LODI sa negosyo?
              <br /> Be a LODI partner! */}
                </Text>
                <GetNotified />
              </Stack>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={[4, 8, 12]}
            >
              <Stack direction="column">
                <Text color="gray.500">Ikaw ba ay may negosyo?</Text>
                <Button bg="brand.100" onClick={() => goTo('#partner')}>
                  BE A LODI PARTNER
                </Button>
              </Stack>
              <Stack direction="column">
                <Text color="gray.500">Ikaw ba ay Rider?</Text>
                <Button as={Link} to="/rider">
                  BE A LODI RIDER
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Flex
            display={{ base: 'none', sm: 'block' }}
            flex={1}
            justify="center"
            align="center"
            position="relative"
            px={[4, 8, 12]}
          >
            <Box position="relative" width="full" overflow="hidden">
              <DeviceImg />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Section>
  );
}

export default Home;
