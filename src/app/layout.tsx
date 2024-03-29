import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProviders } from "../providers/next-ui-provider";

import { ClerkProvider } from "@clerk/nextjs";
import { SocketProvider } from "@/providers/socket-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <SocketProvider>
        <html lang="en" className="light">
          <body className={inter.className}>
            <NextUIProviders>{children}</NextUIProviders>
          </body>
        </html>
      </SocketProvider>
    </ClerkProvider>
  );
}
