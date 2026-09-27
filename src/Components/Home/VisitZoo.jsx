import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const VisitZoo = () => {
  return (
    <section className="bg-white py-2 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-[40px] font-extrabold text-green-900 tracking-wide mb-8 uppercase">
          WELCOME TO CITY ZOO
        </h1>

        <div className="flex justify-center flex-row gap-1 items-stretch">

          {/* Left Column - Image Container */}
          <div className="relative h-[45vh] w-[47%] rounded-2xl overflow-hidden shadow-md mt-34">
            <img
              src="./src/assets/ostrich-kDXK7dfT.jpeg"
              alt="Emu Birds"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Dark Green Box */}
          <div className="p-1 w-[53%] rounded-[20px] bg-[linear-gradient(90deg,#1e532b,#F5B800)] z-20 -ml-4">

            <div className="w-[99%] bg-green-900 text-white p-8 md:p-10 rounded-[20px] shadow-lg flex flex-col justify-between z-20">

              <div>

                {/* Main Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Why You Should Visit Zoofari Park!
                </h2>

                {/* Description Paragraph */}
                <p className="text-gray-100 text-[17px] leading-relaxed mb-6">
                  At CityZoo, we are dedicated to creating a space where people of all ages
                  can connect with nature and wildlife. Our mission is to provide not only
                  entertainment but also education and awareness about animal care and conservation.
                  With exciting exhibits, safe family facilities, and engaging activities, we strive
                  to make every visit a joyful and meaningful experience for our guests.
                </p>

                {/* Bullet Points List */}
                <ul className="space-y-3 mb-8 text-sm md:text-base">

                  <li className="flex items-center gap-3">
                    <span className="text-yellow-400 text-xl">
                      <FaLeaf />
                    </span>
                    <span>180 acres area covered</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-yellow-400 text-xl">
                      <FaLeaf />
                    </span>
                    <span>More Than 100 Types of Animals</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-yellow-400 text-xl">
                      <FaLeaf />
                    </span>
                    <span>All Animals Are Under Security</span>
                  </li>

                </ul>
              </div>

              {/* Read More Button */}
              <div>
                <button className="bg-gradient-to-t from-amber-400 to-green-900 text-white font-bold py-2.5 px-6 rounded-lg transition-colors duration-200 shadow-sm">
                  Read More
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitZoo;
