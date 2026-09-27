import React from 'react';
import {
  FaGraduationCap,
  FaBus,
  FaChalkboardTeacher,
  FaGlobeAmericas
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SchoolExperiences = () => {

  const experiences = [
    {
      id: 1,
      title: 'Guided Zoo Exploration',
      tag: 'Educational Tour',
      description: 'Students explore wildlife with expert guides',
      image:
        './src/assets/visit (1)-C3IVVf2_.jpeg',
    },
    {
      id: 2,
      title: 'Interactive Learning Sessions',
      tag: 'Learning Activity',
      description: 'Engaging sessions about animals & conservation',
      image:
        './src/assets/visit (2)-CDnFgpYy.jpeg',
    },
    {
      id: 3,
      title: 'Animal Observation Experience',
      tag: 'Practical Learning',
      description: 'Close observation of different species',
      image:
        './src/assets/visit (1)-C3IVVf2_.jpeg',
    },
    {
      id: 4,
      title: 'Group Educational Activities',
      tag: 'Team Activity',
      description: 'Students participate in fun learning tasks',
      image:
        './src/assets/visit (4)-B9qyZoTN.jpeg',
    },
    {
      id: 5,
      title: 'Outdoor Nature Exploration',
      tag: 'Nature Visit',
      description: 'Learning beyond classrooms in natural environment',
      image:
        './src/assets/visit (6)-CHr3JtAx.jpeg',
    },
    {
      id: 6,
      title: 'Wildlife Awareness Program',
      tag: 'Awareness',
      description: 'Understanding conservation and ecosystem',
      image:
        './src/assets/visit (5)-BxKxyU-s.jpeg',
    },
  ];

  return (
    <section className="bg-green-100/35 py-16 px-4 md:px-8 font-sans">

      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <h2 className="text-[40px] text-green-900 font-bold">
            School Visit Experiences
          </h2>

          <p className="text-[17px] text-gray-500 leading-relaxed">
            Our zoo visits provide a perfect blend of education, exploration,
            and fun. Students gain real-world knowledge about wildlife and
            environmental conservation.
          </p>

        </div>


        {/* 6 Grid Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-[94%] ml-10">

          {experiences.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-102 transition-0.5s duration-500 flex flex-col"
            >

              {/* Image */}
              <div className="relative h-65 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Green + White Transparent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/65 via-green-700/30 to-white/10"></div>


                <div className="absolute bottom-3 left-3 bg-green-200 backdrop-blur-md text-green-900 text-sm font-semibold px-4 py-1.5 rounded-full">
                  {item.tag}
                </div>

              </div>


              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-2">

                <div>

                  <h3 className="text-[20px] font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    {item.description}
                  </p>

                </div>


                {/* Features */}
                <div className="space-y-2 text-base text-gray-700 font-semibold">

                  <div className="flex items-center gap-2.5">

                    <FaGraduationCap className="text-[#2E7D32] text-xl" />

                    <span className="text-[15px] text-gray-500 font-normal">
                      Educational Visit
                    </span>

                  </div>


                  <div className="flex items-center gap-2.5">

                    <FaBus className="text-[#2E7D32] text-xl" />

                    <span className="text-[15px] text-gray-500 font-normal">
                      Transport Facility Available
                    </span>

                  </div>


                  <div className="flex items-center gap-2.5">

                    <FaChalkboardTeacher className="text-[#2E7D32] text-xl" />

                    <span className="text-[15px] text-gray-500 font-normal">
                      Guided Learning Sessions
                    </span>

                  </div>


                  <div className="flex items-center gap-2.5">

                    <FaGlobeAmericas className="text-[#2E7D32] text-xl" />

                    <span className="text-[15px] text-gray-500 font-normal">
                      Wildlife Awareness
                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        <div className="text-center pt-6">

          <Link
            to="/visitschool"
            className="bg-green-900 hover:bg-green-800 text-white text-[18px] font-semibold px-5 py-3 rounded-xl shadow-xl transform active:scale-95 transition-all"
          >
            Explore More
          </Link>

        </div>

      </div>

    </section>
  );
};

export default SchoolExperiences;
