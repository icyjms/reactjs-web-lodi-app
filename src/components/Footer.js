import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/img/logo.svg';

function Footer() {
  return (
    <Box w="full" bg="dark.100">
      <Container maxW="12xl" px={[4, 8, 16]}>
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
            <Link as={RouterLink} color="light.100" to="/terms-and-conditions">
              Terms & Conditions
            </Link>
          </SimpleGrid>
          <Box>
            <Text color="light.100" fontWeight="light" fontSize="smaller">
              © {new Date().getFullYear()} LODI. All rights reserved
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
