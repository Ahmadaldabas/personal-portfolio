import type { Metadata } from "next";
import { Prompt, Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/config/utils";

const prompt = Prompt({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-prompt",
});
const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Personal portfolo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-main text-stone-700 text-xl tracking-tighter scroll-smooth",
          workSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
