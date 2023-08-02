import React from 'react';
import '../style/globals.scss';
import { Inter } from 'next/font/google';

import { Navbar, Footer } from '@/shared/components';
import { useFetch } from '@/shared/hook';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Grameen Kalyan',
  description:
    'Grameen Kalyan believes in trust, quality and innovation in delivering services. We are on a mission to transform healthcare in Bangladesh at primary, ...'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const navbarData = await useFetch({ url: '/home-contents', revalidateIn: 86400 });
  const badgeImage = navbarData.data[0].badge_image;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar badgeImage={badgeImage}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
