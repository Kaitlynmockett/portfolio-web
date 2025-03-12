import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Nav from "./components/nav/nav";


import "./globals.css";

const DMSans = DM_Sans({
  weight: ['400', '700', '900'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "Kaitlyn Mockett Portfolio",
  description: "Portfolio app written by Kaitlyn Mockett",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.className} antialiased`}
      >
        <Nav />
        <main className="py-10 max-w-6xl mx-auto"> 
          {children}
          
        </main>
        
      </body>
    </html>
  );
}
