import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/shared/Aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwaipayan Ghosh",
  description: "This is the portfolio of Dwaipayan Ghosh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
