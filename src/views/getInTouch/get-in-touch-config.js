import { object, string } from 'yup';

const init_values = {
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

const GOOGLE_FORM_ENTRIES = {
  full_name: 'entry.78770213',
  email: 'entry.2031526209',
  mobile_number: 'entry.966146896',
  subject: 'entry.215903513',
  message: 'entry.1009072701',
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

export {
  validationSchema,
  init_values,
  GOOGLE_FORM_ENTRIES,
  GOOGLE_FORM_ACTION_URL,
  init_state,
};
