import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 'envidracamento-reiki',
      title: 'Envidraçamento Reiki',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'esquadrias-aluminio',
      title: 'Esquadrias de Alumínio',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'box-banheiro',
      title: 'Box para Banheiro',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'fachadas-vidro',
      title: 'Fachadas de Vidro',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'espelhos-decorativos',
      title: 'Espelhos Decorativos',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'guarda-corpos',
      title: 'Guarda-Corpos',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'portas-vidro',
      title: 'Portas de Vidro',
      image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 'manutencao-reparos',
      title: 'Manutenção e Reparos',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, services.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">NOSSOS SERVIÇOS</h2>
          <p className="text-xl text-gray-600 font-medium">VIDROS | ESPELHOS | ESQUADRIAS DE ALUMÍNIO</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-1/4 flex-shrink-0 px-3">
                  <Link 
                    to={`/servicos/${service.id}`}
                    className="block group"
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
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;