import { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useCustomSession } from '@/hooks';
import { NAVIGATION } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { getDisplayStyles } from '@/utils';
import { Box, Flex } from '@chakra-ui/react';
import MobileNav from './MobileNav';
import Dropdown from './UserDropdown';
import { LinkNext } from '../UI';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';

export const Header: FC = () => {
  const pathname = usePathname();
  const { data } = useCustomSession();
  const username = useMemo(() => data?.user?.username, [data]);
  return (
    <Box backgroundColor="main" position="relative">
      <Flex
        alignItems="center"
        as="header"
        height={{ base: '72px' }}
        justifyContent="space-between"
        maxWidth="80rem"
        mx="auto"
        px="4"
        py="4"
      >
        <Flex alignItems="center">
          <Box display={getDisplayStyles({ device: 'mobile' })}>
            <MobileNav pathname={pathname} />
          </Box>

          <LinkNext display={getDisplayStyles({ device: 'desktop' })} route={ROUTES.HOME}>
            <GlobeAsiaAustraliaIcon className="h-12 w-12 cursor-pointer stroke-black stroke-1 hover:stroke-white" />
          </LinkNext>

          <Flex as="nav" display={getDisplayStyles({ device: 'desktop' })}>
            {NAVIGATION.map((item) => {
              return (
                <LinkNext
                  _hover={{ color: 'white' }}
                  color={pathname === item.href ? 'white' : 'black'}
                  key={item.name}
                  px="2"
                  route={typeof item.href === 'function' ? String(item.href('eco')) : item.href}
                >
                  {item.name}
                </LinkNext>
              );
            })}
          </Flex>
        </Flex>
        <Dropdown username={username} />
      </Flex>
    </Box>
  );
};

export default Header;
