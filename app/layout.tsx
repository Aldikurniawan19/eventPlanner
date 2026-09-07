import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rentify.id'),
  title: 'Rentify | Rental Sound System & Produksi Event untuk Event Planner',
  description:
    'Partner rental sound system, tata suara, lighting, dan perlengkapan panggung berstandar rider panggung khusus untuk Event Planner, Wedding Organizer, dan MICE di Jakarta & sekitarnya.',
  keywords: [
    'rental sound system event planner',
    'sewa sound system wedding organizer',
    'audio visual event organizer jakarta',
    'sewa line array konser festival',
    'vendor sound system profesional',
    'sewa mixer digital dlive digico',
    'rentify event production',
  ],
  authors: [{ name: 'Rentify Event Production' }],
  creator: 'Rentify Event Production',
  publisher: 'Rentify Event Production',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rentify | Partner Rental Sound System & Produksi Event Planner',
    description:
      'Solusi tata suara rider-ready, lighting panggung, dan dedicated engineer untuk kesuksesan event klien Anda.',
    url: 'https://rentify.id',
    siteName: 'Rentify',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rentify | Rental Sound System untuk Event Planner',
    description:
      'Partner produksi sound system berstandar rider panggung untuk Wedding Organizer, EO, dan Event Planner.',
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
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Rentify Event Production',
    image: 'https://rentify.id/logo.png',
    '@id': 'https://rentify.id',
    url: 'https://rentify.id',
    telephone: '+6281234567890',
    description: 'Partner rental sound system, lighting, dan perlengkapan panggung profesional untuk Event Planner dan Wedding Organizer.',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kawasan Industri Pulogadung Blok C-12',
      addressLocality: 'Jakarta Timur',
      addressRegion: 'DKI Jakarta',
      postalCode: '13930',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.1953,
      longitude: 106.9123,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: ['https://instagram.com/resonansiaudio'],
  };

  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
