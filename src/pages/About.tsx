import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              A Qualidade e a Confiança que Lideram o Mercado
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Fundada com o propósito de inovar no mercado de Umuarama e região
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Fachada da Vidraçaria Liderança"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fundada com o propósito de inovar no mercado de Umuarama e região, a Vidraçaria Liderança se destaca pela excelência em soluções de vidros e esquadrias de alumínio. Nossa trajetória é marcada pela responsabilidade e pela busca incessante da satisfação de nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Oferecer produtos e serviços de alta qualidade, combinando segurança, funcionalidade e design moderno para transformar ambientes residenciais e comerciais.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconhecida como a empresa líder e de maior confiança no segmento, sendo referência em atendimento personalizado e inovação.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-700 leading-relaxed">
                Nosso trabalho é pautado na Qualidade dos materiais, na Responsabilidade com os prazos e na Confiança estabelecida através de um atendimento transparente e dedicado a cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;