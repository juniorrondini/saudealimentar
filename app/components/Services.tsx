import Image from "next/image";

export default function Services() {
  return (
    <section className="mb-12 px-4 max-w-6xl mx-auto relative">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Nossos Serviços</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "Consulta Nutricional",
            description:
              "Realizamos uma avaliação completa do seu perfil alimentar, histórico de saúde e objetivos pessoais. Criamos um plano nutricional personalizado adaptado ao seu estilo de vida.",
            image: "/consulta-nutricional.png",
          },
          {
            title: "Acompanhamento Mensal",
            description:
              "Oferecemos suporte contínuo para garantir que você alcance seus objetivos de saúde. Inclui ajustes no plano nutricional, monitoramento de progresso e orientações personalizadas.",
            image: "/acompanhamento-mensal.png",
          },
          {
            title: "Palestras Educativas",
            description:
              "Ministramos sessões informativas sobre nutrição e saúde para grupos e empresas. Abordamos temas como alimentação saudável no trabalho e prevenção de doenças através da dieta.",
            image: "/palestra-educativa.png",
          },
          {
            title: "Análise de Cardápios",
            description:
              "Revisamos e otimizamos cardápios para restaurantes e instituições, garantindo refeições balanceadas e nutritivas, atendendo às necessidades específicas do seu público.",
            image: "/analise-menu.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl will-change-transform"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-6 bg-gradient-to-r from-green-100 to-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
