import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import { Open_Sans } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prueba_Paxzu",
  description: "Prueba_Paxzu",
}; 
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Puedes poner los pesos que necesites
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={openSans.className}
      > 
      <Navbar/>
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
