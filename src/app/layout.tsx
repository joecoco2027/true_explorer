import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/headernav";
import { ThemeProvider } from "@/components/theme-provider";

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
    <>
    
      <html  suppressHydrationWarning>
        <body className={`antialiased `}>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem 
          disableTransitionOnChange
          >
              <HeaderNav/>
              {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
