import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { sections } from "utils/config";

import { ReactComponent as Logo } from "assets/img/logo.svg";
import { Link as RouterLink } from "react-router-dom";

const NavLink = ({ link, children }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={"md"}
    _active={{
      color: "brand.500",
    }}
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("dark.100"),
    }}
    color="brand.100"
    to={link}
  >
    {children}
  </Link>
);

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="12xl" px={[4, 8, 16]}>
      <Box>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box as={RouterLink} to="/">
            <Logo />
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* nav items */}
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {sections.map((item) => (
              <NavLink link={item.link} key={item.name}>
                {item.name}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {sections.map((item) => (
                <NavLink link={item.link} key={item.name}>
                  {item.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}
export default Navigation;
