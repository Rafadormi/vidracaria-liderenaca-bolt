import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'envidracamento-reiki',
      title: 'Envidraçamento de Ambientes (Reiki)',
      description: 'Sistemas de envidraçamento para varandas, sacadas e ambientes integrados.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'esquadrias-aluminio',
      title: 'Esquadrias de Alumínio',
      description: 'Janelas, portas e estruturas em alumínio de alta qualidade.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'box-banheiro',
      title: 'Box para Banheiro',
      description: 'Boxes de vidro temperado para banheiros com design moderno.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'fachadas-vidro',
      title: 'Fachadas de Vidro',
      description: 'Fachadas comerciais e residenciais em vidro estrutural.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'espelhos-decorativos',
      title: 'Espelhos Decorativos',
      description: 'Espelhos sob medida para decoração de ambientes.',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'guarda-corpos',
      title: 'Guarda-Corpos',
      description: 'Guarda-corpos em vidro para escadas, varandas e mezaninos.',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'portas-vidro',
      title: 'Portas de Vidro',
      description: 'Portas de vidro temperado para ambientes internos e externos.',
      image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'manutencao-reparos',
      title: 'Manutenção e Reparos',
      description: 'Serviços de manutenção e reparo para vidros e esquadrias.',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Conheça Nossas Soluções</h1>
            <p className="text-xl opacity-90">
              Serviços especializados em vidros e esquadrias de alumínio
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/servicos/${service.id}`}
                className="group block"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;