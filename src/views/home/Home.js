import {
  Box,
  // Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';

// import GetNotified from 'components/GetNotified';
import Section from 'components/Section';
import { ReactComponent as AppStoreLogo } from 'assets/img/app-store-badge.svg';
import { ReactComponent as DeviceImg } from 'assets/img/group-image.svg';
import { ReactComponent as GooglePlayLogo } from 'assets/img/google-play-badge.svg';
// import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from 'assets/img/logo.svg';
import IdolText from '../../components/IdolText';

function Home() {
  // const subtext = 'Get notified when we launch';

  /*  const goTo = (path) => {
    // window.history.pushState({}, document.title, path);
    window.location.href = path;
  }; */

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
                fontSize={{ base: '4xl', sm: '5xl', lg: '6xl', '2xl': '8xl' }}
                marginTop="75px"
              >
                <Text
                  as="span"
                  color="dark.100"
                  style={{ textTransform: 'uppercase' }}
                >
                  Parating na ang bagong
                  <IdolText />
                  ng delivery!
                </Text>
              </Heading>
            </Stack>
            <Stack>
              <Text fontSize={{ base: 'md', '2xl': '2xl' }} color="gray.500">
                Gusto mo bang maging LODI sa negosyo? Be a LODI partner!
              </Text>
            </Stack>
            <Stack>
              <Flex>
                <Box maxW="3xl" py={10}>
                  <Text color="gray.500">Available Soon!</Text>
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
                // <Box position="relative" width="full" overflow="hidden">
                <Center>
                  <DeviceImg />
                </Center>
                // </Box>
              }
            </Flex>
          }
        </Stack>
      </Container>
    </Section>
  );
}

export default Home;
