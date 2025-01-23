import Image from "next/image"

export default function About() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Sobre Mim</h1>

      <section className="flex flex-col md:flex-row items-start mb-12">
        <Image
          src="/placeholder.svg"
          alt="Foto Profissional"
          width={300}
          height={400}
          className="rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Formação Profissional</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Graduação em Nutrição - Universidade XYZ (2010)</li>
            <li>Mestrado em Ciências da Nutrição - Universidade ABC (2013)</li>
            <li>Especialização em Nutrição Esportiva - Instituto DEF (2015)</li>
          </ul>
          <p className="mb-4">
            Com mais de 10 anos de experiência na área de saúde alimentar, dedico-me a ajudar meus clientes a alcançarem
            uma relação saudável com a comida e a melhorarem sua qualidade de vida através da nutrição.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Minha Trajetória Pessoal</h2>
        <p className="mb-4">
          Meu interesse pela nutrição começou ainda na adolescência, quando percebi o impacto que a alimentação tinha na
          minha própria saúde e bem-estar. Desde então, decidi dedicar minha vida a ajudar outras pessoas a descobrirem
          o poder de uma alimentação equilibrada.
        </p>
        <p className="mb-4">
          Ao longo da minha carreira, tive a oportunidade de trabalhar com uma ampla variedade de clientes, desde
          atletas de alto rendimento até pessoas com condições médicas complexas. Cada experiência me ensinou algo novo
          e me ajudou a aprimorar minha abordagem personalizada para cada indivíduo.
        </p>
        <p>
          Fora do trabalho, sou uma entusiasta da culinária saudável e adoro experimentar novas receitas. Também sou
          praticante de yoga e acredito na importância do equilíbrio entre corpo e mente para uma vida saudável.
        </p>
      </section>
    </div>
  )
}

