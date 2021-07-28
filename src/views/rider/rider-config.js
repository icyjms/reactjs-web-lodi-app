import { string, object, bool, } from 'yup';

const initValues = {
  first_name: '',
  last_name: '',
  email: '',
  contact_no: '',
  address: '',
  vehicle_type_id: '',
  lodi_source: '',
  vehicle_year_model: '',
  license_restriction_code: '',
  privacy_policy_agreement: false,
  for_marketing_use: false,

};
const riderValidationSchema = object({
  first_name: string().min(2).required('Please enter your first name'),
  last_name: string().min(2).required('Please enter your last name'),
  contact_no: string().min(2).required('Please enter your contact number').matches(
    /^9[0-9]{9}$/,
    "Invalid mobile number! This field only accepts specific format of mobile number. Ex. +639xxxxxxxxx"
  ),
  email: string()
    .email('Please enter a valid email')
    .required('Please enter your email address'),
  address: string().required('Please enter your address'),
  vehicle_type_id: string().required('Please select the type of your vehicle'),
  lodi_source: string().required('Please select where you heard about LODI'),
  vehicle_year_model: string().required("Please your vehicle's year model"),
  license_restriction_code: string().required(
    'Please enter your license restriction code'
  ),
  privacy_policy_agreement: bool().required("Field must be checked").oneOf([true], 'Field must be checked'),
  for_marketing_use: bool().required('Field must be checked').oneOf([true], 'Field must be checked')
});

const how_did_you_hear_options = [
  'Outdoor',
  'TV',
  'Radio',
  'Newspaper / Print',
  'Friends & Family',
  'LODI Driver',
  'LODI Staff',
  'Event',
  'Forum / Blog',
  'Internet Ad & Search',
  'Facebook',
  'Twitter',
  'Instagram',
  'Others',
];

export { riderValidationSchema, initValues, how_did_you_hear_options };
