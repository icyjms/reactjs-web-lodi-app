import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';

import GetNotified from 'components/GetNotified';
import Section from 'components/Section';
import { ReactComponent as AppStoreLogo } from 'assets/img/app-store-badge.svg';
import { ReactComponent as DeviceImg } from 'assets/img/pre-launch-device.svg';
import { ReactComponent as GooglePlayLogo } from 'assets/img/google-play-badge.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/img/logo.svg';

function Home() {
  const subtext = 'Get notified when we launch';

  const goTo = (path) => {
    // window.history.pushState({}, document.title, path);
    window.location.href = path;
  };

  const toast = useToast();
  const toastIdRef = useRef();

  function addToast() {
    toastIdRef.current = toast({
      description: 'Soon to be available',
      position: 'top-right',
      isClosable: true,
    });
  }

  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Stack
          justifyContent="space-between"
          spacing={{ base: 16, md: 10 }}
          py={{ base: 4, md: 16 }}
          direction={{ base: 'column', lg: 'row' }}
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
                fontSize={{ base: '4xl', sm: '5xl', lg: '7xl', '2xl': '8xl' }}
              >
                <Text
                  as="span"
                  color="dark.100"
                  style={{ textTransform: 'uppercase' }}
                >
                  Parating na ang bagong &nbsp;
                  <Box
                    width={{ base: '55px', sm: '80px', lg: '120px' }}
                    display="inline-block"
                  >
                    <Logo width="100%" height="100%" />
                  </Box>
                  &nbsp; ng delivery!
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
                <GetNotified index_key="0" />
              </Stack>
            </Stack>
            <Stack
              direction={{ base: 'column', xl: 'row' }}
              spacing={[4, 8, 12]}
            >
              <Stack direction="column">
                <Text color="gray.500">Ikaw ba ay may negosyo?</Text>
                <Box>
                  <Button bg="brand.100" onClick={() => goTo('#partner')}>
                    MAGING LODI PARTNER
                  </Button>
                </Box>
              </Stack>
              <Stack direction="column">
                <Text color="gray.500">Ikaw ba ay isang Rider?</Text>
                <Box>
                  <Button as={Link} to="/rider" backgroundColor="cyan">
                    MAGING LODI RIDER
                  </Button>
                </Box>
              </Stack>
            </Stack>
            <Stack>
              <Flex>
                <Box maxW="3xl" py={10}>
                  <Text color="gray.500">Coming Soon!</Text>
                  <Box onClick={addToast} as="button">
                    <AppStoreLogo />
                  </Box>
                  &nbsp;&nbsp;&nbsp;
                  <Box onClick={addToast} as="button">
                    <GooglePlayLogo />
                  </Box>
                </Box>
              </Flex>
            </Stack>
          </Stack>
          {
            <Flex
              display={{ base: 'none', sm: 'block' }}
              flex={1}
              justify="center"
              align="center"
              position="relative"
              // px={[4, 8, 12]}
            >
              {
                <Box position="relative" width="full" overflow="hidden">
                  <DeviceImg />
                </Box>
              }
            </Flex>
          }
        </Stack>
      </Container>
    </Section>
  );
}

export default Home;
