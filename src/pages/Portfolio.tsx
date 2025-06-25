import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Residência Moderna',
      category: 'residencial',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['fachadas', 'residencial']
    },
    {
      id: 2,
      title: 'Edifício Comercial',
      category: 'comercial',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['fachadas', 'comercial']
    },
    {
      id: 3,
      title: 'Box de Banheiro Premium',
      category: 'banheiros',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['banheiros', 'residencial']
    },
    {
      id: 4,
      title: 'Sacada Gourmet',
      category: 'sacadas',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['sacadas', 'residencial']
    },
    {
      id: 5,
      title: 'Fachada Corporativa',
      category: 'fachadas',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['fachadas', 'comercial']
    },
    {
      id: 6,
      title: 'Varanda Integrada',
      category: 'sacadas',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['sacadas', 'residencial']
    },
    {
      id: 7,
      title: 'Loja de Roupas',
      category: 'comercial',
      image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['fachadas', 'comercial']
    },
    {
      id: 8,
      title: 'Banheiro Residencial',
      category: 'banheiros',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['banheiros', 'residencial']
    },
    {
      id: 9,
      title: 'Casa de Alto Padrão',
      category: 'residencial',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['fachadas', 'residencial']
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'residencial', label: 'Residencial' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'fachadas', label: 'Fachadas' },
    { id: 'sacadas', label: 'Sacadas' },
    { id: 'banheiros', label: 'Banheiros' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || project.tags.includes(activeFilter)
      );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Projetos que Inspiram</h1>
            <p className="text-xl opacity-90">
              Conheça alguns dos nossos trabalhos realizados
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;