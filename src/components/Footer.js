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
import { ReactComponent as GooglePlayLogo } from 'assets/img/google-play-badge.svg';
import { ReactComponent as Logo } from 'assets/img/logo.svg';

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
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Flex direction="column" justifyContent="space-evenly">
            <Box as={Stack} maxW={'3xl'} py={10}>
              <Box py={4}>
                <Logo />
              </Box>
              <SimpleGrid
                justifyContent="center"
                columns={{ base: 1, sm: 2, md: 4 }}
                spacing={4}
              >
                <Link color="light.100" href="#">
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
            </Box>
          </Flex>
          <Spacer />
          <Stack>
            <Flex>
              <Box /* as={Stack} */ maxW={'3xl'} py={16}>
                <Box onClick={addToast} as="button">
                  <AppStoreLogo />
                </Box>
                &nbsp;
                <Box onClick={addToast} as="button">
                  <GooglePlayLogo />
                </Box>
              </Box>
            </Flex>
          </Stack>
        </Stack>
        <Box>
          <Text color="light.100" fontWeight="light" fontSize="smaller">
            © {new Date().getFullYear()} LODI. All rights reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
