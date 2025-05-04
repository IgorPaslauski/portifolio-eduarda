import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Eduarda Siqueira | Desenvolvedora Front-end</title>
        <meta
          name="description"
          content="Portfólio profissional de Eduarda Siqueira de Moura, desenvolvedora front-end com foco em criar interfaces interativas e intuitivas."
        />
        <meta
          name="keywords"
          content="desenvolvedor, front-end, portfólio, React, HTML, CSS, JavaScript"
        />
        <meta name="author" content="Eduarda Siqueira de Moura" />
        <meta
          property="og:title"
          content="Eduarda Siqueira | Desenvolvedora Front-end"
        />
        <meta
          property="og:description"
          content="Portfólio profissional de Eduarda Siqueira de Moura, desenvolvedora front-end com foco em criar interfaces interativas e intuitivas."
        />
        <meta property="og:type" content="website" />
        <html lang="pt-BR" />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        <section className="bg-gradient-to-r from-purple-light to-white py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-darker mb-4">
                  Olá, eu sou{" "}
                  <span className="text-purple">Eduarda Siqueira</span>
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Desenvolvedora Front-end
                </p>
                <a
                  href="#contato"
                  className="inline-block bg-purple hover:bg-purple-dark text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Entre em contato
                </a>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple rounded-full opacity-20 blur-xl transform -translate-x-4 translate-y-4"></div>
                  <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-white shadow-xl relative z-10">
                    <img
                      src={import.meta.env.VITE_API_URL + "/image.png"}
                      alt="Eduarda Siqueira de Moura"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
