
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Indian Granite | NM SONS EXIM & TRADING LLP",
  description:
    "Explore granite and natural stone collections from NM SONS EXIM & TRADING LLP. Contact our team for product specifications and export enquiries.",
  applicationName: "NM SONS Granite",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
