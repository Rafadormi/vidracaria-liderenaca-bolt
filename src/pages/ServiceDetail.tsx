import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData: Record<string, any> = {
    'envidracamento-reiki': {
      title: 'Envidraçamento de Ambientes (Reiki)',
      banner: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      description: `O sistema Reiki de envidraçamento é a solução perfeita para quem deseja integrar ambientes, ampliar espaços e criar uma sensação de continuidade entre áreas internas e externas. Com vidros de alta qualidade e perfis de alumínio resistentes, oferecemos proteção contra intempéries sem comprometer a vista e a luminosidade natural.

      Ideal para varandas gourmet, sacadas, áreas de lazer e ambientes comerciais, o envidraçamento Reiki proporciona conforto térmico e acústico, além de valorizar significativamente o imóvel. Nossos sistemas são projetados para suportar ventos fortes e oferecer máxima segurança.`,
      features: [
        'Vidros temperados de alta resistência',
        'Perfis de alumínio anodizado',
        'Sistema de abertura deslizante',
        'Proteção UV',
        'Fácil manutenção',
        'Garantia de qualidade'
      ],
      gallery: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ]
    },
    'esquadrias-aluminio': {
      title: 'Esquadrias de Alumínio',
      banner: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      description: `Nossas esquadrias de alumínio combinam durabilidade, funcionalidade e design moderno. Fabricadas com perfis de alta qualidade e acabamentos que resistem ao tempo, oferecemos janelas, portas e estruturas que atendem tanto projetos residenciais quanto comerciais.

      Com opções de cores e acabamentos variados, nossas esquadrias se adaptam a qualquer estilo arquitetônico. Todos os produtos passam por rigoroso controle de qualidade e são instalados por profissionais especializados.`,
      features: [
        'Perfis de alumínio extrudado',
        'Múltiplas opções de cores',
        'Sistemas de abertura variados',
        'Vedação eficiente',
        'Resistência à corrosão',
        'Baixa manutenção'
      ],
      gallery: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ]
    },
    'box-banheiro': {
      title: 'Box para Banheiro',
      banner: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
      description: `Transforme seu banheiro com nossos boxes de vidro temperado, que combinam elegância, funcionalidade e segurança. Oferecemos soluções sob medida para qualquer espaço, desde banheiros compactos até suítes amplas.

      Nossos boxes são fabricados com vidro temperado de 8mm, garantindo máxima segurança e durabilidade. Com perfis de alumínio de alta qualidade e ferragens importadas, proporcionamos um produto que une beleza e resistência.`,
      features: [
        'Vidro temperado 8mm',
        'Perfis de alumínio anodizado',
        'Ferragens importadas',
        'Vedação com borrachas de qualidade',
        'Fácil limpeza',
        'Instalação profissional'
      ],
      gallery: [
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ]
    }
  };

  const service = serviceData[serviceId || ''] || {
    title: 'Serviço não encontrado',
    banner: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
    description: 'Serviço não encontrado. Volte para a página de serviços.',
    features: [],
    gallery: []
  };

  const whatsappMessage = `Olá! Gostaria de saber mais sobre ${service.title}. Podem me ajudar?`;
  const whatsappUrl = `https://wa.me/5544984152049?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-20">
      {/* Banner */}
      <section 
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${service.banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/servicos"
              className="inline-flex items-center text-white hover:text-gray-300 mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar para Serviços
            </Link>
            <h1 className="text-5xl font-bold text-white">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {service.description.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Features */}
              {service.features.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Características</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {service.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Exemplos de Obras</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.gallery.map((image: string, index: number) => (
                      <div key={index} className="aspect-w-16 aspect-h-12 overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`Exemplo ${index + 1}`}
                          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco para receber um orçamento personalizado para seu projeto.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Falar no WhatsApp
                </a>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Contatos</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Diego</p>
                      <p className="text-gray-600">(44) 98415-2049</p>
                    </div>
                    <div>
                      <p className="font-medium">Jonathan</p>
                      <p className="text-gray-600">(44) 98456-4529</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;