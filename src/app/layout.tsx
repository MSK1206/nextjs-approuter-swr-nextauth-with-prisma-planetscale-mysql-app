import type { Metadata } from 'next';
import { Zen_Antique } from 'next/font/google';
import './globals.css';

const zen = Zen_Antique({
  weight: '400',
  display: 'swap',
  preload: false,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'nextjs-approuter-swr-nextauth-with-prisma-planetscale-mysql-app',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={zen.className}>{children}</body>
    </html>
  );
}
