'use client';
import { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import cx from 'classnames';
import LinkButton from '../LinkButton';

type MenuItem = {
  label: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Profile', link: '/profile' },
  { label: 'Contact', link: '/contact' },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  return (
    <div>
      <nav
        className={cx('max-md:hidden', {
          'max-sm:block max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:bottom-0 max-sm:bg-black p-5':
            isOpen,
        })}
      >
        <ul
          className={cx('flex gap-5', {
            'max-sm:flex-col max-sm:pt-0 max-sm:pr-20 max-sm:pb-0 max-sm:pl-5 max-sm:gap-6':
              isOpen,
          })}
        >
          {menuItems.map((item, index) => (
            <LinkButton
              key={index}
              href={item.link}
              linkLabel={item.label}
              closeMenu={closeMenu}
              isOpen={isOpen}
            />
          ))}
        </ul>
        <button
          name="button"
          type="button"
          aria-label="close button"
          className={cx('hidden', {
            'max-sm:flex max-sm:bg-none max-sm:border-none max-sm:cursor-pointer max-sm:absolute max-sm:top-6 max-sm:right-4':
              isOpen,
          })}
          onClick={closeMenu}
        >
          <XMarkIcon className="w-8 h-8 text-white" />
        </button>
      </nav>

      <button
        name="button"
        type="button"
        aria-label="menu button"
        className={cx('hidden max-sm:block')}
        onClick={openMenu}
      >
        <Bars3BottomRightIcon className="w-8 h-8 text-black" />
      </button>
    </div>
  );
}
