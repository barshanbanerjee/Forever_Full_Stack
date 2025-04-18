import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const slides = [
  {
    id: 1,
    title: 'Latest Arrivals',
    subtitle: 'OUR BESTSELLERS',
    buttonText: 'SHOP NOW',
    image: assets.hero_img,
  },
  {
    id: 2,
    title: 'Fresh Styles',
    subtitle: 'NEW SEASON',
    buttonText: 'EXPLORE',
    image: assets.hero_img2, 
  },
  {
    id: 3,
    title: 'Exclusive Deals',
    subtitle: 'LIMITED TIME',
    buttonText: 'GRAB NOW',
    image: assets.hero_img3,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // auto change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, buttonText, image } = slides[currentIndex];

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 transition-all duration-500'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className=' font-medium text-sm md:text-base'>{subtitle}</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>{title}</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>{buttonText}</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2 object-cover' src={image} alt={title} />
    </div>
  );
};

export default Hero;