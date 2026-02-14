import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",
// });
//Load Inter from Gooogle font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


//SEO Metadata
export const metadata: Metadata = {
  title: "Emmy Portfolio - Full Stack Developer",
  description: "Portfolio showcasing my projeccts and skills as a MERN stack developer",
  keywords: ["Full Stack Developer", "MERN", "React", "Next.js", "TypeScript", "TailwindCss", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.className} ${inter.className} antialiased bg-gray-950 textt-white`}
      > 
        <Navbar />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
