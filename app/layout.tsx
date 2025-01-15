import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project idea planner",
  description: "project planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
