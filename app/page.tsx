import Image from "next/image"

export default function Home() {
  return (
    <div className="py-8">
      <section className="flex flex-col md:flex-row items-center mb-12">
        <Image
          src="/placeholder.svg"
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

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?text=Consulta+Nutricional"
              alt="Consulta Nutricional"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Consulta Nutricional</h3>
              <p className="text-gray-600">
                Realizamos uma avaliação completa do seu perfil alimentar, histórico de saúde e objetivos pessoais. Com
                base nessa análise, desenvolvemos um plano nutricional personalizado que se adapta ao seu estilo de
                vida.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?text=Acompanhamento+Mensal"
              alt="Acompanhamento Mensal"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Acompanhamento Mensal</h3>
              <p className="text-gray-600">
                Oferecemos suporte contínuo para garantir que você alcance seus objetivos de saúde. Inclui ajustes no
                plano nutricional, monitoramento de progresso e orientações personalizadas.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?text=Palestras+Educativas"
              alt="Palestras Educativas"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Palestras Educativas</h3>
              <p className="text-gray-600">
                Ministramos sessões informativas sobre nutrição e saúde para grupos e empresas. Abordamos temas como
                alimentação saudável no trabalho, prevenção de doenças através da dieta e mais.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?text=Análise+de+Cardápios"
              alt="Análise de Cardápios"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Análise de Cardápios</h3>
              <p className="text-gray-600">
                Realizamos revisão e otimização de cardápios para restaurantes e instituições. Garantimos que as
                refeições sejam nutritivas, balanceadas e atendam às necessidades específicas do seu público.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

