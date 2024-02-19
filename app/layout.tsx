import type { Metadata } from "next";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "ACC SCD 2024",
  description: "ACC Student Community Day 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='font-Pretendard'>{children}</body>
    </html>
  );
}
