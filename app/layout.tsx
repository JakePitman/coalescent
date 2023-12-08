import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Experience } from "@components/Experience";
import { Navigation } from "@components/Navigation";
import { PageContextProvider } from "@contexts/pageContext";
import { RouteChangeListener } from "@components/RouteChangeListener";

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
        <PageContextProvider>
          <RouteChangeListener />
          <Navigation className="absolute z-20" />
          <div className="flex absolute z-10 justify-center items-center w-full h-full">
            {children}
          </div>
          <Experience style={{ position: "absolute", zIndex: "0" }} />
        </PageContextProvider>
      </body>
    </html>
  );
}
