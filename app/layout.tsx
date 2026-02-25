import './globals.css';
import { JetBrains_Mono, DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} ${dmSans.variable} counter-reset-section antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}