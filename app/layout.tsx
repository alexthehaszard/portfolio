import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./nav";
import Background from "./background";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Haszard - Frontend Devloper",
  description: "Frontend Development portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        {children}
        <Background></Background>
        <Footer></Footer>
      </body>
    </html>
  );
}
