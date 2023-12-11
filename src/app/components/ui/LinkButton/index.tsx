'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  linkLabel: string;
  isOpen?: boolean;
  closeMenu?: () => void;
};

export default function LinkButton({
  href,
  linkLabel,
  isOpen,
  closeMenu,
}: Props) {
  const Pathname = usePathname();
  const isActive: boolean = Pathname === href;

  const linkStyle = classNames(
    // 共通のスタイル
    'cursor-pointer p-2 max-sm:mt-5 max-sm:first:mt-0 max-sm:last:pr-4',
    {
      // isActive = trueの場合
      'text-gray-500': isActive,
      // isActive = false , isOpen = trueの場合
      'text-white': !isActive && isOpen,
      // isActive = false , isOpen = falseの場合、
      'text-black': !isActive && !isOpen,
    },
  );
  const handleClick = () => {
    closeMenu?.(); // メニューを閉じる
  };
  return (
    <Link href={href} onClick={handleClick}>
      <li className={linkStyle}>{linkLabel}</li>
    </Link>
  );
}
