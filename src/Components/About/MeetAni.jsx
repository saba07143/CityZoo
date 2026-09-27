import React from 'react';
import { FaGlobeAmericas, FaUtensils, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const MeetAni = () => {
  const animals = [
    {
      id: 1,
      name: 'Dear',
      badge: 'Least Concern',
      badgeType: 'least',
      description: 'Dear are desert-adapted animals known for their ability to survive long periods without water and carry heavy loads across harsh terrains.',
      habitat: 'Deserts and arid regions',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(10)--dYXWRSN.jpeg',
    },
    {
      id: 2,
      name: 'Ostrich',
      badge: 'Least Concern',
      badgeType: 'least',
      description: 'Ostrich are graceful animals recognized for their speed and agility, often found grazing peacefully in forests and open fields.',
      habitat: 'Forests and grasslands',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(11)-CeWkZ4al.jpeg',
    },
    {
      id: 3,
      name: 'Dear',
      badge: 'Domesticated',
      badgeType: 'domestic',
      description: 'Dear are strong and intelligent animals widely used for transportation, farming, and sports, known for their loyalty and endurance.',
      habitat: 'Grasslands and farms',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(12)-CXm_EDbg.jpeg',
    },
    {
      id: 4,
      name: 'Peacock',
      badge: 'Domesticated',
      badgeType: 'domestic',
      description: 'Peacocks are essential livestock animals providing milk and meat, playing a major role in agriculture and rural economies.',
      habitat: 'Farms and rural areas',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(13)-C-zxTRIj.jpeg',
    },
    {
      id: 5,
      name: 'Dear',
      badge: 'Least Concern',
      badgeType: 'least',
      description: 'Dear are highly adaptable animals known for their climbing ability and are commonly raised for milk, meat, and fiber.',
      habitat: 'Mountains and farms',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(14)--ipMr8i6.jpeg',
    },
    {
      id: 6,
      name: 'Dear',
      badge: 'Domesticated',
      badgeType: 'domestic',
      description: 'Dear are gentle animals raised for wool, meat, and milk, known for their flocking behavior and calm nature.',
      habitat: 'Grasslands and farms',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(15)-CSkldK3S.jpeg',
    },
    {
      id: 7,
      name: 'Dear',
      badge: 'Near Threatened',
      badgeType: 'threatened',
      description: 'Dear are powerful animals often found near water sources, widely used in farming and valued for their strength and milk production.',
      habitat: 'Wetlands and farms',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(16)-C51accUV.jpeg',
    },
    {
      id: 8,
      name: 'Ox',
      badge: 'Domesticated',
      badgeType: 'domestic',
      description: 'Ox are trained cattle used for plowing and transport, known for their strength, endurance, and importance in traditional farming.',
      habitat: 'Farms and agricultural lands',
      diet: 'Herbivore',
      image: 'https://zoo-drab.vercel.app/assets/oxe%20(3)-fgW8pgAL.jpeg',
    },
  ];

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'least':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'domestic':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'threatened':
        return 'bg-orange-100 text-orange-900 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'least':
      case 'domestic':
        return <FaCheckCircle className="text-sm" />;
      case 'threatened':
        return <FaExclamationTriangle className="text-sm" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#F8F9FA] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <h2 className="text-[40px] font-bold text-green-900 tracking-tight">
            Meet Our Animals
          </h2>
          <p className="text-[18px] text-gray-600  leading-relaxed">
            From majestic animals to friendly farm species—get to know our residents and learn how we're protecting their future.
          </p>
        </div>

        {/* Animal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <div 
              key={animal.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-amber-400 shadow-2xl hover:shadow-amber-200 hover:-translate-y-1 hover:scale-105 group transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badge Container */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 shadow-sm backdrop-blur-md ${getBadgeStyle(animal.badgeType)}`}>
                  {getBadgeIcon(animal.badgeType)}
                  <span>{animal.badge}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-900">
                    {animal.name}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-4 group-hover:text-green-700">
                    {animal.description}
                  </p>
                </div>

                {/* Info Footer */}
                <div className="pt-3 border-t border-gray-100 space-y-1.5 text-sm text-gray-600 font-medium">
                  <div className="flex items-center gap-2">
                    <FaGlobeAmericas className="text-amber-500 text-base group-hover:text-green-800" />
                    <span>{animal.habitat}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUtensils className="text-gray-400 text-base group-hover:text-amber-500" />
                    <span>{animal.diet}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Counter Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md text-center hover:bg-gradient-to-r from-green-800 to-yellow-500 transition hover:scale-105 group transition-0.5s">
            <h4 className="text-4xl font-bold text-green-900 mb-2 group-hover:text-gray-200">120+</h4>
            <p className="text-gray-600 font-semibold text-lg group-hover:text-gray-200">Animal Species</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md text-center hover:bg-gradient-to-r from-green-800 to-yellow-500 transition hover:scale-105 group transition-0.5s">
            <h4 className="text-4xl font-bold text-green-900 mb-2 group-hover:text-gray-200">15</h4>
            <p className="text-gray-600 font-semibold text-lg group-hover:text-gray-200">Conservation Programs</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md text-center hover:bg-gradient-to-r from-green-800 to-yellow-500 transition hover:scale-105 group transition-0.5s">
            <h4 className="text-4xl  font-bold text-green-900 mb-2 group-hover:text-gray-200">98%</h4>
            <p className="text-gray-600 font-semibold text-lg group-hover:text-gray-200">Visitor Satisfaction</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md text-center hover:bg-gradient-to-r from-green-800 to-yellow-500 transition hover:scale-105 group transition-0.5s">
            <h4 className="text-4xl  font-bold text-green-900 mb-2 group-hover:text-gray-200">2000+</h4>
            <p className="text-gray-600 font-semibold text-lg group-hover:text-gray-200">Animals Rescued</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetAni;