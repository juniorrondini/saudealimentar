"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css"; // Importação do CSS Module

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? styles.scrolled : styles.animatedHeader
      } shadow-lg backdrop-blur-md`}
    >
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className={`text-3xl font-semibold tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Saúde Alimentar
        </Link>

        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className={`text-lg transition-colors duration-300 py-2 px-4 ${
                isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={`text-lg transition-colors duration-300 py-2 px-4 ${
                isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
              }`}
            >
              Sobre Mim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
