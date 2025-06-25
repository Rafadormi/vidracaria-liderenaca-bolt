import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { id: 'envidracamento-reiki', name: 'Envidraçamento de Ambientes (Reiki)' },
    { id: 'esquadrias-aluminio', name: 'Esquadrias de Alumínio' },
    { id: 'box-banheiro', name: 'Box para Banheiro' },
    { id: 'fachadas-vidro', name: 'Fachadas de Vidro' },
    { id: 'espelhos-decorativos', name: 'Espelhos Decorativos' },
    { id: 'guarda-corpos', name: 'Guarda-Corpos' },
    { id: 'portas-vidro', name: 'Portas de Vidro' },
    { id: 'manutencao-reparos', name: 'Manutenção e Reparos' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo_vidra_sem_fundo_sem fundo.png" 
              alt="Vidraçaria Liderança" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              INÍCIO
            </Link>
            <Link 
              to="/sobre" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/sobre') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              SOBRE NÓS
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`font-medium transition-colors duration-200 flex items-center ${
                location.pathname.startsWith('/servicos') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}>
                SERVIÇOS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link 
                    to="/servicos" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium"
                  >
                    Ver Todos os Serviços
                  </Link>
                  <hr className="my-2" />
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/servicos/${service.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/portfolio" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/portfolio') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              PORTFÓLIO
            </Link>
            <Link 
              to="/parceiros" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/parceiros') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              PARCEIROS
            </Link>
            <Link 
              to="/contato" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/contato') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              CONTATO
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                INÍCIO
              </Link>
              <Link 
                to="/sobre" 
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SOBRE NÓS
              </Link>
              <Link 
                to="/servicos" 
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVIÇOS
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                PORTFÓLIO
              </Link>
              <Link 
                to="/parceiros" 
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                PARCEIROS
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTATO
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;