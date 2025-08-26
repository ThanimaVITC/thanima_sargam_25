import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Sargam 25 - The Official Onam Celebration of VIT Chennai',
  description: 'Join Sargam 25, the flagship Onam celebration by Thanima, the cultural club of VIT Chennai. Discover event details, schedules, gallery, and more.',
  keywords: ['Sargam 25', 'Sargam', 'Thanima', 'VIT Chennai', 'Onam Celebration', 'Cultural Fest', 'Kerala Festival'],
  authors: [{ name: 'Thanima VIT Chennai' }, { name: 'legitcoconut', url: 'https://github.com/legitcoconut' }],
  creator: 'legitcoconut',
  publisher: 'Thanima VIT Chennai',
  openGraph: {
    title: 'Sargam 25 - The Official Onam Celebration of VIT Chennai',
    description: 'Experience the magic of Onam with Sargam 25 at VIT Chennai. A vibrant celebration of culture, art, and togetherness.',
    url: 'https://thanimavitc.site',
    siteName: 'Sargam 25',
    images: [
      {
        url: '/sargam_logo.png', 
        width: 200,
        height: 100,
        alt: 'Sargam 25 Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sargam 25 - The Official Onam Celebration of VIT Chennai',
    description: 'Join us for Sargam 25, the biggest Onam celebration at VIT Chennai, brought to you by Thanima.',
    images: ['/sargam_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <link href="https://api.fontshare.com/v2/css?f[]=gambarino&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Chilanka&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
