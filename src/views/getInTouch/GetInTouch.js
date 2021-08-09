import FormItem from 'components/FormItem';
import React, { useState } from 'react';
import Section from 'components/Section';
import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
  // useToast,
} from '@chakra-ui/react';
import { ReactComponent as EmailImg } from 'assets/img/email.svg';
import { Form, Formik } from 'formik';
import { initValues, validationSchema } from './get-in-touch-config';

function GetInTouch() {
  // const toast = useToast();
  const [loading, setLoading] = useState(false);

  function onSubmitToAdmin(values /* form */) {
    setLoading(true);
    /* createRiderApplication(values)
      .then((response) => {
        const { message = '' } = response;
        toast({
          title: 'Rider Application',
          description: message,
          status: 'success',
          position: 'top-right',
        });
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        setLoading(false);
        form.resetForm();
      }); */

    return values;
  }

  return (
    <Section id="contact-us">
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
              initialValues={initValues}
              onSubmit={onSubmitToAdmin}
              validateOnBlur
              validationSchema={validationSchema}
            >
              {({ isSubmitting, handleSubmit }) => (
                <Form id="send-email-form" onSubmit={handleSubmit}>
                  <FormItem name="full_name" label="Full Name" />
                  <FormItem name="email" label="Email" />
                  <FormItem name="mobile_number" label="Mobile Number" />
                  <FormItem name="subject" label="Subject" />
                  <FormItem name="message" label="Message" />
                  <Button
                    mt="8"
                    type="submit"
                    isLoading={isSubmitting || loading}
                    loadingText="Submitting"
                    bg="cyan"
                    isFullWidth
                  >
                    SEND
                  </Button>
                </Form>
              )}
            </Formik>
          </Flex>
          <Spacer />
        </Stack>
      </Container>
    </Section>
  );
}

export default GetInTouch;
