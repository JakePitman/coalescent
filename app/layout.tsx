import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Experience } from "@components/Experience";
import { Navigation } from "@components/Navigation";
import { Dashboard } from "@components/Dashboard";
import { PageContextProvider } from "@contexts/pageContext";
import { FlightContextProvider } from "@contexts/flightContext";
import { RouteChangeListener } from "@components/RouteChangeListener";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake Pitman",
  description: "Jake Pitman's personal portfolio website",
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
          <FlightContextProvider>
            <RouteChangeListener />
            {/* <div className="flex absolute z-10 justify-center items-center w-full h-full">
              {children}
            </div> */}
            <Experience style={{ position: "absolute", zIndex: "0" }} />
          </FlightContextProvider>
        </PageContextProvider>
      </body>
    </html>
  );
}
