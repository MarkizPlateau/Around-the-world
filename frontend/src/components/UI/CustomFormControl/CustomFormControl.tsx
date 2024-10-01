import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  TextProps,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
export interface CustomFormControlProps extends FormControlProps {
  labelTitle?: string;
  errorMessage?: string | React.ReactNode;
  helperTextProps?: TextProps;
  helperText?: string;
  bottomHelperText?: string;
  tooltipMessage?: string;
  children?: ReactNode;
  labelProps?: FormLabelProps;
  horizontalCheckbox?: boolean;
  errorMessageProps?: FormErrorMessageProps;
}

export const CustomFormControl = (props: CustomFormControlProps) => {
  const {
    labelTitle,
    children,
    errorMessage,
    helperText,
    helperTextProps,
    isInvalid,
    isRequired,
    tooltipMessage,
    onBlur,
    bottomHelperText,
    labelProps,
    horizontalCheckbox,
    errorMessageProps,
    ...rest
  } = props;
  const [isDirty, setIsDirty] = useState(false);

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={isDirty ? isInvalid : undefined}
      {...rest}
      onBlur={onBlur ?? (() => setIsDirty(true))}
      {...(horizontalCheckbox
        ? {
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            gap: '2',
          }
        : {})}
    >
      {labelTitle && <FormLabel mb={horizontalCheckbox ? 0 : 2}>{labelTitle}</FormLabel>}
      {helperText && <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>}
      {children}
      {bottomHelperText && (
        <FormHelperText color="gray.400" fontSize="xs">
          {bottomHelperText}
        </FormHelperText>
      )}
      <FormErrorMessage {...errorMessageProps}>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomFormControl;
