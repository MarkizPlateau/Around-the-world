import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useMemo } from 'react';

export const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightMode = colorMode === 'light';
  return (
    <IconButton
      aria-label="Toggle color mode"
      bg={lightMode ? 'white' : undefined}
      {...(!lightMode && { border: '3px solid white', borderRadius: 'md' })}
      icon={lightMode ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitcher;
