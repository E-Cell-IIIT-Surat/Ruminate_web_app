import './globals.css';
import type { Metadata, Viewport } from 'next';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import NavigationFeedback from './NavigationFeedback';
import NetworkStatusToast from './NetworkStatusToast';
import ExperienceEnhancements from './ExperienceEnhancements';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecelliiitsurat.in'),
  title: 'Ruminate - E-Cell IIIT Surat',
  description: 'Fostering innovation, creativity, and entrepreneurial thinking at IIIT Surat. Join us in shaping the future, one idea at a time.',
  keywords: ['E-Cell', 'IIIT Surat', 'Entrepreneurship', 'Innovation', 'Startups', 'Ruminate'],
  authors: [{ name: 'Ruminate E-Cell' }],
  openGraph: {
    title: 'Ruminate - E-Cell IIIT Surat',
    description: 'Fostering innovation, creativity, and entrepreneurial thinking at IIIT Surat.',
    type: 'website',
    locale: 'en_US',
  },
   icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruminate - E-Cell IIIT Surat',
    description: 'Fostering innovation, creativity, and entrepreneurial thinking at IIIT Surat.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0616',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="app-wrapper">
          <Navbar />
          <NavigationFeedback />
          <NetworkStatusToast />
          <ExperienceEnhancements />
          <main className="main-content" id="main-content">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
