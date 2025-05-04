import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-darker dark:bg-purple-dark text-white dark:text-gray-200 py-10 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white dark:text-purple-light">
              Eduarda Siqueira
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mt-1">
              Desenvolvedora Front-end
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300 dark:text-gray-400">
              © {currentYear} Todos os direitos reservados
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
              Desenvolvido por Ígor Paslauski Pedroso de Oliveira
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
