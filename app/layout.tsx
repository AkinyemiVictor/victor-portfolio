import type { Metadata } from "next";
import { Fira_Code, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VICTOR.AKINYEMI | WEB DEVELOPER",
  description:
    "Frontend developer focused on responsive, high-performing web experiences.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=va2", type: "image/x-icon" },
      { url: "/favicon-va.svg?v=va2", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico?v=va2"],
    apple: ["/favicon-va.svg?v=va2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
