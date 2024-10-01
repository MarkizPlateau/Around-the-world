import { Button, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import CustomInput from '../CustomInput/CustomInput';

export type CustomPasswordInputProps = Omit<InputProps, 'value' | 'onChange' | 'placeholder'> & {
  value: string;
  onChange: (value: string) => void;
  color?: string;
  placeholder?: string | null;
};

export const CustomPasswordInput: FC<CustomPasswordInputProps> = ({
  value,
  onChange,
  placeholder,
  id,
  color,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <CustomInput
        color={color}
        placeholder={placeholder ?? ''}
        id={id}
        value={value}
        onChange={onChange}
        type={showPassword ? 'text' : 'password'}
        autoComplete="new-password"
        zIndex="1"
      ></CustomInput>
      <InputRightElement h="full" zIndex="0">
        <Button
          rounded="2xl"
          variant="ghost"
          _hover={{}}
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default CustomPasswordInput;
