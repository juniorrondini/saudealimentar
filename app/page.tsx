import Image from "next/image";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="py-8">
      {/* Seção principal de boas-vindas */}
      <section className="flex flex-col md:flex-row items-center mb-12 px-4 max-w-6xl mx-auto">
        <Image
          src="/Priscila.png"
          alt="Profissional de Saúde Alimentar"
          width={300}
          height={300}
          className="rounded-full mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">Bem-vindo à Saúde Alimentar</h1>
          <p className="text-lg">
            Com anos de experiência e um compromisso inabalável com a qualidade, oferecemos serviços profissionais de
            saúde alimentar para melhorar sua qualidade de vida através de uma alimentação equilibrada e saudável.
          </p>
        </div>
      </section>

      {/* Seção de serviços importada */}
      <Services />
    </div>
  );
}
