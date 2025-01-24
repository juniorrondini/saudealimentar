import Image from "next/image";

export default function Services() {
  return (
    <section className="mb-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Nossos Serviços</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            title: "Consulta Nutricional",
            description:
              "Realizamos uma avaliação completa do seu perfil alimentar, histórico de saúde e objetivos pessoais.",
            image: "/consulta-nutricional.png",
          },
          {
            title: "Acompanhamento Mensal",
            description:
              "Oferecemos suporte contínuo com ajustes no plano nutricional e monitoramento de progresso.",
            image: "/acompanhamento-mensal.png",
          },
          {
            title: "Palestras Educativas",
            description:
              "Ministramos sessões informativas sobre nutrição para grupos e empresas.",
            image: "/palestra-educativa.png",
          },
          {
            title: "Análise de Cardápios",
            description:
              "Revisamos cardápios para restaurantes e instituições para garantir refeições balanceadas.",
            image: "/analise-menu.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 text-center sm:text-left bg-gradient-to-r from-green-100 to-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8997726626133132"
     crossOrigin="anonymous"></script>
    </section>
  );
}
