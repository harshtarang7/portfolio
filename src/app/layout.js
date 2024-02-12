import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "portfolio ",
  icon:"favicon/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
         <link rel="icon" href={metadata.icon} />
       </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
