"use client";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.css"; // CSS Modules

export default function Footer() {
  return (
    <footer className={`${styles.animatedFooter} text-white py-8 px-4`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Seção de Contato */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <p className="flex items-center justify-center md:justify-start mb-2">
            <Mail className="mr-2" size={18} />
            contato@saudealimentar.com
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <Phone className="mr-2" size={18} />
            (11) 99999-9999
          </p>
        </div>

        {/* Redes Sociais - Agora com o título acima dos ícones */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-xl font-bold mb-3">Redes Sociais</h3>
          <div className="flex justify-center space-x-4">
            <Link href="https://facebook.com" className="hover:text-green-200 transition-transform transform hover:scale-110">
              <Facebook size={24} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-green-200 transition-transform transform hover:scale-110">
              <Instagram size={24} />
            </Link>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="flex flex-col items-center md:items-end">
          <p>&copy; 2024 Saúde Alimentar</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8997726626133132"
    crossOrigin="anonymous"></script>
    </footer>
    
  );
}
