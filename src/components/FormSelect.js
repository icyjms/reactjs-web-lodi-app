import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { useField } from 'formik';

const FormSelect = ({ name, children, label }) => {
  const [field, meta] = useField({ name });

  return (
    <FormControl pb={[2, 4, 6]} isInvalid={meta.touched && meta.error}>
      <FormLabel
        fontWeight="light"
        fontSize="smaller"
        color="gray.500"
        htmlFor={name}
      >
        {label}
      </FormLabel>
      <Select bg="gray.100" borderColor="gray.900" {...field}>
        {children}
      </Select>
      {meta.touched && meta.error && (
        <FormErrorMessage mt="1" fontSize="xs" {...{ type: 'error' }}>
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormSelect;
