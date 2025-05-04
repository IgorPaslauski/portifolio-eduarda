import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-darker text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Eduarda Siqueira</h3>
            <p className="text-gray-300 mt-1">Desenvolvedora Front-end</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              © {currentYear} Todos os direitos reservados
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Desenvolvido por Ígor Paslauski Pedroso de Oliveira
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
