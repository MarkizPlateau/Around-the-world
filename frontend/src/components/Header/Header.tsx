import { FC, useMemo } from 'react';
import Link from 'next/link';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '@/constants/routes';
import { classNames } from '@/utils';
import { NAVIGATION } from '@/constants/navigation';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/16/solid';
import Dropdown from './UserDropdown';
import MobileNav from './MobileNav';
import { useSession } from 'next-auth/react';
import { CustomSession } from '@/app/api/auth/[...nextauth]/authOptions';

export const Header: FC = () => {
  const { data } = useSession() as { data: CustomSession | null };

  const username = useMemo(() => data?.user?.username, [data]);

  return (
    <header>
      <Disclosure as="nav" className="bg-pink">
        <div className="mx-auto max-w-screen-2xl px-5 2xl:px-2">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="text-gray-400 hover:bg-gray-700 group relative inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href={ROUTES.HOME} legacyBehavior>
                  <GlobeAsiaAustraliaIcon className="h-10 w-10 cursor-pointer stroke-black stroke-1 hover:stroke-white" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <ul className="flex space-x-4">
                  {NAVIGATION.map((item) => (
                    <Link
                      href={typeof item.href === 'function' ? String(item.href('eco')) : item.href}
                      legacyBehavior
                      as="li"
                      key={item.name}
                    >
                      <a
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-gray-800 text-gray-400 focus:ring-offset-gray-800 relative rounded-full p-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              <Dropdown username={username} />
            </div>
          </div>
        </div>
        <MobileNav />
      </Disclosure>
    </header>
  );
};

export default Header;
