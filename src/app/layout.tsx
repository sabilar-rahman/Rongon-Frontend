import type { Metadata } from "next";
import {Lato} from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



const LatoSans = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Rongon Technical Computer Training Center",
  description: "Rongon Technical Computer Training Center Join us to master the latest in computer technology. We offer expert-led courses designed to launch and advance your career in the IT industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${LatoSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body
        className={`${LatoSans.variable}`}
      >
          <Navbar />
        {children}
      </body>
    </html>
  );
}
