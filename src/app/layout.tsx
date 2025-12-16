import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Gözümün Nuru | Pırlanta & Mücevher",
  description: "Işıltının Anlama Dönüştüğü Yer. Her pırlantada aşkın zarafetini taşır.",
  keywords: "pırlanta, mücevher, altın, yüzük, kolye, bileklik, küpe, özel tasarım",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
