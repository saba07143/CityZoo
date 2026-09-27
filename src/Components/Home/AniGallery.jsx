import React from 'react';
import { Link } from 'react-router-dom';

const AnimalGallery = () => {
  // Columns ke according images ka data
  const galleryData = {
    col1: [
      {
        id: 1,
        title: 'Camel',
        image: './src/assets/camle-CEspPtDm.jpeg',
      },
      {
        id: 2,
        title: 'Marmoset / Monkey',
        image: './src/assets/animal-BGE1ugSx.jpeg',
      },
      {
        id: 3,
        title: 'Wild Sheep',
        image: './src/assets/dear-Dy5psI3z.jpeg',
      },
    ],
    col2: [
      {
        id: 4,
        title: 'Gazelles',
        image: './src/assets/dears-B3q2YiZG.jpeg',
      },
      {
        id: 5,
        title: 'Forest Sanctuary',
        image: './src/assets/duck-CLT37evf.jpeg',
      },
    ],
    col3: [
      {
        id: 6,
        title: 'Oryx herd',
        image: './src/assets/oxeo-Dkf4g8ou.jpeg',
      },
      {
        id: 7,
        title: 'Deer Pair',
        image: './src/assets/oxea-DU7GLMxT.jpeg',
      },
      {
        id: 8,
        title: 'Ibex',
        image: './src/assets/oxe (3)-fgW8pgAL.jpeg',
      },
    ],
  };

  return (
    <section className="bg-[#f2f6f3] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-left">
          <span className="inline-block bg-green-100 text-green-800 text-[18px] font-bold tracking-wider px-5 py-1.5 rounded rounded-[20px] mb-3 uppercase">
            GALLERY
          </span>
          <h2 className="text-[38px] font-bold text-green-800 mb-4">
            Explore Our Animal Gallery
          </h2>
          <p className="text-gray-600 text-[18px] max-w-2xl text-base leading-relaxed">
            Step into the wild and discover the beauty of nature's most fascinating creatures. Our
            gallery showcases animals from across the world, each captured in stunning detail to
            bring their charm and character closer to you.
          </p>
        </div>

        {/* 3 Columns Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Column 1 (3 Cards) */}
          <div className="flex flex-col gap-6">
            {galleryData.col1.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl shadow-md border border-gray-200/60 bg-white transition-transform duration-700 hover:scale-[1.05]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 2 (2 Cards) */}
          <div className="flex flex-col gap-6 mt-30">
            {galleryData.col2.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl shadow-md border border-gray-200/60 bg-white transition-transform duration-700 hover:scale-[1.05]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 3 (3 Cards) */}
          <div className="flex flex-col gap-6">
            {galleryData.col3.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl shadow-md border border-gray-200/60 bg-white transition-transform duration-700 hover:scale-[1.05]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Link 
          to="/services" 
          className="bg-gradient-to-t from-amber-400 to-green-900 hover:bg-linear-gradient-to-t from-amber-400 to-green-900 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-200">
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnimalGallery;