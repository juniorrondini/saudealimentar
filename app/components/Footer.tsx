import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.css"; // Importação correta para CSS Modules

export default function Footer() {
  return (
    <footer className={`${styles.animatedFooter} text-white py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Seção de Contato */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contato</h3>
            <p className="flex items-center mb-2">
              <Mail className="mr-2" size={18} />
              contato@saudealimentar.com
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" size={18} />
              (11) 99999-9999
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h3 className="text-xl font-bold mb-2">Redes Sociais</h3>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://facebook.com"
                className="hover:text-green-200 transition-transform transform hover:scale-110"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-green-200 transition-transform transform hover:scale-110"
              >
                <Instagram size={24} />
              </Link>
              {/* <Link
                href="https://twitter.com"
                className="hover:text-green-200 transition-transform transform hover:scale-110"
              >
                <Twitter size={24} />
              </Link> */}
            </div>
          </div>

          {/* Direitos Autorais */}
          <div className="w-full md:w-1/3 text-right">
            <p>&copy; 2023 Saúde Alimentar</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
