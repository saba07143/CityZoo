import React from 'react';
import { FaAward } from 'react-icons/fa';
import iranDoc from '../../assets/iran 01.jpeg';
import libyaDoc from '../../assets/Libyan 02.jpeg';
import bangladeshDoc from '../../assets/Bangladesh 03.jpeg';
import eritreaDoc from '../../assets/eritrea 04.jpeg';
import nepalDoc from '../../assets/nepal 05.jpeg';
import turkeyDoc from '../../assets/turkey 06.jpeg';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: 'Iranian Embassy Recognition',
      description: 'Appreciation for excellence in hosting diplomatic visitors and environmental preservation.',
      image: iranDoc,
    },
    {
      id: 2,
      title: 'Libyan Embassy Appreciation',
      description: 'Commendation for hospitality and the protection of wildlife within the State of Qatar.',
      image: libyaDoc,
    },
    {
      id: 3,
      title: 'Bangladesh Embassy Honor',
      description: 'Recognized for dedication to educational outreach and building a world-class zoo facility.',
      image: bangladeshDoc,
    },
    {
      id: 4,
      title: 'Embassy of the State of Eritrea',
      description: 'Commendation from the Ambassador\'s Office for outstanding achievements in environmental leadership and international ISO certification.',
      image: eritreaDoc,
    },
    {
      id: 5,
      title: 'Embassy of Nepal Letters',
      description: 'Letter of Thanks for the warm hospitality extended to the Embassy family and for supporting the Nepali community in Qatar.',
      image: nepalDoc,
    },
    {
      id: 6,
      title: 'Military Attaché Office, Turkey',
      description: 'Recognition from the Turkish Armed Forces for providing vital environmental awareness and education to the younger generation.',
      image: turkeyDoc,
    },
  ];

  return (
    <section className="bg-[#c1c8ab37] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <h2 className="text-[40px]  font-bold text-green-900 tracking-tight flex items-center justify-center gap-3">
            <FaAward className="text-[#225b25] text-4xl" />
            <span>Our <span className='bg-gradient-to-r from-green-800 to-yellow-400 bg-clip-text text-transparent'>Certifications</span></span>
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed">
            A legacy of excellence recognized by international embassies and global institutions for our commitment to education and environmental conservation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Document Image Container */}
              <div className="bg-gray-100 p-4 border-b border-gray-100 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[450px] object-cover object-top rounded-2xl shadow-inner group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="px-3 py-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-1 text-center  group-hover:text-[#2E7D32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] font-normal pb-2 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;