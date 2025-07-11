import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/logo_vidra_sem_fundo_sem fundo.png" 
              alt="Vidraçaria Liderança" 
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Refletindo qualidade e construindo confiança há anos no mercado de Umuarama e região.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <div>
                  <a href="tel:+5544984152049" className="text-gray-300 hover:text-white transition-colors duration-200">
                    (44) 98415-2049
                  </a>
                  <p className="text-xs text-gray-400">Diego</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <div>
                  <a href="tel:+5544984564529" className="text-gray-300 hover:text-white transition-colors duration-200">
                    (44) 98456-4529
                  </a>
                  <p className="text-xs text-gray-400">Jonathan</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3" />
                <a href="mailto:contato@vidracarialideranca.com.br" className="text-gray-300 hover:text-white transition-colors duration-200">
                  contato@vidracarialideranca.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Address and Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Localização</h3>
            <div className="flex items-start mb-4">
              <MapPin className="h-5 w-5 text-red-500 mr-3 mt-1" />
              <p className="text-gray-300 text-sm">
                Av. Rio Grande do Norte, 5016<br />
                Zona V, Umuarama - PR<br />
                87504-000
              </p>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-300 text-sm font-medium mb-2">Horário de Atendimento:</p>
              <p className="text-gray-400 text-sm">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Vidraçaria Liderança. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;