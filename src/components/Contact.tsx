
import React, { useState, FormEvent } from 'react';
import { Mail, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, submit it or show success message
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato. Retornarei em breve.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section id="contato" className="bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contato</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 mb-8">
              Estou interessada em oportunidades de trabalho, especialmente em projetos ambiciosos e criativos. 
              Se você tiver alguma dúvida ou proposta, não hesite em entrar em contato comigo.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:eduardasiq.moura@gmail.com" 
                className="flex items-center text-purple-dark hover:text-purple transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span>eduardasiq.moura@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/eduardasiq-moura" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-purple-dark hover:text-purple transition-colors"
              >
                <Github className="w-5 h-5 mr-3" />
                <span>github.com/eduardasiq-moura</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple ${
                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="bg-purple hover:bg-purple-dark text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
