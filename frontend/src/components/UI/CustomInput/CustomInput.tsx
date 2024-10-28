import React from 'react';
import { Box, forwardRef, Input, InputGroup, InputProps } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { handlePostcodeKeyPress } from '@/utils';
export type CustomInputProps = Omit<InputProps, 'value' | 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
  onInputClick?: () => void;
  postcode?: boolean;
  isCorrect?: boolean;
  isUncorrect?: boolean;
};

export const CustomInput = forwardRef<CustomInputProps, 'input'>(
  (
    { onChange, onInputClick, value, postcode, isCorrect, isUncorrect, ...props }: CustomInputProps,
    ref,
  ) => {
    const handleChange = (event: { target: { value: string } }) => onChange(event.target.value);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (postcode) {
        handlePostcodeKeyPress(event);
      }
    };
    return (
      <InputGroup position="relative" width={props.width}>
        <Input
          _placeholder={{ color: 'gray.500' }}
          borderColor={isCorrect ? 'green.400' : isUncorrect ? 'red.400' : 'gray.600'}
          ref={ref}
          value={value}
          onChange={handleChange}
          onClick={onInputClick}
          onKeyDown={handleKeyPress}
          {...props}
        />
        {isCorrect && (
          <Box position="absolute" right="10px" top="8px">
            <AiFillCheckCircle color="#20690E" fontSize="21px" />
          </Box>
        )}
      </InputGroup>
    );
  },
);

export default CustomInput;
