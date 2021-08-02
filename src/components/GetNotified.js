import FormItem from 'components/FormItem';
import { Box, Button, Stack, VisuallyHidden, useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useCallback, useReducer, useRef } from 'react';

const GOOGLE_FORM_ENTRIES = {
  email: 'entry.1240738178',
};

const GOOGLE_FORM_ACTION_URL =
  process.env.REACT_APP_CONTACTUS_GOOGLE_FORM_ACTION_URL;

const init_state = {
  loading: false,
  data: [],
  initials: '',
  iframe_loaded: false,
  submit: false,
};

const contactUsValidationSchema = object({
  email: string()
    .email('Please enter a valid email')
    .required('Please enter your email address'),
});

const GetNotified = ({ index_key }) => {
  const formRef = useRef();
  const toast = useToast();

  const dispatch = (state, new_state) => ({
    ...state,
    ...new_state,
  });
  const [state, setState] = useReducer(dispatch, init_state);
  const [values, setValues] = useReducer(dispatch, {});

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
      setValues({
        email: '',
      });
      // submitted();
    }
  }

  function generateGoogleForm() {
    return (
      <>
        <VisuallyHidden>
          <form
            id={`contact-us-signup-form-${index_key}`}
            target={`contact-us-response-iframe-${index_key}`}
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
              id={`contact-us-response-iframe-${index_key}`}
              name={`contact-us-response-iframe-${index_key}`}
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

  function handleFormSubmit() {
    setState({ loading: true, submit: true });
    document.getElementById(`contact-us-signup-form-${index_key}`).submit();
  }

  return (
    <>
      {generateGoogleForm()}
      <Formik
        // enableReinitialize
        innerRef={formRef}
        initialValues={{ ...values, email: '' }}
        onSubmit={handleFormSubmit}
        validateOnBlur
        validationSchema={contactUsValidationSchema}
      >
        {({ handleChange, errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack
              maxW="xl"
              align="top"
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <FormItem
                name="email"
                type="email"
                placeholder="Type your email"
                value={values.email || ''}
                onChange={(event) => {
                  handleChange(event);
                  handleInputChange({ event, errors, touched });
                }}
              />
              <Box mt="8px!important">
                <Button
                  bg="brand.100"
                  onClick={handleNotified}
                  {...{ isLoading: loading }}
                  loadingText="Submitting"
                >
                  GET NOTIFIED
                </Button>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default GetNotified;
