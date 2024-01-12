import React from 'react';
import { FaFacebook, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialMediaIcons = [
    { icon: <FaFacebook />, link: '#' },
    { icon: <FaTiktok />, link: '#' },
    { icon: <FaYoutube />, link: '#' },
    { icon: <FaTwitter />, link: '#' },
  ];

  const navigatorLinks = [
    { title: 'Useful Links', links: ['/Hotel', '/Souvenir', '/Transportation'] },
    { title: 'About Us', links: ['/about/Our History', '/about/Our Team'] },
    { title: 'Nature & Culture', links: ['/nature/Art', '/nature/Wildlife', '/nature/Historical-Place'] },
    { title: 'Explore & Activity', links: ['/explore/Cycling', '/explore/Camping', '/explore/Tourist Spot'] },
  ];

  return (
    <footer className="bg-emerald-800 text-white p-8">
      <div className="flex flex-col items-center mb-4">
        {/* Follow Us on Social Media */}
        <div className="text-center mb-3 text-xl font-semibold">Follow us</div>

        {/* Social Media Icons */}
        <div className="flex items-center mb-12 gap-4">
          {socialMediaIcons.map((item, index) => (
            <a key={index} href={item.link} className="text-2xl mr-2 hover:scale-110">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Navigator Menu */}
        <div className="mr-8 flex gap-32">
          {navigatorLinks.map((section, index) => (
            <div key={index} className="mr-4 text-left">
              <strong className='text-xl hover:text-gray-300'>{section.title}</strong>
              <ul className='p-2'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link} className='hover:underline hover:text-gray-400'>
                      {link.split('/').pop()} {/* Extract the last part of the link as text */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Slogan */}
      <div className="text-center mb-4 font-serif text-xl p-4 text-gray-300 italic hover:scale-110">
        {/* Add your slogan here */}
        Discover Cambodia's Charm: Your Gateway to Rich Heritage and Breathtaking Landscapes!
      </div>

      {/* Copyright Information */}
      <div className="flex justify-between">
        <div>
          {/* Copyright */}
          © 2023 Your Company. All rights reserved.
        </div>
        <div>
          {/* Email */}
          <a href="mailto:denavigator5@gmail.com" className='hover:underline hover:text-gray-300'>
            Email: denavigator5@gmail.com
          </a>
        </div>
        <div className='mr-3'>
          {/* Privacy Policy and Terms Conditions */}
          <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a> |{' '}
          <a href="/terms-conditions" className='hover:underline'>Terms Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
