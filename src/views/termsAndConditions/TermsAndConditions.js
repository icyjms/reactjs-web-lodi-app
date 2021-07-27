import { Heading, Text, Container } from '@chakra-ui/react';

import Section from 'components/Section';

function TermsAndConditions() {
  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Heading
          mt={[4, 8, 24]}
          lineHeight={1.1}
          fontWeight={500}
          fontSize={{ base: '4xl', sm: '3xl', lg: '7xl' }}
        >
          <Text
            as="span"
            color="dark.100"
            style={{ textTransform: 'uppercase' }}
          >
            Terms and Conditions
          </Text>
        </Heading>
      </Container>
    </Section>
  );
}

export default TermsAndConditions;
