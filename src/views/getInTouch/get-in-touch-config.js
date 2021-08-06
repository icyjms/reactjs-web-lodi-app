import { object, string } from 'yup';

const initValues = {
  full_name: '',
  email: '',
  mobile_number: '',
  subject: '',
  message: '',
};

const validationSchema = object({
  full_name: string().min(2).required('Please enter your full name'),
  email: string()
    .email('Please enter a valid email')
    .required('Please enter your email address'),
  mobile_number: string()
    .min(2)
    .required('Please enter your contact number')
    .matches(
      /^9[0-9]{9}$/,
      'Invalid mobile number! This field only accepts specific format of mobile number. Ex. +639xxxxxxxxx',
    ),
  subject: string().required('Please enter your subject'),
  message: string().required('Please enter your message'),
});
export { validationSchema, initValues };
