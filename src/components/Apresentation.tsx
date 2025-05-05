export default function Apresentation() {
    return (
        <section className="bg-gradient-to-r from-purple-light to-background dark:from-purple-dark dark:to-gray-900 py-24 md:py-32 transition-colors">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-purple-darker dark:text-purple-light mb-4">
                            Olá, eu sou{" "}
                            <span className="text-purple dark:text-purple-light">
                                Eduarda Siqueira
                            </span>
                        </h1>
                        <p className="text-xl text-foreground dark:text-gray-300 mb-6">
                            Desenvolvedora Front-end
                        </p>
                        <a
                            href="#contato"
                            className="inline-block bg-purple hover:bg-purple-dark dark:bg-purple-light dark:hover:bg-purple text-white dark:text-gray-900 font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple dark:focus:ring-purple-light"
                        >
                            Entre em contato
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple dark:bg-purple-light rounded-full opacity-20 blur-xl transform -translate-x-4 translate-y-4"></div>
                            <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-white dark:border-gray-700 shadow-xl relative z-10">
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
    )
}