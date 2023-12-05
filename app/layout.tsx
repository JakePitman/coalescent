import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Experience } from "./_components/Experience";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R3F Template",
  description: "R3F Template, with Next, Tailwind and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          {children}
          <Experience />
        </>
      </body>
    </html>
  );
}
