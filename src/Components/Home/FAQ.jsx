import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What animals can I see at the zoo?',
      answer: 'Our zoo is home to a wide variety of animals including lions, elephants, giraffes, pandas, monkeys, and exotic birds.',
    },
    {
      question: "What are the zoo's opening hours?",
      answer: 'The zoo is open daily from 9:00 AM to 6:00 PM, including weekends and public holidays.',
    },
    {
      question: 'Are there any discounts available?',
      answer: 'Yes! We offer discounts for students, children under 12, senior citizens, and group bookings.',
    },
    {
      question: 'Can I bring outside food into the zoo?',
      answer: 'Outside food is not allowed inside the zoo, but we have multiple food courts and cafes with family-friendly options.',
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we provide ample parking space with both standard and VIP parking options near the entrance.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F9FA] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight">
          Frequently Asked Questions
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-[90vh]">
          
          {/* Left Column - Accordion Items */}
          <div className="space-y-2 mt-9">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 mt-5 hover:-translate-y-1 hover:scale-101 hover:shadow-2xl"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 flex items-center justify-between font-semibold text-gray-800 text-base md:text-lg transition-colors"
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown 
                      className={`text-green-800 text-sm transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-green-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column - Side Banner Image */}
          <div className="h-[100%] w-[90%] ml-11 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <img 
              src="./src/assets/oxe (7)-D9XxbaiO.jpeg" 
              alt="Zoo Wildlife" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;