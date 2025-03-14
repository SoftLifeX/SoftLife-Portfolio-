import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    default: "SoftLife Dev",
    template: "%s - SoftLife Dev",
  },
  description: "An award-winning, detail-oriented Front-end Software developer specialized in React, Motion design and Next js with expertise in Web Development, ui/ux design, App Development",
  keywords: ['Software developer', 'Web Development', 'App Development', 'Front-end', 'Softlife Dev', 'award-winning',  'React', 'Next js', 'Motion design', 'Daniel c. Daniel'],
  authors: [{ name: 'Daniel c. Daniel' }],
  creator: 'SoftLife Dev',
  publisher: 'SoftLife Dev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
  },
};


/*export const metadata: Metadata = {
  title: {
    default: "Softlife Design",
    template: "%s - Softlife Design",
  },
  description: "",
  keywords: ['Software developer', 'Web Development', 'App Development', 'Front-end', 'Softlife Design', 'award-winning',  'React', 'Next js', 'Motion design'],
  twitter: {
    card: "summary_large_image",
  },
};*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
         <TransitionProvider>
           {children}
           </TransitionProvider>
      </body>
    </html>
  );
}
