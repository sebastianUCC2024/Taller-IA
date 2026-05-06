import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ParallaxEffect from "@/components/ParallaxEffect";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVANGELION | Digital Archive",
  description: "A cinematic, maximalist digital collage of Neon Genesis Evangelion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-black text-white selection:bg-white selection:text-black antialiased min-h-full flex flex-col scroll-smooth ${inter.variable} ${notoSansJP.variable} ${spaceGrotesk.variable}`}>
        <ParallaxEffect />
        {children}
      </body>
    </html>
  );
}
