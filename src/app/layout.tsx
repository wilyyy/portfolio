import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   metadataBase: new URL("https://www.williamlaurel.com"),
   title: {
      default: "William Alvarez | Developer based in Vancouver, Canada",
      template: "%s | William Alvarez",
   },
   description:
      "The craft of William Laurel Alvarez, a fullstack developer with a passion for human centered design.",
   openGraph: {
      type: "website",
      siteName: "William Alvarez | Developer based in Vancouver, Canada",
      title: "William Alvarez | Developer based in Vancouver, Canada",
      description:
         "The craft of William Laurel Alvarez, a fullstack developer with a passion for human centered design.",
   },
   twitter: {
      card: "summary_large_image",
      title: "William Alvarez | Developer based in Vancouver, Canada",
      description:
         "The craft of William Laurel Alvarez, a fullstack developer with a passion for human centered design.",
   },
   robots: {
      index: true,
      follow: true,
   },
   applicationName: "William Alvarez",
   appleWebApp: {
      title: "William Alvarez | Developer based in Vancouver, Canada",
   },
   // icons: {
   //   icon: "/sitelogo.png",
   //   shortcut: "/sitelogo.png",
   // },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
      </html>
   );
}
