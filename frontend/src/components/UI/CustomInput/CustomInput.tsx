import { Box, forwardRef, Input, InputGroup, InputProps } from '@chakra-ui/react';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
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
        const allowedKeys = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '-',
          'Backspace',
          'Tab',
          'ArrowLeft',
          'ArrowRight',
        ];

        if (allowedKeys.indexOf(event.key) === -1) {
          event.preventDefault();
        }
      }
    };
    return (
      <InputGroup width={props.width} position="relative">
        <Input
          ref={ref}
          onChange={handleChange}
          onClick={onInputClick}
          onKeyDown={handleKeyPress}
          value={value}
          _placeholder={{ color: 'gray.500' }}
          borderColor={isCorrect ? 'green.400' : isUncorrect ? 'red.400' : 'gray.600'}
          {...props}
        />
        {isCorrect && (
          <Box position="absolute" right="10px" top="8px">
            <AiFillCheckCircle fontSize="21px" color="#20690E" />
          </Box>
        )}
      </InputGroup>
    );
  },
);

export default CustomInput;
