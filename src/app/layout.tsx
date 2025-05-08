import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Find Your Perfect Career Opportunity",
  description: "Connect with great career opportunities. Search for jobs, upload your resume, and find your next career move.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased font-['Helvetica']">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
