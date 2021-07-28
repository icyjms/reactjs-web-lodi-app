import { useField } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const FormItem = ({ name, label, ...rest }) => {
  const [field, meta] = useField({ name, ...rest });
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
      <Input outline="none" bg="gray.100" borderColor="gray.100" {...field} {...rest} />
      {meta.touched && meta.error && (
        <FormErrorMessage mt="1" fontSize="xs" {...{ type: 'error' }}>
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormItem;
