import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPaw,
  FaTicketAlt,
  FaHeart,
  FaTimes
} from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi2';
import { LuCalendarDays } from 'react-icons/lu';
import { FiThumbsUp } from 'react-icons/fi';
import heroBg from '../../assets/enjoy.jpeg';

const About1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 font-sans text-gray-800">

      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[100vh] flex flex-col justify-center items-center text-center px-4 py-16 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBg})`
        }}
      >


        <div className="max-w-4xl mx-auto space-y-6">

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide drop-shadow-md">
            Welcome to{' '}
            <span className="text-amber-400">
              Wildlife
            </span>
            {' '}Zoo
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the wonder of wildlife, conservation,
            and family adventure in the heart of the city.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center items-center gap-4 py-3">

            <div className="bg-white/80 text-gray-700 font-semibold px-3 py-2 rounded-[7px] flex items-center gap-3 text-sm sm:text-base shadow-lg">
              <HiUsers className="text-green-900 text-2xl" />
              <span>200+ Animal Species</span>
            </div>

            <div className="bg-white/80 text-gray-700 font-semibold px-3 py-2 rounded-[7px] flex items-center gap-3 text-sm sm:text-base shadow-lg">
              <LuCalendarDays className="text-green-900 text-2xl" />
              <span>37 Years of Care</span>
            </div>

            <div className="bg-white/80 text-gray-700 font-semibold px-3 py-2 rounded-[7px] flex items-center gap-3 text-sm sm:text-base shadow-lg">
              <FiThumbsUp className="text-green-900 text-2xl" />
              <span>98% Visitor Satisfaction</span>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-5 pt-4">

            {/* Buy Tickets Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-950 hover:bg-green-900 hover:-translate-y-1 hover:shadow-green-800 hover:shadow-2xl text-gray-300 px-7 py-3.5 rounded-xl font-bold flex items-center gap-3 shadow-xl transform active:scale-95 transition-all"
            >
              <FaTicketAlt className="text-2xl" />
              <span>Buy Tickets</span>
            </button>

            {/* Adopt an Animal Button */}
            <Link
              to="/services"
              className="bg-amber-400 hover:bg-amber-400 text-gray-900 px-5 py-3.5 hover:-translate-y-1 hover:shadow-amber-600 hover:shadow-2xl rounded-xl  font-bold flex items-center gap-3 shadow-xl transform active:scale-95 transition-all"
            >
              <FaHeart className="text-2xl text-green-900 " />
              <span>Adopt an Animal</span>
            </Link>

          </div>
        </div>
      </section>

{/* TICKET BOOKING MODAL  */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>

            <div className="text-center mb-6 space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaPaw className="text-[#2E7D32] text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-green-900">Book Your Tickets</h3>
              <p className="text-gray-400 text-base font-medium">
                Experience a day full of adventure and wildlife at City Zoo
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div>
                <label className="block text-green-900 font-semibold mb-1 text-base">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-green-900 font-semibold mb-1 text-base">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-900 font-semibold mb-1 text-base">Tickets</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 2"
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-900 font-semibold mb-1 text-base">Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1B5E20] hover:bg-[#144718] text-white py-4 rounded-xl text-xl font-semibold mt-4 shadow-lg transition-all"
              >
                Confirm Purchase
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};



export default About1;