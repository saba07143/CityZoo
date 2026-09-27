import React from 'react';
import { FaHeart, FaChevronRight } from 'react-icons/fa';
import { LuCalendar, LuSparkles } from 'react-icons/lu';
import { MdOutlineMedicalServices } from 'react-icons/md';

const OurStory = () => {
  const timelineData = [
    {
      year: '1987',
      title: 'My Zoo Opens',
      description: 'Founded with 40 species and a bold vision for urban conservation.',
      icon: <FaHeart className="text-[#2E7D32] text-xl" />,
      alignRight: false,
    },
    {
      year: '2016',
      title: 'Wildlife Rescue Program',
      description: 'Expanded rehabilitation facilities for injured native animals.',
      icon: <MdOutlineMedicalServices className="text-[#2E7D32] text-2xl" />,
      alignRight: true,
    },
    {
      year: '2024',
      title: 'Net-Zero Initiative',
      description: 'Committed to renewable energy and zero-waste operations by 2030.',
      icon: <LuSparkles className="text-amber-500 text-2xl" />,
      alignRight: false,
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-[40px]  font-bold text-green-900 tracking-tight">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 ">
            A journey of care, curiosity, and conservation spanning decades.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 rounded-full hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-35">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  item.alignRight ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 ">
                  <div className="bg-white rounded-2xl p-6 border border-green-500 shadow-md hover:shadow-xl transition-all relative hover:scale-105 duration-500 hover:-translate-y-2">
                    
                    {/* Top Icon Badge */}
                    <div className="w-12 h-12 bg-gradient-to-r from-green-700/20 to-amber-400/10  rounded-xl flex items-center justify-center -mt-12 mx-7">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-bold text-green-900 mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-green-800 text-lg leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <a 
                      href="#learn-more" 
                      className="inline-flex items-center gap-2 text-green-800 hover:text-[#2E7D32]  text-[17px] transition-colors"
                    >
                      <span>Learn More</span>
                      <FaChevronRight className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Center Node (Dot on the Line) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-6 h-6 bg-white border-4 border-[#2E7D32] rounded-full shadow-md"></div>
                </div>

                {/* Year Badge */}
                <div className='ml-13'>
                <div className={`w-full md:w-1/2 mt-4 md:mt-0 flex ${
                  item.alignRight ? 'justify-end' : 'justify-start'
                }`}>
                  <div className="bg-gradient-to-r from-green-900 to-amber-400 text-white font-bold text-[17px] px-5 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                    <LuCalendar className="text-white text-xl" />
                    <span>{item.year}</span>
                  </div>
                </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;