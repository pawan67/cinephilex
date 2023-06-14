import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "200", "300", "500", "600"],
});

export const metadata = {
  title: "Cinephilex",
  description: "Rate and review your favorite movies and TV shows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.className} container  text-secondary  mx-auto px-5 `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
