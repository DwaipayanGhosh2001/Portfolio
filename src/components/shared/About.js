"use client";
import React from 'react'
import { Tilt } from 'react-tilt'

import { services } from '@/constants';
import Image from 'next/image';

const ServiceCard = ({ title, icon }) => {
  return (
    <Tilt className="xs:max-w-[250px] w-full">
      <div className='gradientcol p-[1px] rounded-lg'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-dark-2 rounded-[20px] py-5 px-11 min-h-[200px] flex justify-evenly items-center flex-col shadow-card'
        >
          <Image src={icon} width={80} height={80} alt="Icon" />
          <h3 className='text-white text-[18px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
}

function About() {
  return (
    <section id="about" className=' glassmorphism '>
      <div data-aos="zoom-out-up" className=' max-md:my-20 wrapper text-white lg:py-20 px-2'>
        <div >
          <p className='sectionSubText'>Introduction</p>
          <h2 className='sectionHeadText'>Overview</h2>
        </div>
        <div >
          <p className='mt-4 text-base md:text-lg text-font-1 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque dolorem,
            quas dicta corporis sapiente, quod neque asperiores tenetur, qui minima sed hic perspiciatis?
            Ut, dolorem. Quo debitis possimus ut ipsam necessitatibus, aliquid, accusamus ad aspernatur
            ratione voluptates libero sint voluptatibus iure error, ipsum numquam molestiae reprehenderit
            vel dolores nulla.</p>
        </div>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10'>
          {services.map((item, index) => (
            <ServiceCard key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default About