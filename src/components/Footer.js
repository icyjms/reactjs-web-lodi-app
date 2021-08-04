import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useRef } from 'react';

import { ReactComponent as AppStoreLogo } from 'assets/img/app-store-badge.svg';
import { ReactComponent as FbLogo } from 'assets/img/fb.svg';
import { ReactComponent as GooglePlayLogo } from 'assets/img/google-play-badge.svg';
import { ReactComponent as IgLogo } from 'assets/img/ig.svg';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { ReactComponent as YoutubeLogo } from 'assets/img/youtube.svg';

function Footer() {
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
    <Box w="full" bg="dark.100">
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          height={{ base: '', md: '110px' }}
        >
          <Flex direction="column" justifyContent="space-evenly">
            {/* <Box as={Stack} maxW={'3xl'} py={10}> */}
            <Box py={4}>
              <Logo />
            </Box>
            <SimpleGrid
              justifyContent="center"
              columns={{ base: 1, sm: 2, md: 4 }}
              // spacing={2}
            >
              <Link color="light.100" href="/about">
                About Us
              </Link>
              <Link as={RouterLink} color="light.100" to="/privacy-policy">
                Privacy Policy
              </Link>
              <Link
                as={RouterLink}
                color="light.100"
                to="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </SimpleGrid>
            {/* </Box> */}
          </Flex>
          <Spacer />
          <Box
            paddingTop={{ base: '0px', md: '40px' }}
            // paddingBottom={{ base: '30px' }}
          >
            <Text color="gray.500">Follow Us</Text>

            <Flex>
              <Link
                bgColor="white"
                borderRadius="5px"
                target="_blank"
                href="https://www.facebook.com/LogistikusExpress/"
              >
                <FbLogo />
              </Link>
              &nbsp; &nbsp;
              <Link
                target="_blank"
                href="https://www.instagram.com/logistikusexpress/"
              >
                <IgLogo />
              </Link>
              &nbsp; &nbsp;
              <Link target="_blank" href="http://www.logistikus-express.tv/">
                <YoutubeLogo />
              </Link>
            </Flex>
          </Box>
          <Spacer />
          <Box
            paddingTop={{ base: '0px', md: '40px' }}
            // paddingBottom={{ base: '30px' }}
          >
            <Text color="gray.500">Available Soon!</Text>
            <Box onClick={addToast} as="button">
              <AppStoreLogo />
            </Box>
            &nbsp;
            <Box onClick={addToast} as="button">
              <GooglePlayLogo />
            </Box>
          </Box>
        </Stack>
        <Box paddingBottom={5}>
          <Text color="light.100" fontWeight="light" fontSize="smaller">
            © {new Date().getFullYear()} LODI. All rights reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
