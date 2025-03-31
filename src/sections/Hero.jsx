import React from 'react';
import { Button } from '@mui/material';
import iconURL from '../assets/icons/arrow-right.svg';
import { statistics } from '../constants';
import { bigShoe1 } from '../assets/images';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-between items-center min-h-screen gap-12 p-10 bg-gradient-to-b from-white to-gray-100"
    >
      {/* Left Section (Text Content) */}
      <div className="flex flex-col justify-center items-start w-full max-w-2xl">
        <p className="text-lg font-semibold text-red-500 tracking-wider uppercase">
          Our Summer Collection
        </p>
        <h1 className="text-7xl sm:text-8xl font-bold text-gray-900 leading-tight mt-6">
          The New Arrival
          <br />
          <span className="text-orange-600 inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-lg text-gray-700 leading-7 mt-6 mb-10 max-w-lg">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        {/* CTA Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FF4500',
            color: '#fff',
            fontSize: '18px',
            padding: '12px 24px',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            '&:hover': { backgroundColor: '#E03E00' },
          }}
        >
          Shop Now <img className="w-5 h-5" src={iconURL} alt="arrow icon" />
        </Button>

        {/* Floating Statistics */}
        <div className="flex flex-wrap mt-16 gap-10">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="relative flex justify-center items-center">
        <img
          src={bigShoe1}
          alt="Nike Shoes"
          className="w-[600px] h-[500px] object-contain transition-transform duration-500 hover:scale-105 shadow-lg rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
