import { useRef } from 'react';
import { NAVIGATION } from '@/constants/navigation';
import { Box, IconButton, Menu, MenuButton, MenuItem, useDisclosure } from '@chakra-ui/react';
import { LinkNext } from '../UI';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useOutsideClick } from '@/hooks';

type MobileNavType = {
  pathname: string;
};

export const MobileNav = ({ pathname }: MobileNavType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({ ref, onClose });

  const menuButton = (
    <MenuButton
      _active={{ background: 'inherit' }}
      _focus={{ background: 'inherit' }}
      alignSelf="flex-end"
      aria-label="Options"
      as={IconButton}
      bg="main"
      icon={
        isOpen ? <CloseIcon color="white" fontSize="20px" /> : <HamburgerIcon fontSize="24px" />
      }
      onClick={isOpen ? onClose : onOpen}
    />
  );

  return (
    <Menu>
      {isOpen ? (
        <Box
          background="main"
          borderBottomRadius="xl"
          display="flex"
          flexDirection="column"
          left="0"
          p="4"
          position="absolute"
          top="0"
          width="100vw"
          zIndex="2"
          as="nav"
        >
          {menuButton}
          <Box as="ul" pb="2" pt="6" ref={ref}>
            {NAVIGATION.map((item, index) => {
              return (
                <MenuItem
                  bg={pathname === item.href ? 'white' : 'inherit'}
                  borderBottom="1px solid white"
                  borderTop={index === 0 ? '1px solid white' : 'unset'}
                  color={pathname === item.href ? 'black' : 'white'}
                  key={item.name}
                  py="2"
                >
                  <LinkNext
                    route={typeof item.href === 'function' ? String(item.href('eco')) : item.href}
                    onClick={onClose}
                  >
                    {item.name}
                  </LinkNext>
                </MenuItem>
              );
            })}
          </Box>
        </Box>
      ) : (
        menuButton
      )}
    </Menu>
  );
};

export default MobileNav;
