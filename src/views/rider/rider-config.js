import { string, object } from 'yup';

const initValues = {
  first_name: '',
  last_name: '',
  email: '',
  contact_no: '',
  address: '',
  vehicle_type: '',
  lodi_source: '',
  vehicle_year_model: '',
  license_restriction_code: '',
};
const riderValidationSchema = object({
  first_name: string().min(2).required('Please enter your first name'),
  last_name: string().min(2).required('Please enter your last name'),
  contact_no: string().min(2).required('Please enter your contact number'),
  email: string()
    .email('Please enter a valid email')
    .required('Please enter your email address'),
  address: string().required('Please enter your address'),
  vehicle_type: string().required('Please select the type of your vehicle'),
  lodi_source: string().required('Please select where you heard about LODI'),
  vehicle_year_model: string().required("Please your vehicle's year model"),
  license_restriction_code: string().required(
    'Please enter your license restriction code'
  ),
});

export { riderValidationSchema, initValues };
