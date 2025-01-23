"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css"; // CSS Module

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Espaço para evitar sobreposição do header no conteúdo */}
      <div className="h-20 md:h-24"></div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? styles.scrolled : styles.animatedHeader
        } shadow-lg backdrop-blur-md`}
      >
        <nav className="container mx-auto flex justify-center md:justify-between items-center px-4 py-3 md:py-4">
          {/* Título escondido no mobile e visível no desktop */}
          <Link
            href="/"
            className={`hidden md:block font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap ${
              isScrolled ? "text-black" : "text-white"
            } text-lg sm:text-xl md:text-2xl`}
          >
            Saúde Alimentar
          </Link>

          {/* Menu sempre visível e centralizado no mobile */}
          <ul className="flex justify-center items-center gap-x-4 sm:gap-x-2 md:gap-x-8 text-sm sm:text-base md:text-lg">
            <li>
              <Link href="/" className="transition-colors duration-300 py-2 px-3 hover:text-gray-700 whitespace-nowrap">
                Home
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="transition-colors duration-300 py-2 px-3 hover:text-gray-700 whitespace-nowrap">
                Sobre Mim
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
