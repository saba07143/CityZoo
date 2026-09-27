import React, { useState } from 'react';
import {
  FaParking,
  FaShoppingBag,
  FaCamera,
  FaWifi,
  FaCompass,
  FaGamepad,
  FaUtensils,
  FaBed
} from 'react-icons/fa';

const OurFacilities = () => {
  const [activeCard, setActiveCard] = useState(null);

  const facilities = [
    {
      id: 1,
      icon: FaParking,
      title: 'Car Parking',
      desc: 'Safe & spacious parking.',
      side: 'left',
      position: 'top-[10px] left-[60px]'
    },
    {
      id: 2,
      icon: FaCamera,
      title: 'Animal Photos',
      desc: 'Capture zoo memories.',
      side: 'left',
      position: 'top-[125px] left-[10px]'
    },
    {
      id: 3,
      icon: FaCompass,
      title: 'Guide Services',
      desc: 'Professional guides available.',
      side: 'left',
      position: 'top-[240px] left-[10px]'
    },
    {
      id: 4,
      icon: FaUtensils,
      title: 'Food & Beverages',
      desc: 'Delicious meals & drinks.',
      side: 'left',
      position: 'top-[355px] left-[60px]'
    },
    {
      id: 5,
      icon: FaShoppingBag,
      title: 'Zoo Shopping',
      desc: 'Souvenirs, toys, and more.',
      side: 'right',
      position: 'top-[10px] right-[60px]'
    },
    {
      id: 6,
      icon: FaWifi,
      title: 'Free Hi-Speed WiFi',
      desc: 'Stay connected anytime.',
      side: 'right',
      position: 'top-[125px] right-[10px]'
    },
    {
      id: 7,
      icon: FaGamepad,
      title: 'Playground',
      desc: 'Fun play area for children.',
      side: 'right',
      position: 'top-[240px] right-[10px]'
    },
    {
      id: 8,
      icon: FaBed,
      title: 'Rest House',
      desc: 'Relax & refresh comfortably.',
      side: 'right',
      position: 'top-[355px] right-[60px]'
    }
  ];

  const leftSide = facilities.filter(
    (item) => item.side === 'left'
  );

  const rightSide = facilities.filter(
    (item) => item.side === 'right'
  );

  const renderCard = (item) => {
    const IconComponent = item.icon;
    const isActive = activeCard === item.id;

    return (
      <div
        key={item.id}
        onMouseEnter={() => setActiveCard(item.id)}
        onMouseLeave={() => setActiveCard(null)}
        className={`relative cursor-pointer transition-all mt-3 duration-300 px-5 py-5 border overflow-hidden w-[350px] ${
          item.side === 'left'
            ? 'rounded-r-[50px]'
            : 'rounded-l-[50px]'
        } ${
          isActive
            ? 'bg-gradient-to-r from-emerald-950 via-emerald-800 to-amber-500 text-white shadow-2xl scale-[1.03] z-20 border-transparent'
            : 'bg-white text-slate-800 border-slate-100 shadow-md hover:shadow-xl'
        }`}
      >

        <div className="flex items-center gap-3.5 relative z-10">

          {/* Icon */}
          <div
            className={`p-3 rounded-[50px] text-[24px] flex items-center justify-center shrink-0 transition-colors ${
              isActive
                ? 'bg-white/20 text-white'
                : 'bg-green-100 text-green-800'
            }`}
          >
            <IconComponent />
          </div>

          {/* Text */}
          <div>
            <h3
              className={`font-bold text-[19px] ${
                isActive
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`text-[15px] mt-0.5 ${
                isActive
                  ? 'text-slate-200'
                  : 'text-slate-500'
              }`}
            >
              {item.desc}
            </p>
          </div>

        </div>

      </div>
    );
  };

  return (
    <section className="bg-slate-100 py-12 px-4 md:px-12 overflow-hidden">

      <div className="max-w-[90%] mx-auto w-full">

        {/* Header */}
        <div className="mb-8 text-left">

          <span className="bg-green-100 text-green-900 font-bold px-5 py-2.5 rounded-[50px] text-[16px] uppercase inline-block mb-3">
            OUR SERVICES
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-green-950 mb-2">
            Explore Our Facilities
          </h2>

          <p className="text-slate-600  text-[17px] leading-relaxed">
            We provide top-notch services to make your visit comfortable,
            enjoyable, and  <br /> memorable.
          </p>

        </div>

        {/* Main Circular Layout */}
        <div className="relative max-w-[1200px] mx-auto">

          {/* Desktop Layout */}
          <div className="hidden lg:block relative h-[490px]">

            {/* Center Circle Image */}
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-10">

              <div className="relative w-[310px] h-[310px] rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white group hover:shadow-gray-400 hover:scale-105 duration-800">

                <img
                  src="./src/assets/ostrichlarge-C6MSnh8w.jpeg"
                  alt="Center Wildlife"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110  transition-transform duration-700 ease-in-out"
                />

              </div>

            </div>

            {/* Left Cards */}
            <div className="absolute top-0 left-0 w-[400px] h-full">

              {leftSide.map((item) => (
                <div
                  key={item.id}
                  className={`absolute ${item.position}`}
                >
                  {renderCard(item)}
                </div>
              ))}

            </div>

            {/* Right Cards */}
            <div className="absolute top-0 right-0 w-[400px] h-full">

              {rightSide.map((item) => (
                <div
                  key={item.id}
                  className={`absolute ${item.position}`}
                >
                  {renderCard(item)}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurFacilities;