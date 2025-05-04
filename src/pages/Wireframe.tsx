import { Helmet, HelmetProvider } from "react-helmet-async";

const ButtonBackToPage = () => {
  return (
    <button
      onClick={() => (window.location.href = "/")}
      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 ml-4 p-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-md fixed bottom-4 left-4 transition-colors"
    >
      Voltar para a Página Principal
    </button>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        Logo
      </div>
      <div className="space-x-4">
        <a
          href="#sobre"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
        >
          Sobre
        </a>
        <a
          href="#experiencia"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
        >
          Experiência
        </a>
        <a
          href="#habilidades"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
        >
          Habilidades
        </a>
        <a
          href="#contato"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
        >
          Contato
        </a>
      </div>
    </div>
  </nav>
);

const About = () => (
  <section id="sobre" className="py-16 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Sobre
      </h2>
      <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experiencia" className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Experiência
      </h2>
      <div className="space-y-4">
        <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="habilidades" className="py-16 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Habilidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Contato
      </h2>
      <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 dark:bg-gray-800 text-white py-6">
    <div className="container mx-auto px-6 text-center">
      <div className="h-16 bg-gray-700 dark:bg-gray-600 rounded-md"></div>
    </div>
  </footer>
);

const Index = () => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>Wireframe | Portfólio Pessoal</title>
        <meta
          name="description"
          content="Wireframe de portfólio pessoal para desenvolvedor."
        />
        <meta
          name="keywords"
          content="portfólio, wireframe, desenvolvedor, front-end"
        />
        <meta name="author" content="Nome do Desenvolvedor" />
        <meta property="og:title" content="Wireframe | Portfólio Pessoal" />
        <meta
          property="og:description"
          content="Wireframe de portfólio pessoal para desenvolvedor."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="pt-20 bg-white dark:bg-gray-900 transition-colors">
        <section className="bg-gradient-to-r from-purple-200 to-white dark:from-purple-800 dark:to-gray-900 py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-md mb-4 w-3/4"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-6 w-1/2"></div>
                <div className="h-10 bg-purple-600 dark:bg-purple-400 rounded-md w-40"></div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
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
    </div>
  </HelmetProvider>
);

export default function Wireframe() {
  return (
    <div>
      <Index />
      <ButtonBackToPage />
    </div>
  );
}
