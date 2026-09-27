import React from 'react';
import { FaPaw, FaUsers, FaCrown, FaShieldAlt } from 'react-icons/fa';

const Visit = () => {
  const stats = [
    {
      id: 1,
      number: '12,345',
      label: 'Total Animals',
      icon: <FaPaw className="text-[#2E7D32] text-4xl group-hover:text-white" />,
    },
    {
      id: 2,
      number: '6,789',
      label: 'Daily Visitors',
      icon: <FaUsers className="text-[#2E7D32] text-4xl group-hover:text-white" />,
    },
    {
      id: 3,
      number: '2,345',
      label: 'Total Memberships',
      icon: <FaCrown className="text-[#2E7D32] text-4xl group-hover:text-white" />,
    },
    {
      id: 4,
      number: '4,567',
      label: 'Save Wildlife',
      icon: <FaShieldAlt className="text-[#2E7D32] text-4xl group-hover:text-white" />,
    },
  ];

  return (
    <section className="py-5 font-sans">

      {/* Background Image */}
      <div
        className="relative overflow-hidden shadow-2xl bg-cover bg-center h-[50vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('./src/assets/sheeps-dSL2MMEN.jpeg')`,
        }}
      >

        {/* Stats */}
        <div className="h-full flex items-center justify-between gap-8 px-16 relative z-10">

          {stats.map((item) => (

            <div
              key={item.id}
              className="w-[22%] py-4 px-5 rounded-2xl flex flex-col items-center text-center hover:text-white
              shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]
              transition-all duration-300
              group cursor-pointer"
            >

              {/* Icon */}
              <div
                className="mb-2 p-4 text-[44px] rounded-full
                group-hover:text-white
                transition-colors duration-300"
              >
                {item.icon}
              </div>

              {/* Number */}
              <h3
                className="font-black text-[30px] text-white group-hover:text-amber-400">
                {item.number}
              </h3>

              {/* Label */}
              <p
                className="text-gray-300 font-semibold text-[16px] group-hover:text-amber-400 mt-1"
              >
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Visit;
