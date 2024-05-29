import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/shared/Aos";
import Loader from "./loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwaipayan Ghosh",
  description: "This is the portfolio of Dwaipayan Ghosh",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
