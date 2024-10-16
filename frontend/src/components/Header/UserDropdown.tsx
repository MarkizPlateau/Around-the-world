import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { LinkNext } from '../UI';
import { ROUTES } from '@/constants/routes';

export const Dropdown = ({ username }: { username: string | undefined }) => {
  const router = useRouter();
  const avatar = (
    <Avatar
      aria-label={username ? `Avatar of ${username}` : 'Guest avatar'}
      as={username ? 'div' : 'button'}
      background="white"
      color="purple"
      height="40px"
      name={username ? username.slice(0, 1) : '?'}
      width="40px"
      onClick={!username ? () => router.push(ROUTES.LOGIN) : undefined}
    />
  );
  return (
    <>
      <Menu placement="bottom-end">
        {username ? (
          <MenuButton as="button" cursor="pointer">
            {avatar}
          </MenuButton>
        ) : (
          avatar
        )}
        {username && (
          <MenuList
            sx={{
              '> *:hover': {
                background: '#EDF2F7',
              },
            }}
          >
            <MenuItem as="li" cursor="pointer">
              <LinkNext route={ROUTES.PROFILE}>Your profile</LinkNext>
            </MenuItem>
            <MenuItem as="button" onClick={() => signOut()}>
              Wyloguj się
            </MenuItem>
          </MenuList>
        )}
      </Menu>
    </>
  );
};

export default Dropdown;
