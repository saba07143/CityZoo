import React from 'react';
import { FaHeart, FaAward, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const Future = () => {
  return (
    <div className="bg-[#F8F9FA] py-10 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">

        <section 
          className="relative rounded-3xl overflow-hidden shadow-2xl py-10 px-6 md:px-12 text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg , rgba(27, 94, 32, 0.55), rgba(27, 94, 32, 0.85)), url('https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1600&auto=format&fit=crop')`
          }}
        >
          <div className="max-w-4xl mx-auto space-y-2">
            <h2 className="text-[44px] font-bold">
              Our Future Vision
            </h2>

            <p className="text-[20px] text-green-100 font-medium  max-w-3xl mx-auto">
              We're expanding conservation efforts, pioneering new education programs, and designing sustainable habitats to protect wildlife for generations.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center">
              <button className="bg-amber-400 hover:bg-green-800 group hover:text-amber-400 text-green-800 px-5 py-3 rounded-xl text-[16px] font-semibold flex items-center gap-1 shadow-xl transform active:scale-95 transition-all">
                <span>Support Our Mission</span>
                <FaHeart className="text-green-800 text-xl group-hover:text-amber-400" />
              </button>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Future;