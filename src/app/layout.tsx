import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import HeaderNav from "@/components/headernav";

export const metadata: Metadata = {
  title: {
    template:  `%s | TRUE EXPLORER`,
    default: "TRUE EXPLORER"
  },
  description: "A Site for Life Exploration, On Journey of your Life",
  authors: [{ name: "KOISO"}, { name: "StupidBF"}],
  openGraph: {
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers>
          <HeaderNav/>
          {children}
        </Providers>  
      </body>
    </html>
  );
}
