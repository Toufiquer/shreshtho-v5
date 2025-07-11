import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/redux/provider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextAuthProvider from '@/provider/SessionProvider';
import Nav from '@/app/components/nav/Template-Nav/nav';
import MainFooter from '@/components/common/footer/MainFooter';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shreshtho',
  description: '',
  manifest: '/manifest.json',
  icons: {
    apple: '/icons/icon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider>
          <ReduxProvider>
            <div className="w-full flex flex-col">
              <Nav />
              {children}
              <MainFooter />
            </div>
          </ReduxProvider>
        </NextAuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
