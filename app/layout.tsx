import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Miguel Lopez',
    description: 'Full Stack developer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='bg-darkBlue'>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
