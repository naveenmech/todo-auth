import "./globals.css";
import { Inter } from "next/font/google";
import UserProvider from "@/contextPage/userContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {children} */}
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
