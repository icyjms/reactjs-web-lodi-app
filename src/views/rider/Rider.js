import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Container,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import FormItem from 'components/FormItem';
import FormSelect from 'components/FormSelect';

import LodiText from 'components/LodiText';
import Section from 'components/Section';
import { Form, Formik } from 'formik';
import { initValues, riderValidationSchema } from './rider-config';

function Rider() {
  const subtext = 'Be one of our delivery idols! Register now.';

  const initState = {};

  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Stack
          justifyContent="space-between"
          spacing={{ base: 16, md: 10 }}
          py={{ base: 4, md: 16 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack>
            <Stack height="100%" spacing={{ base: 8, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: '4xl', sm: '3xl', lg: '7xl' }}
              >
                <Text
                  as="span"
                  color="dark.100"
                  style={{ textTransform: 'uppercase' }}
                >
                  Be a
                  <LodiText />
                  Rider
                </Text>
              </Heading>
              <Stack>
                <Text
                  color="gray.500"
                  fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                >
                  {subtext}
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Flex
            justify="center"
            align="center"
            position="relative"
            maxW="3xl"
            px={[4, 8, 12]}
          >
            <Formik
              initialValues={initValues}
              onSubmit={() => {}}
              validateOnBlur
              validationSchema={riderValidationSchema}
            >
              {({ isSubmitting, handleSubmit }) => (
                <Form id="rider-application-form" onSubmit={handleSubmit}>
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <FormItem name="first_name" label="First Name" />
                    <FormItem name="last_name" label="Last Name" />
                  </Stack>
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <FormItem name="contact_no" label="Contact No." />
                    <FormItem name="email" type="email" label="Email" />
                  </Stack>
                  <FormItem name="address" label="Address" />
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <FormSelect name="vehicle_type" label="Vehicle Type" />
                  </Stack>
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <FormSelect
                      name="vehicle_year_model"
                      label="Vehicle’s Year Model"
                    />
                    <FormItem
                      name="license_restriction_code"
                      label="Driver’s License Restriction Code"
                    />
                  </Stack>
                  <FormSelect
                    name="lodi_source"
                    label="Where did you hear about LODI?"
                  />
                  <Box py={[1, 2, 4]}>
                    <Checkbox size="lg">
                      <Text fontSize="small" color="gray.600">
                        By providing LODI with my personal data, I agree that
                        LODI may collect, use and disclose my personal data for
                        purposes in accordance with its Privacy Policy and the
                        Personal Data Protection Act 2012.
                      </Text>
                    </Checkbox>
                  </Box>
                  <Box py={[1, 2, 4]}>
                    <Checkbox size="lg">
                      <Text fontSize="small" color="gray.600">
                        I understand that my personal data may be used for
                        marketing purposes by LODI or its partners; and I hereby
                        consent to receive marketing and promotional materials
                        by telephone, SMS or e-mail and through other channels
                        as determined by LODI.
                      </Text>
                    </Checkbox>
                  </Box>
                  <Button
                    mt="8"
                    type="submit"
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                    bg="cyan"
                    isFullWidth
                  >
                    REGISTER
                  </Button>
                </Form>
              )}
            </Formik>
          </Flex>
        </Stack>
      </Container>
    </Section>
  );
}

export default Rider;
