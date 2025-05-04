import React from "react";

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-light rounded-full -mr-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-light rounded-full -ml-32 -mb-32 opacity-30"></div>

      <div className="container mx-auto px-6 relative">
        <h2 className="section-title">Sobre</h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-purple shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Eduarda Siqueira de Moura"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold text-purple-dark mb-4">
              Olá, meu nome é{" "}
              <span className="text-purple">Eduarda Siqueira de Moura</span>
            </h3>

            <div className="text-gray-700 space-y-4">
              <p>
                Tenho 21 anos e atualmente estou cursando o 7° semestre de
                Ciência da Computação na UNIJUÍ. Atuo como bolsista em Open
                Finance no programa de bolsas da Compass UOL.
              </p>

              <p>
                Meu interesse por tecnologia surgiu ainda no ensino médio,
                durante o curso técnico em Informática. Foi nessa fase que tive
                meu primeiro contato com lógica de programação e desenvolvimento
                web — e não demorou para que o front-end se tornasse minha
                principal área de interesse.
              </p>

              <p>
                A possibilidade de transformar códigos em interfaces interativas
                e intuitivas me despertou uma verdadeira paixão pela área. Desde
                então, venho buscando me aprimorar constantemente aprofundando
                meus conhecimentos em HTML, CSS e JavaScript e aplicando o que
                aprendo por meio de estudos, experimentações e pequenas práticas
                pessoais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
