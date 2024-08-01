import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const mainFont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Fetch Rick and Morty API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="icon.svg" />
      </head>
      <body
        className={`${mainFont.className} bg-slate-900 text-white flex flex-col min-h-screen container mx-auto`}
      >
        <Navbar />
        <div className="flex-grow container mx-auto mt-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
