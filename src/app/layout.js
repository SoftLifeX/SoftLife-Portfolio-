import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
import { ViewTransitions } from "next-view-transitions";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: { 
    default: 'Daniel c Daniel | SoftlifeX • Full-stack | Mobile Developer & Designer',
    template: "%s - Daniel c Daniel | SoftlifeX • Full-stack | Mobile Developer & Designer"
  },
  description: 'Award-winning Software Engineer & Designer, helping brands thrive in our digital era.',
  keywords: ['Software Engineer', 'Full-stack Developer', 'softlifex', 'Daniel c Daniel' ],
  authors: [{ name: 'Daniel c Daniel ' }, { name: 'SoftlifeX', url: 'https://softlifex.vercel.app/' }],
  creator: 'Daniel c Daniel',
  publisher: 'Daniel c Daniel ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://softlifex.vercel.app',
    siteName: 'Daniel c Daniel | softlifex Portfolio',
    title: 'Daniel c Daniel | SoftlifeX • Full-stack | Mobile Developer & Designer',
    description: 'Award-winning Software Engineer & Designer, helping brands thrive in our digital era.',
    /*images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Robinson Honour - Creative Software Engineer',
      },
    ],*/
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel c Daniel | SoftlifeX • Full-stack | Mobile Developer & Designer',
    description: 'Award-winning Software Engineer & Designer, helping brands thrive in our digital era.',
    creator: '@SoftLifeX',
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
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: '#6f1cd7',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Daniel c Daniel | SoftlifeX • Full-stack | Mobile Developer & Designer',
  },
};
  

export default function RootLayout({ children }) {
  return (
   <ViewTransitions>
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
      />

      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css"
      />

      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-regular.css"
      />

      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-light.css"
      />
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone.css"
      />
      <link
        rel="stylesheet"
        href="https://site-assets.fontawesome.com/releases/v6.7.2/css/brands.css"
      />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/2f82fb206f.js"
          crossOrigin="anonymous"
        ></script>
            
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

        <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
        
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <Providers >    
        {children}
       </Providers>
      </body>
    </html>
  </ViewTransitions>
  );
}
