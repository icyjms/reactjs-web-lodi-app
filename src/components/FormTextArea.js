import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { useField } from 'formik';

const FormTextArea = ({ name, children, label }) => {
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
      <Textarea bg="gray.100" borderColor="gray.900" {...field}>
        {children}
      </Textarea>
      {meta.touched && meta.error && (
        <FormErrorMessage mt="1" fontSize="xs" {...{ type: 'error' }}>
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormTextArea;
