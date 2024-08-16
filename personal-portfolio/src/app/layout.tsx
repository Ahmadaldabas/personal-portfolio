import type { Metadata } from "next";
import { Prompt, Work_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/config/utils";

// const prompt = Prompt({
//   weight: ["400", "600", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   variable: "--font-prompt",
// });
const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-caveat",
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
          "overflow-x-hidden overflow-y-scroll scroll-smooth bg-main text-lg tracking-tighter text-stone-700 md:text-xl",
          workSans.className,
          caveat.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
