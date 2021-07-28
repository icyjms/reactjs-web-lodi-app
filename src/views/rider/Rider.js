import {Fragment, useEffect, useReducer, useState} from "react";
import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Container,
  InputLeftAddon,
  useToast
} from '@chakra-ui/react';
import FormItem from 'components/FormItem';
import FormSelect from 'components/FormSelect';
import FormCheckbox from 'components/FormCheckbox';

import LodiText from 'components/LodiText';
import Section from 'components/Section';
import { Form, Formik } from 'formik';
import { initValues, riderValidationSchema, how_did_you_hear_options } from './rider-config';
import {createRiderApplication, getVehicleTypes} from './rider-api';

const init_state = {
  vehicle_types_options: []
};

function Rider() {
  const toast = useToast()
  const subtext = 'Be one of our delivery idols! Register now.';


  const dispatch = (state, new_state) => ({
    ...state,
    ...new_state,
  });
  const [state, setState] = useReducer(dispatch, init_state);
  const [loading, setLoading] = useState(false);

  const {vehicle_types_options=[]} =state;


  function onSubmitToAdmin(values, formBags) {
    setLoading(true);
    createRiderApplication(values)
      .then((response) => {
        const {message =''} = response;
        toast({
          title: "Rider Application",
          description: message,
          status: "success",
          position: "top-right",
        })
      })
      .catch(err => {
        return err;
      }).finally(()=>{
        setLoading(false);
        formBags.resetForm();
      });

    return values;
  }

  useEffect(()=>{
    const params= {
      page: 1,
      limit: 9999999
    }
    getVehicleTypes(params)
      .then(response => {
        const {data=[]} = response;
        setState({
          vehicle_types_options: data
        })
        console.log('response', response)
      });
  }, [])

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
                    <FormItem name="contact_no" label="Contact No." leftAddon={<InputLeftAddon children="+63" />}/>
                    <FormItem name="email" type="email" label="Email" />
                  </Stack>
                  <FormItem name="address" label="Address" />
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <FormSelect name="vehicle_type_id" label="Vehicle Type">
                    <option value=""> -- Select --</option>
                    {vehicle_types_options.map((item, x) => {
                      return (
                        <Fragment key={x}>
                          <option key={item.id} value={item.id}>{item.name}</option>
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
                      {[...Array(100)].map((a,b)=>{
                        const year = new Date().getFullYear() - b;
                        return (
                          <option key={b} value={year}>{year}</option>
                        )
                      })}
                    </FormSelect>
                    <FormItem
                      name="license_restriction_code"
                      label="Driver’s License Restriction Code"
                    />
                  </Stack>
                  <FormSelect
                    name="lodi_source"
                    label="Where did you hear about LODI?"
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
                        By providing LODI with my personal data, I agree that
                        LODI may collect, use and disclose my personal data for
                        purposes in accordance with its Privacy Policy and the
                        Personal Data Protection Act 2012.
                      </Text>
                    </FormCheckbox>
                  </Box>
                  <Box py={[1, 2, 4]}>
                    <FormCheckbox name="for_marketing_use" size="lg">
                      <Text fontSize="small" color="gray.600">
                        I understand that my personal data may be used for
                        marketing purposes by LODI or its partners; and I hereby
                        consent to receive marketing and promotional materials
                        by telephone, SMS or e-mail and through other channels
                        as determined by LODI.
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
