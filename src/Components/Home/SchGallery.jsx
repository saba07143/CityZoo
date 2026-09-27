import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const VisitGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Tour', 'Learning', 'Observation', 'Activity', 'Nature', 'Awareness'];

  const galleryItems = [
    { 
      id: 1,
      category: 'Tour',
      title: 'Guided Zoo Tour',
      image: './src/assets/visit (6)-CHr3JtAx.jpeg'
    },

    { 
      id: 2,
      category: 'Learning',
      title: 'Interactive Session',
      image: './src/assets/visit (5)-BxKxyU-s.jpeg'
    },

    { 
      id: 3,
      category: 'Observation',
      title: 'Animal Observation',
      image: './src/assets/visit (2)-CDnFgpYy.jpeg'
    },

    { 
      id: 4,
      category: 'Activity',
      title: 'Group Activity',
      image: './src/assets/visit (4)-B9qyZoTN.jpeg'
    },

    { 
      id: 5,
      category: 'Awareness',
      title: 'Wildlife Awareness',
      image: './src/assets/visit (1)-C3IVVf2_.jpeg'
    },

    { 
      id: 6,
      category: 'Learning',
      title: 'Zoo Education Program',
      image: './src/assets/train-C300RmBj.jpg'
    },

    { 
      id: 7,
      category: 'Nature',
      title: 'Outdoor Learning',
      image: './src/assets/visit (6)-CHr3JtAx.jpeg'
    },

    { 
      id: 8,
      category: 'Observation',
      title: 'Live Animal Study',
      image: './src/assets/birdWatching-0JHo3_11.webp'
    },

    { 
      id: 9,
      category: 'Nature',
      title: 'Eco Exploration',
      image: './src/assets/funfair-BnyDAhJa.jpg'
    },

    { 
      id: 10,
      category: 'Observation',
      title: 'Wildlife Study',
      image: './src/assets/enjoy.jpeg'
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' ||
      item.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-8 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-[40px] font-black text-green-900">
            School Visit Gallery
          </h1>

          <p className="text-[18px] text-gray-500 leading-relaxed">
            Explore real moments from our educational school visits — where learning meets nature.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">

          {/* Search Input */}
          <div className="relative w-[65%]">
            <FaSearch className="absolute left-4 top-5.5 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search experience..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 mb-12 bg-white border border-gray-500 rounded-[25px] shadow-sm text-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>


          <div className="flex flex-wrap justify-left gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 rounded-full text-base transition-all ${
                  activeCategory === cat
                    ? 'bg-green-900 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md group relative h-72 cursor-pointer"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-green-800/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">

                  <h3 className="text-xl font-bold leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-white text-sm font-semibold">
                    {item.category}
                  </p>

                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-500">
              No results found
            </h3>
          </div>
        )}

      </div>
    </div>
  );
};

export default VisitGallery;
