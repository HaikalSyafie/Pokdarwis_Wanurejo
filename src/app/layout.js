import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Desa Wanurejo",
  description: "Website desa Wanurejo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
      </body>
    </html>
  );
}
