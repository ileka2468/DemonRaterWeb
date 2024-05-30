import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/app/components/Navbar"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-gray-800 bg-hero_pattern bg-body bg-auto bg-no-repeat bg-center`}>
        <Navbar />
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>

  );
}
