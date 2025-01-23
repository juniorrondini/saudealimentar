"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones para menu responsivo
import styles from "./Header.module.css"; // CSS Module

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          className={`text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Saúde Alimentar
        </Link>

        {/* Botão Menu Mobile */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu de Navegação */}
        <ul
          className={`absolute md:relative top-16 md:top-0 right-0 w-full md:w-auto scrolled md:bg-transparent md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-6 md:p-0 transition-all duration-500 ${
            menuOpen ? "block" : "hidden"
          } ${isScrolled ? styles.scrolled : styles.scrolled}`}
        >
          <li>
            <Link
              href="/"
              className="text-lg text-black transition-colors duration-300 py-2 px-4 hover:text-gray-700"
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-lg text-black transition-colors duration-300 py-2 px-4 hover:text-gray-700"
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
            >
              Sobre Mim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
