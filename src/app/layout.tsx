import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair'
});

export const metadata = {
  title: 'Ember & Sage',
  description: 'Cleaner, fresher, better-smelling.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={playfair.variable}>
      <body className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
