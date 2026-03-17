import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarathiLipi — Write TypeScript in Marathi",
  description:
    "MarathiLipi enables developers to write JavaScript and TypeScript using Marathi syntax. Official documentation and language reference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
