import { Button, ButtonProps } from '@chakra-ui/react';
import { bindToCommand, Command } from '@/model/mvvm';
import { observer } from 'mobx-react-lite';
export interface FormButtonsProps extends ButtonProps {
  text: string;
  command: Command<void, any>;
  colorScheme: ButtonProps['colorScheme'];
}

export const FormButton = observer(
  ({ onClick, bgColor, text, command, colorScheme, isLoading, ...props }: FormButtonsProps) => {
    const buttonHandler = command ? { ...bindToCommand(command) } : { onClick: () => {} };

    return (
      <Button
        colorScheme={colorScheme}
        {...buttonHandler}
        width={'100%'}
        bg={bgColor}
        p="4"
        fontSize="xl"
        lineHeight="none"
        fontWeight="700"
        height="min-content"
        isLoading={isLoading}
        borderRadius="allCorners.sm"
        {...props}
      >
        {text}
      </Button>
    );
  },
);

export default FormButton;
