import "./globals.css";
import Header from "@/components/layout/Header";
import NextTopLoader from "nextjs-toploader";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/images/logo/logo.png"
        type="image/png"
        sizes="16x16"
      />
      <body className={` container  text-secondary  mx-auto px-5 `}>
        <NextTopLoader
          color="#2E2D2F"
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #5447ff,0 0 5px #ff0fbf"
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
