// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Live Views Counter',
  description: 'Live views counter for YouTube channels',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
