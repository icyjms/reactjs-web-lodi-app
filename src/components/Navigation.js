import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { sections } from 'utils/config';

import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';

const NavLink = ({ link, children, activeLink }) => (
  <Link
    exact
    as={RouterLink}
    px={2}
    py={1}
    _active={{
      color: 'brand.500',
      outline: 'none',
    }}
    _focus={{
      color: 'brand.500',
      outline: 'none',
    }}
    _hover={{
      textDecoration: 'none',
      outline: 'none',
      color: useColorModeValue('dark.100'),
    }}
    color="brand.100"
    to={link}
    variant={activeLink === link ? 'active' : ''}
  >
    {children}
  </Link>
);

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(pathname);
    return () => {};
  }, [pathname]);

  const goTo = (path) => {
    window.location.href = `/${path}`;
  };

  return (
    <Container maxW="12xl" px={[4, 2, 2]}>
      <Box>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          style={{ boxShadow: '0 10px 8px 0 rgb(0 0 0 / 10%' }}
        >
          <Box as={RouterLink} to="/">
            <div /* className="logo" */>
              <Logo width={105} height={75} />
            </div>
          </Box>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* nav items */}
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {sections.map((item) => (
              <NavLink activeLink={activeLink} link={item.link} key={item.name}>
                {item.name}
              </NavLink>
            ))}
            <Link
              style={{ textDecoration: 'none' }}
              onMouseOver={(e) => (e.target.style.color = 'black')}
              color="#f34854"
              onClick={() => {
                goTo('#contact-us');
              }}
            >
              Contact Us
            </Link>
            <Box as={RouterLink} to="/rider">
              <Button backgroundColor="cyan" color="white">
                BE A LODI RIDER
              </Button>
            </Box>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {sections.map((item) => (
                <NavLink link={item.link} key={item.name}>
                  {item.name}
                </NavLink>
              ))}
              <Link
                style={{ textDecoration: 'none', marginLeft: '10px' }}
                onMouseOver={(e) => (e.target.style.color = 'black')}
                color="#f34854"
                onClick={() => {
                  goTo('#contact-us');
                }}
              >
                Contact Us
              </Link>
              <Box as={RouterLink} to="/rider">
                <Button backgroundColor="cyan" color="white">
                  BE A LODI RIDER
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}
export default Navigation;
