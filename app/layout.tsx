import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'South Brunswick Aerospace Club | SBARC',
  description:
    'South Brunswick Aerospace Club unites passionate innovators to push the boundaries of aerospace engineering.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-void text-slate-200 font-sans">
        {children}
      </body>
    </html>
  );
}
