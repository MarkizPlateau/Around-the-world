import { FC } from 'react';
import Link from 'next/link';
import { DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { classNames } from '@/utils';
import { NAVIGATION } from '@/constants/navigation';

export const MobileNav: FC = () => {
  return (
    <DisclosurePanel className="sm:hidden">
      <ul className="space-y-1 px-2 pb-3 pt-2">
        {NAVIGATION.map((item) => (
          <Link
            href={typeof item.href === 'function' ? String(item.href('eco')) : item.href}
            legacyBehavior
            as="li"
            key={item.name}
          >
            <DisclosureButton
              as="a"
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          </Link>
        ))}
      </ul>
    </DisclosurePanel>
  );
};

export default MobileNav;
