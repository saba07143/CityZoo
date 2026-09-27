import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaLeaf, FaUserFriends, FaShieldAlt, FaHeart, FaTicketAlt, FaTimes, FaPaw } from 'react-icons/fa';

const Values = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">

        <section className="text-center">
          <h2 className="text-[44px] font-bold  mb-3 bg-gradient-to-r from-green-700 to-yellow-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-[18px] text-gray-800 mb-12 font-medium">
            These principles guide everything we do at Wildlife Sanctuary
          </p>

          <div className="grid grid-cols-1 grid-cols-3 gap-8 ">
            {/* Card 1: Conservation First */}
            <div className="bg-white rounded-3xl px-8 group hover:bg-gradient-to-r from-green-700 to-yellow-400 py-8 hover:-translate-y-0.5 border border-gray-200 shadow-lg hover:shadow-xl transition-0.5s text-left flex flex-col justify-between">
              <div >
                <div className="w-16 h-16 bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                  <FaLeaf className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white">
                  Conservation First
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-normal group-hover:text-white">
                  We safeguard endangered species through research and habitat restoration.
                </p>
              </div>
            </div>

            {/* Card 2: Education & Community */}
            <div className="bg-white rounded-3xl group hover:bg-gradient-to-r from-green-700 to-yellow-400 hover:-translate-y-0.5 p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-0.5s text-left flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                  <FaUserFriends className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white">
                  Education & Community
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-normal group-hover:text-white">
                  Hands-on learning, school programs, and inclusive experiences for all ages.
                </p>
              </div>
            </div>

            {/* Card 3: Ethical Care */}
            <div className="bg-white rounded-3xl p-8 group hover:bg-gradient-to-r from-green-700 to-yellow-400 border hover:-translate-y-0.5 border-gray-200 shadow-lg hover:shadow-xl transition-0.5s text-left flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-green-900 rounded-2xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white">
                  Ethical Care
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-normal group-hover:text-white">
                  World-class veterinary care and welfare standards lead everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className="relative rounded-3xl h-[45vh] overflow-hidden shadow-2xl py-5 px-6 md:px-12 text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg,rgb(25,87,47,1.85),rgb(150, 143, 46,0.55)), url('https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1600&auto=format&fit=crop')`
          }}
        >
          <div className="max-w-3xl mx-auto space-y-1">
            {/* Heart Icon Header */}
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/30">
              <FaHeart className="text-white text-3xl" />
            </div>

            {/* Title */}
            <h2 className="text-[34px] font-bold ">
              Join Our Conservation Efforts
            </h2>

            {/* Subtitle */}
            <p className="text-[18px] mt-1 text-gray-200 font-normal ">
              Your support helps us continue our vital work in animal care, conservation, and education.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-5 pt-4">
              <Link
                to="/services"
                className="bg-amber-400 hover:bg-amber-400 text-gray-900 px-5 py-3.5 hover:-translate-y-1 hover:shadow-amber-600 hover:shadow-2xl rounded-xl  font-bold flex items-center gap-3 shadow-xl transform active:scale-95 transition-all"
              >
                <FaHeart className="text-2xl text-green-900 " />
                <span>Adopt an Animal</span>
                </Link>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/80 px-6 py-2.5 rounded-xl text-xl font-semibold flex items-center gap-3 shadow-lg backdrop-blur-md transform active:scale-95 transition-all"
              >
                <FaTicketAlt className="text-2xl" />
                <span className='text-[18px]'>Buy Tickets</span>
              </button>
            </div>
          </div>
        </section>

      </div>

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

export default Values;