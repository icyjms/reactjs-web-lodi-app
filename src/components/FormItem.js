import { useField } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';

const FormItem = ({ name, label, leftAddon, rightAddon, ...rest }) => {
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
      <InputGroup>
        {leftAddon}
        <Input
          w="full"
          outline="none"
          bg="gray.100"
          borderColor="gray.100"
          {...field}
          {...rest}
        />
        {rightAddon}
      </InputGroup>
      {meta.touched && meta.error && (
        <FormErrorMessage mt="1" fontSize="xs" {...{ type: 'error' }}>
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormItem;
