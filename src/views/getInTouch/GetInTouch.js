import FormItem from 'components/FormItem';
import FormTextArea from 'components/FormTextArea';
import React, { useCallback, useReducer, useRef } from 'react';
import Section from 'components/Section';
import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  InputLeftAddon,
  Spacer,
  Stack,
  VisuallyHidden,
  useToast,
} from '@chakra-ui/react';
import { ReactComponent as EmailImg } from 'assets/img/email.svg';
import { Form, Formik } from 'formik';
import {
  GOOGLE_FORM_ACTION_URL,
  GOOGLE_FORM_ENTRIES,
  init_state,
  init_values,
  validationSchema,
} from './get-in-touch-config';

function GetInTouch() {
  const formRef = useRef();
  const toast = useToast();

  const dispatch = (state, new_state) => ({
    ...state,
    ...new_state,
  });
  const [state, setState] = useReducer(dispatch, init_state);
  const [values, setValues] = useReducer(dispatch, init_values);

  const { loading, submit } = state;

  function handleGoogleFormLoad() {
    if (submit) {
      setState({ loading: false, iframe_loaded: true });
      toast({
        title: 'Thank you.',
        description: "We'll send you an update, soon!",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      formRef.current.resetForm();
      setValues({
        ...init_values, //reset
      });
      // submitted();
    }
  }

  function generateGoogleForm() {
    return (
      <>
        <VisuallyHidden>
          <form
            id={'contact-us-signup-form'}
            target={'contact-us-response-iframe'}
            action={GOOGLE_FORM_ACTION_URL}
            method="post"
          >
            {Object.entries(GOOGLE_FORM_ENTRIES).map((item, x) => {
              const field_name = item[0];
              const entry_id = item[1];
              const value = values[field_name];
              return (
                <input
                  key={x}
                  data-test-id="aa"
                  type="text"
                  name={entry_id}
                  value={value || ''}
                  onChange={() => {}}
                  required
                />
              );
            })}
            <input data-test-id="submit-button" type="submit" />
            <iframe
              title="contact-us-iframe"
              id={'contact-us-response-iframe'}
              name={'contact-us-response-iframe'}
              onLoad={handleGoogleFormLoad}
            ></iframe>
          </form>
        </VisuallyHidden>
      </>
    );
  }

  const handleInputChange = useCallback(({ event }) => {
    const { name, value } = event.target;
    setValues({
      [name]: value,
    });
    // setFormValidState({
    //   errors,
    //   touched,
    // });
  }, []);

  const handleNotified = () => {
    const { current = {} } = formRef;
    const { submitForm = () => {} } = current;
    if (!loading) {
      submitForm();
    }
  };

  function onSubmitToAdmin(values /* form */) {
    setState({ loading: true, submit: true });
    document.getElementById('contact-us-signup-form').submit();
    return values;
  }

  return (
    <>
      {generateGoogleForm()}
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
                innerRef={formRef}
                initialValues={{ ...values }}
                onSubmit={onSubmitToAdmin}
                validateOnBlur
                validationSchema={validationSchema}
              >
                {({
                  isSubmitting,
                  handleSubmit,
                  handleChange,
                  errors,
                  touched,
                }) => (
                  <Form id="send-email-form" onSubmit={handleSubmit}>
                    <FormItem
                      name="full_name"
                      label="Full Name"
                      value={values.full_name || ''}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange({ event, errors, touched });
                      }}
                    />
                    <FormItem
                      name="email"
                      label="Email"
                      value={values.email || ''}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange({ event, errors, touched });
                      }}
                    />
                    <FormItem
                      name="mobile_number"
                      label="Mobile Number"
                      value={values.mobile_number || ''}
                      leftAddon={<InputLeftAddon children="+63" />}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange({ event, errors, touched });
                      }}
                    />
                    <FormItem
                      name="subject"
                      label="Subject"
                      value={values.subject || ''}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange({ event, errors, touched });
                      }}
                    />
                    <FormTextArea
                      name="message"
                      label="Message"
                      value={values.subject || ''}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange({ event, errors, touched });
                      }}
                    />
                    <Button
                      mt="8"
                      onClick={handleNotified}
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
    </>
  );
}

export default GetInTouch;
