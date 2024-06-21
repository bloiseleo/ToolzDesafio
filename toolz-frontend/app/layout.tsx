import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toolz",
  description: "Plataforma de cursos online completa e preparada para acompanhar você no seu desenvolvimento pessoal e profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="min-w-screen min-h-screen" lang="pt-BR">
      <body className={`${inter.className} h-full w-full`}>
        {children}
      </body>
    </html>
  );
}
