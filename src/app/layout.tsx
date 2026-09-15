import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sagar — Senior Full Stack .NET Engineer",
  description:
    "Md Shakhawat Hossain Sagar. Building thoughtful business software since 2016. Full-stack engineering, technical leadership, and production delivery. Based in Dhaka, open to remote opportunities.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Sagar — Software built with care",
    description:
      "Senior Full Stack .NET Engineer. From the first line of code to production.",
    type: "website",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
