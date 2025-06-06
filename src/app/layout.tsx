import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Saathi",
  description: "Reel Banao, Naukari Paao",
  icons: {
    icon: "/Logo.svg",
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased ${poppins.variable} font-poppins`}>
        <GoogleAnalytics />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
