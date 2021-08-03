import FormCheckbox from 'components/FormCheckbox';
import FormItem from 'components/FormItem';
import FormSelect from 'components/FormSelect';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  InputLeftAddon,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Fragment, useEffect, useReducer, useState } from 'react';

import Section from 'components/Section';
import { Form, Formik } from 'formik';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { createRiderApplication, getVehicleTypes } from './rider-api';
import {
  how_did_you_hear_options,
  initValues,
  riderValidationSchema,
} from './rider-config';

const init_state = {
  vehicle_types_options: [],
};

function Rider() {
  const toast = useToast();
  const subtext = 'Maging isa sa aming delivery idols! Magpalista na.';

  const dispatch = (state, new_state) => ({
    ...state,
    ...new_state,
  });
  const [state, setState] = useReducer(dispatch, init_state);
  const [loading, setLoading] = useState(false);

  const { vehicle_types_options = [] } = state;

  function onSubmitToAdmin(values, formBags) {
    setLoading(true);
    createRiderApplication(values)
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
        formBags.resetForm();
      });

    return values;
  }

  useEffect(() => {
    const params = {
      page: 1,
      limit: 9999999,
    };
    getVehicleTypes(params).then((response) => {
      const { data = [] } = response;
      setState({
        vehicle_types_options: data,
      });
    });
  }, []);

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
                  MAGING &nbsp;
                  <Box
                    width={{ base: '55px', sm: '49px', lg: '120px' }}
                    display="inline-block"
                  >
                    <Logo width="100%" height="100%" />
                  </Box>
                  &nbsp; Rider
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
              onSubmit={onSubmitToAdmin}
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
                    <FormItem
                      name="contact_no"
                      label="Contact No."
                      leftAddon={<InputLeftAddon children="+63" />}
                    />
                    <FormItem name="email" type="email" label="Email" />
                  </Stack>
                  <FormItem name="address" label="Address" />
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <FormSelect name="vehicle_type_id" label="Vehicle Type">
                      <option value=""> -- Select --</option>
                      {vehicle_types_options.map((item, x) => {
                        return (
                          <Fragment key={x}>
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          </Fragment>
                        );
                      })}
                    </FormSelect>
                  </Stack>
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <FormSelect
                      name="vehicle_year_model"
                      label="Vehicle’s Year Model"
                    >
                      <option value=""> -- Select --</option>
                      {[...Array(100)].map((a, b) => {
                        const year = new Date().getFullYear() - b;
                        return (
                          <option key={b} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </FormSelect>
                    <FormItem
                      name="license_restriction_code"
                      label="Driver’s License Restriction Code"
                    />
                  </Stack>
                  <FormSelect
                    name="lodi_source"
                    label="Paano mo nalaman ang tungkol sa LODI?"
                  >
                    <option value=""> -- Select --</option>
                    {how_did_you_hear_options.map((item, x) => {
                      return (
                        <Fragment key={x}>
                          <option key={item}>{item}</option>
                        </Fragment>
                      );
                    })}
                  </FormSelect>
                  <Box py={[1, 2, 4]}>
                    <FormCheckbox name="privacy_policy_agreement" size="lg">
                      <Text fontSize="small" color="gray.600">
                        <strong>Sumasang-ayon</strong> ako na kolektahin,
                        gamitin, at <strong>ibahagi</strong> ng LODI ang mga
                        impormasyon na may kaugnayan sa akin sa layuning naaayon
                        sa Privacy Policy at Data Protection Act of 2012.
                      </Text>
                    </FormCheckbox>
                  </Box>
                  <Box py={[1, 2, 4]}>
                    <FormCheckbox name="for_marketing_use" size="lg">
                      <Text fontSize="small" color="gray.600">
                        Nauunawaan kong ang mga impormasyon na galing sa akin ay{' '}
                        <strong>maaaring</strong> gamitin ng LODI para sa{' '}
                        <strong>M</strong>arketing. At, pumapayag akong
                        makatanggap ng mga impormasyong may kinalaman sa{' '}
                        <strong>P</strong>romotions sa pamamagitan ng email,
                        SMS, o sa paano mang paraan na piliin ng LODI.
                      </Text>
                    </FormCheckbox>
                  </Box>
                  <Button
                    mt="8"
                    type="submit"
                    isLoading={isSubmitting || loading}
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
