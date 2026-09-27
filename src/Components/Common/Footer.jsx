import React from 'react';
import { 
  FaPaw, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1b4e28] text-white pt-16 pb-6 px-6 md:px-16 font-sans border-t border-green-800/40 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-green-800/60">
        
        {/* Column 1: Logo & Info */}
        <div data-aos="fade-up" data-aos-delay="100">
          {/* Logo Zoom-in Effect */}
            <div className="flex items-center gap-3 cursor-pointer transition-transform transition-all duration-300 hover:scale-105 w-max mb-4">
                <FaPaw className="text-white text-2xl bg-[#02754e] p-2 rounded-[5px] " size={40} />
                <span className="font-bold text-[27px] tracking-wide text-[#F5B800]">City Zoo</span>
            </div>
          
          <p className="text-gray-300 text-[17px] leading-relaxed mb-6">
            Explore wildlife like never before. Join us in our mission to protect endangered species and provide education about the animal kingdom.
          </p>
          
          {/* Social Icons with Rotation/Hover Effect */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaFacebookF />, id: 'fb' },
              { icon: <FaTwitter />, id: 'tw' },
              { icon: <FaInstagram />, id: 'insta' },
              { icon: <FaLinkedinIn />, id: 'in' },
            ].map((social) => (
              <a
                key={social.id}
                href="#"
                className="w-10 h-10 rounded-[50%] bg-[#256334] flex items-center justify-center text-white transition-all duration-350 transition-transform hover:bg-green-700  hover:-translate-y-1 shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200" className='ms-3'>
          <h3 className="text-[22px] font-bold mb-4 text-white">Quick Links</h3>
          <div className='h-[0.7vh] w-[20%] bg-amber-400 rounded-2xl mb-2.5 -mt-3'></div>
          <ul className="space-y-3 text-[16px] text-gray-300 mt-5">
            {['Home', 'About', 'Services', 'Events'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="inline-block transition-all duration-300  hover:translate-x-1  hover:text-amber-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
          <div className='h-[0.7vh] w-[20%] bg-amber-400 rounded-2xl mb-2.5 -mt-3'></div>
          <ul className="space-y-4 text-[16px] text-gray-300 mt-5">
            {['FAQ', 'Blog & News', 'Volunteer', 'Support Center'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="inline-block transition-all duration-300 hover:text-yellow-400 hover:translate-x-1"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
          <div className='h-[0.7vh] w-[20%] bg-amber-400 rounded-2xl mb-2.5 -mt-3'></div>
          <ul className="space-y-5 text-[16px] text-gray-300 mt-5">
            <li className="flex items-start gap-3 group">
              <FaMapMarkerAlt className="text-yellow-400 text-lg flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:bg-amber-400 group-hover:text-green-950 bg-green-900 p-1.5 rounded-[5px]" size={28}/>
              <span>123 Safari Lane, Animal City</span>
            </li>
            <li className="flex items-center gap-3 group">
              <FaPhoneAlt className="text-yellow-400 text-base flex-shrink-0 transition-transform duration-300 group-hover:bg-amber-400 group-hover:text-green-950 bg-green-900 p-1.5 rounded-[5px] " size={28}/>
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-center gap-3 group">
              <FaEnvelope className="text-yellow-400 text-base flex-shrink-0 transition-transform duration-300 group-hover:bg-amber-400 group-hover:text-green-950 bg-green-900 p-1.5 rounded-[5px]" size={28}/>
              <span>info@zooworld.org</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-4">
        <p className='text-[15px]'>© 2026 Zoo City. All rights reserved.</p>
        <div className="flex items-center gap-6 text-[14px]">
          <a href="#" className="hover:text-amber-300 transition-colors offset">Privacy Policy</a>
          <a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-amber-300 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;