import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsappUrl = "https://wa.me/5544984152049?text=Olá! Gostaria de saber mais sobre os serviços da Vidraçaria Liderança.";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl opacity-90 mb-8">
              Estamos prontos para atender você e realizar seu projeto
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-53.123456!3d-23.789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzIwLjQiUyA1M8KwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Vidraçaria Liderança"
                />
              </div>
              <p className="text-center mt-4 text-gray-600">
                <a 
                  href="https://maps.google.com/?q=Av.+Rio+Grande+do+Norte,+5016+-+Zona+V,+Umuarama+-+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Clique para traçar a rota
                </a>
              </p>
            </div>

            {/* Contact Details */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              
              <div className="space-y-8">
                {/* WhatsApp Diego */}
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp - Diego</h3>
                    <a 
                      href="https://wa.me/5544984152049"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium text-lg"
                    >
                      (44) 98415-2049
                    </a>
                  </div>
                </div>

                {/* WhatsApp Jonathan */}
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp - Jonathan</h3>
                    <a 
                      href="https://wa.me/5544984564529"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium text-lg"
                    >
                      (44) 98456-4529
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                    <a 
                      href="mailto:contato@vidracarialideranca.com.br"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      contato@vidracarialideranca.com.br
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Bar */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <MapPin className="h-6 w-6 mr-3" />
            <p className="text-lg font-medium">
              Av. Rio Grande do Norte, 5016 - Zona V, Umuarama - PR, 87504-000
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;