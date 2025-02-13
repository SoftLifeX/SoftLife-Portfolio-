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
  title: "Softlife Design",
  description: "",
};

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
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
