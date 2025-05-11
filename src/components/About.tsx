import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-background dark:bg-gray-900 relative overflow-hidden py-24 md:py-32 transition-colors"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-light dark:bg-purple-dark rounded-full -mr-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-light dark:bg-purple-dark rounded-full -ml-32 -mb-32 opacity-30"></div>

      <div className="container mx-auto px-6 relative">
        <h2 className="section-title">Sobre</h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold text-purple-darker dark:text-purple-light mb-4">
              Olá, meu nome é{" "}
              <span className="text-purple dark:text-purple-light">
                Eduarda Siqueira de Moura
              </span>
            </h3>

            <div className="text-foreground dark:text-gray-300 space-y-4">
              <p>
                Tenho 21 anos e atualmente estou cursando o 7° semestre de
                Ciência da Computação na UNIJUÍ. <br />Atuo como bolsista em Open
                Finance no programa de bolsas da Compass UOL.
              </p>

              <p>
                Meu interesse por tecnologia surgiu ainda no ensino médio,
                durante o curso técnico em Informática. <br />Foi nessa fase que tive
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
