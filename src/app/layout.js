import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
/*import { Provider } from "./components/hooks/ThemeProvider";*/
import TransitionProvider from "./components/transitionProvider";
import Curve from "./curve";
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
  /*icons: {
    apple: '/apple-icon.png',
  },*/
  metadataBase: new URL('https://softlife-dev.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: {
    default: "SoftLife Dev • Designer & Developer",
    template: "%s - SoftLife Dev • Designer & Developer",
  },
  description: "An award-winning Front-end | Mobile Software engineer and designer specialized in React, Motion design, Typescript and Next js with expertise in Web Development, ui/ux design, App Development",
  },
  openGraph: {
    title: {
    default: "SoftLife Dev • Designer & Developer",
    template: "%s - SoftLife Dev • Designer & Developer",
  },
  description: "An award-winning, detail-oriented Front-end Software developer specialized in React, Motion design and Next js with expertise in Web Development, ui/ux design, App Development",
  url: "https://softlife-dev.vercel.app/",
    siteName: "SoftLife Dev",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: {
    default: "SoftLife Dev • Designer & Developer",
    template: "%s - SoftLife Dev • Designer & Developer",
  },
  description: "An award-winning, detail-oriented Front-end Software developer specialized in React, Motion design and Next js with expertise in Web Development, ui/ux design, App Development",
  keywords: ['Daniel Daniel Chimbu-okaaomee', 'Daniel Daniel c.', 'Software developer', 'Web Development', 'App Development', 'Front-end', 'Softlife Dev', 'award-winning',  'React', 'Next js', 'Motion design', 'Daniel c. Daniel', 'software engineer', 'coding', 'TypeScript', 'Javascript'],
  authors: [{ name: 'Daniel Daniel Chimbu-okaaomee' }],
  creator: 'SoftLife Dev',
  publisher: 'SoftLife Dev',
  url: "https://softlife-dev.vercel.app/",
  //image: "https://devalexdgreat.vercel.app/favicon.png",
  siteName: "SoftLife Dev",
  type: "website"
};

export default function RootLayout({ children }) {
  return (
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
        <script
          src="https://kit.fontawesome.com/2f82fb206f.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
   <ThemeProvider enableSystem={false}>
     <Curve>
           {children}
     </Curve>
  </ThemeProvider>
      </body>
    </html>
  );
}
