import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { PageContextProvider } from "@contexts/pageContext";
import { FlightContextProvider } from "@contexts/flightContext";
import { DialogueContextProvider } from "@contexts/dialogueContext";
import { RouteChangeListener } from "@components/RouteChangeListener";
import { Dialogue } from "@components/Dialogue";
import { IncomingData } from "@components/IncomingData";
import { Experience } from "@components/Experience";
import { I18nProvider } from "./i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake Pitman",
  description: "Jake Pitman's personal portfolio website",
};

type WithProvidersProps = {
  children: React.ReactNode;
};
const WithProviders = ({ children }: WithProvidersProps) => (
  <PageContextProvider>
    <FlightContextProvider>
      <I18nProvider locale="en-US">
        <DialogueContextProvider>{children}</DialogueContextProvider>
      </I18nProvider>
    </FlightContextProvider>
  </PageContextProvider>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WithProviders>
          {/*  page-specific content can be re-added here
          <div className="flex absolute z-10 justify-center items-center w-full h-full">
              {children}
          </div> */}
          <RouteChangeListener />
          <Dialogue />
          {/* <IncomingData />
           <Experience style={{ position: "absolute", zIndex: "0" }} />  */}
          <div id="portal" className="z-50" />
        </WithProviders>
      </body>
    </html>
  );
}
