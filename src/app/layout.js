import { DM_Sans, Geist, Geist_Mono, Merriweather } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-merriweather',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-sans',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Michelle',
  description: 'Portfolio Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${dmSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full h-24 px-20 flex justify-between items-center border-b border-b-black">
          <Link href="/" className="font-merriweather text-2xl">
            michelleyang.dev
          </Link>
          <Navigation />
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
