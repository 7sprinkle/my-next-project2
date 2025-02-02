// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Header from "./_componets/Header";
import Footer from "./_componets/Footer";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
