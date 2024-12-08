import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";

import "./globals.css";

const rubik = Rubik({
  weight: ["300", "400", "500"],
  subsets: ["latin"]

});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} `}>
        <Header />
        <main className=" px-4 md:px-10 lg:px-20 xl:px-40 py-10" >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}