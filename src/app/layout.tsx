import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Sargam Celebrations',
  description: 'Sargam event by Thanima club',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=tanker&f[]=supreme&f[]=ranade&f[]=satoshi&f[]=clash-display&f[]=panchang&f[]=gambarino&f[]=general-sans&f[]=boska&f[]=bebas-neue&f[]=clash-grotesk&f[]=sentient&f[]=cabinet-grotesk&f[]=melodrama&f[]=author&f[]=epilogue&f[]=recia&f[]=zodiak&f[]=chillax&f[]=stardom&f[]=array&f[]=plus-jakarta-sans&f[]=neue-montreal&f[]=bonny&f[]=amulya&f[]=gambarino&f[]=gordita&f[]=bespoke-serif&f[]=bespoke-sans&f[]=bespoke-stencil&f[]=bespoke-slab&f[]=neco&f[]=tristan&f[]=borel&f[]=comico&f[]=outfit&f[]=poppins&f[]=inter&f[]=bespoke-sans&f[]=bespoke-slab&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
