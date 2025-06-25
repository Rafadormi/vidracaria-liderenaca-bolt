import React from 'react';

const Partners = () => {
  const partners = [
    { 
      name: 'Blindex', 
      logo: 'https://via.placeholder.com/300x150/e53e3e/ffffff?text=BLINDEX',
      description: 'Líder em vidros temperados e laminados'
    },
    { 
      name: 'Reiki', 
      logo: 'https://via.placeholder.com/300x150/2563eb/ffffff?text=REIKI',
      description: 'Sistemas de envidraçamento de alta qualidade'
    },
    { 
      name: 'Udinese', 
      logo: 'https://via.placeholder.com/300x150/059669/ffffff?text=UDINESE',
      description: 'Perfis de alumínio premium'
    },
    { 
      name: 'ALCOA', 
      logo: 'https://via.placeholder.com/300x150/7c3aed/ffffff?text=ALCOA',
      description: 'Alumínio de alta performance'
    },
    { 
      name: 'Guardian', 
      logo: 'https://via.placeholder.com/300x150/dc2626/ffffff?text=GUARDIAN',
      description: 'Vidros especiais e de segurança'
    },
    { 
      name: 'Temperex', 
      logo: 'https://via.placeholder.com/300x150/ea580c/ffffff?text=TEMPEREX',
      description: 'Vidros temperados de excelência'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Qualidade Garantida do Início ao Fim</h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Trabalhamos com os melhores fornecedores do mercado
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              A excelência de um projeto começa na escolha da matéria-prima. Por isso, a Vidraçaria Liderança orgulha-se de trabalhar em parceria com os fornecedores mais renomados do mercado. Essa colaboração garante que cada peça de vidro, cada perfil de alumínio e cada ferragem instalada em sua obra tenha a máxima durabilidade, segurança e o melhor acabamento. Ao escolher nossos serviços, você tem a certeza de estar investindo em qualidade certificada.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="text-center group">
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="mx-auto h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pronto para seu próximo projeto?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar suas ideias em realidade com a qualidade que você merece.
          </p>
          <a
            href="https://wa.me/5544984152049?text=Olá! Gostaria de saber mais sobre os serviços da Vidraçaria Liderança."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;