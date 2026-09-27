import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// import 'swiper/css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'David Chen',
      role: 'Wildlife Photographer',
      quote: '"The safari zone was breathtaking! Watching lions roam freely felt like being transported straight to Africa. A must-visit for families."',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Sophia Martinez',
      role: 'Tourist',
      quote: '"The zoo is well maintained, animals look healthy and happy, and the staff is super friendly. My kids loved the giraffe feeding session!"',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Amira Hassan',
      role: 'Teacher',
      quote: '"Educational and fun! My students learned so much about conservation while enjoying the interactive exhibits and the flamingo sanctuary."',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-[linear-gradient(330deg,#F5B800,#1e532b,#1e532b)] py-12 px-4 font-sans text-white h-[80vh]">

      <div className="max-w-4xl mx-auto space-y-6">

        <div className='ml-2'>
          <span className="bg-green-200 text-[17px] mt-3 text-green-900 font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-2">
            TESTIMONIALS
          </span>

          <h2 className="text-[36px] text-white font-bold ">
            What Our Visitors Say
          </h2>
        </div>

        {/* Card */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
          className="mt-10"
        >

          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="bg-white h-[32vh] w-[100%] text-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mx-auto flex flex-col md:flex-row items-center gap-6 text-left transition-all duration-500">

                <div className="w-35 h-35 rounded-full overflow-hidden shrink-0 border-2 border-green-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 flex-1">

                  <div className="flex gap-1 text-amber-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm md:text-base italic leading-relaxed">
                    {item.quote}
                  </p>

                  <div>
                    <h4 className="font-bold text-green-900 text-[18px]">
                      {item.name}
                    </h4>

                    <p className="text-[15px] text-green-600">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Dot Pagination Navigation */}
        <div className="flex justify-center gap-2 pt-2">

          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                document
                  .querySelector('.testimonial-slider')
                  ?.swiper.slideToLoop(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-gradient-to-r from-green-800 to-amber-400'
                  : 'w-2.5 bg-gradient-to-r from-green-800/50 to-amber-400/50'
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;