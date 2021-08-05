import FormItem from 'components/FormItem';
import React from 'react';
import Section from 'components/Section';
import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { ReactComponent as EmailImg } from 'assets/img/email.svg';
import { Form, Formik } from 'formik';

function GetInTouch() {
  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]} py={[4, 8, 16]}>
        <Heading
          mb={5}
          fontSize={{ base: '4xl', md: '6xl', lg: '7xl', '2xl': '8xl' }}
        >
          GET IN TOUCH
        </Heading>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Spacer />
          <Center>
            <EmailImg />
          </Center>
          <Spacer />
          <Flex
            justify="center"
            align="center"
            position="relative"
            maxW="3xl"
            px={[4, 8, 12]}
          >
            <Formik
              initialValues={''}
              onSubmit={() => {}}
              validateOnBlur
              validationSchema={''}
            >
              <Form id="send-email-form" onSubmit={() => {}}>
                <Stack direction={{ base: 'column', md: 'row' }}>
                  <FormItem name="full_name" label="Full Name" />
                  <FormItem name="email" label="Email" />
                  <FormItem name="mobile_number" label="Mobile Number" />
                  <FormItem name="subject" label="Subject" />
                  <FormItem name="message" label="Message" />
                </Stack>
                <Button
                  mt="8"
                  type="submit"
                  isLoading={false}
                  loadingText="Submitting"
                  bg="cyan"
                  isFullWidth
                >
                  SEND
                </Button>
              </Form>
            </Formik>
          </Flex>
          <Spacer />
        </Stack>
      </Container>
    </Section>
  );
}

export default GetInTouch;
