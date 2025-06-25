import React, { useState, useEffect } from 'react';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: 'Blindex', logo: 'https://via.placeholder.com/200x100/e53e3e/ffffff?text=BLINDEX' },
    { name: 'Reiki', logo: 'https://via.placeholder.com/200x100/2563eb/ffffff?text=REIKI' },
    { name: 'Udinese', logo: 'https://via.placeholder.com/200x100/059669/ffffff?text=UDINESE' },
    { name: 'ALCOA', logo: 'https://via.placeholder.com/200x100/7c3aed/ffffff?text=ALCOA' },
    { name: 'Guardian', logo: 'https://via.placeholder.com/200x100/dc2626/ffffff?text=GUARDIAN' },
    { name: 'Temperex', logo: 'https://via.placeholder.com/200x100/ea580c/ffffff?text=TEMPEREX' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            TRABALHAMOS COM AS MELHORES MARCAS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Garantindo qualidade e durabilidade em cada projeto através de parcerias com os principais fornecedores do mercado.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="w-1/5 flex-shrink-0 px-4">
                <div className="bg-gray-50 rounded-lg p-8 h-24 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;