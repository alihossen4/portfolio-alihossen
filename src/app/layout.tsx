"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { FaBars, FaTimes} from 'react-icons/fa';
import "./globals.css";
import Image from "next/image";
import logo from "../../public/Logo.png"
import Link from "next/link";
import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const ScrollHandler =() =>{
    const scroll = window.scrollY;
      setIsScroll(scroll>10);

  }
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(()=>{
    window.addEventListener('scroll', ScrollHandler);
    return ()=> window.removeEventListener(
      'scroll', ScrollHandler
    )
  },[])
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className={`flex w-full h-[100px] ${isScroll ? "bg-[#1A0B2E]" : ""} top-0 z-50 fixed`}>
  <div className="flex justify-between items-center max-w-[1320px] mx-auto px-4 w-full">
    
    {/* Logo */}
    <div className="logo">
      <Image src={logo} alt="logo" className="w-[35px] h-[39px]" />
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-8 text-[20px] plus-jakarta-sans">
      <Link href="/" className="hover:text-emerald-300">Home</Link>
      <Link href="/about" className="hover:text-emerald-300">About</Link>
      <Link href="/contact" className="hover:text-emerald-300">Contact</Link>
    </div>

    {/* Mobile Toggle */}
    <div className="md:hidden">
      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden absolute top-[100px] left-0 w-full bg-[#1A0B2E] flex flex-col items-center transition-transform duration-300 ${
      isMenuOpen ? "translate-y-0" : "-translate-y-full"
    }`}
  >
    <Link href="/" className="py-4 hover:text-emerald-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
    <Link href="/about" className="py-4 hover:text-emerald-300" onClick={() => setIsMenuOpen(false)}>About</Link>
    <Link href="/contact" className="py-4 hover:text-emerald-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
  </div>
</header>
        {children}
      </body>
    </html>
  );
}
