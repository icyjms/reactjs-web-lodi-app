import { useField } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  Checkbox,
} from '@chakra-ui/react';

const FormItem = ({ name, label, ...rest }) => {
  const [field, meta] = useField({ name, ...rest });
  return (
    <FormControl pb={[2, 4, 6]} isInvalid={meta.touched && meta.error}>
      <Checkbox {...field} {...rest} isChecked={field.value} />
      {meta.touched && meta.error && (
        <FormErrorMessage mt="1" fontSize="xs" {...{ type: 'error' }}>
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormItem;
