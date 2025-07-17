import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
/*import { Provider } from "./components/hooks/ThemeProvider";*/
import TransitionProvider from "./components/transitionProvider";
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
    default: 'SoftlifeX • Software Engineer | Designer',
    template: "%s - SoftlifeX • Software Engineer | Designer"
  },
  description: 'Award-winning Software engineer, helping brands thrive in our digital era.',
  keywords: ['Software Engineer', 'Web Development', 'App Development', 'Robotics', 'Cloud Computing', 'Game Development', 'Full Stack Developer', 'softlifex'],
  authors: [{ name: 'Daniel Daniel c' }],
  creator: 'SoftlifeX',
  publisher: 'SoftlifeX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://softlifex.vercel.app',
    siteName: 'softlifex Portfolio',
    title: 'SoftlifeX • Software Engineer | Designer',
    description: 'Award-winning Software engineer, helping brands thrive in our digital era.',
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
    title: 'SoftlifeX • Software Engineer | Designer',
    description: 'Award-winning Software engineer, helping brands thrive in our digital era.',
    creator: '@SoftLife_Dev',
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
    title: 'SoftlifeX',
  },
};
  

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

        <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
        
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
   <Providers >
     <TransitionProvider>
           {children}
  </TransitionProvider>
  </Providers>
      </body>
    </html>
  );
}
