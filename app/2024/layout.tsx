import type { Metadata } from "next";
import React from "react";

import { defaultMetadata } from "@/app/shared-metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body>{children}</body>
    </html>
  );
}
