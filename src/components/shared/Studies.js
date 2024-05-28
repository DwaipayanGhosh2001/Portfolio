"use client";
import { education, workExperience } from '@/constants';
import Image from 'next/image';
import React from 'react'

function Studies() {
  return (
    <section id="acedemics" className='wrapper text-white lg:py-20 px-2'>
      <div className='max-md:my-20'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <div >
              <p className='sectionSubText'>My acedemic Growth</p>
              <h2 className='sectionHeadText'>Education</h2>
            </div>
            <div className='relative flex flex-col mt-10 '>
              {education.map((item, index) => (
                <div key={index} className='relative flex items-start '>
                  <div className=' flex items-start mt-8'>
                    {/* Timeline Line */}
                    <div className='absolute left-2.5 top-1 w-px h-full bg-white  transform -translate-x-1/2'></div>

                    {/* Timeline Marker */}
                    <div className='relative z-10 w-5 h-5 gradientcol rounded-full flex items-center justify-center'>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                    </div>
                  </div>

                  <div className='ml-6 w-full my-2'  data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine">
                    <div className='p-5 rounded-md bg-zinc-800 flex flex-col gap-3 border-white border-b-2 my-2'>
                      <h2 className='text-lg font-bold'>{item.title}</h2>
                      <p className='text-font-2 text-[14px] italic'>{item.date}</p>
                      <p className='text-sm'>{item.institution}</p>
                      <p className='text-sm'>Percentage Obtained: {item.percentage}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div>
            <div >
              <p className='sectionSubText'>Learing new Skills</p>
              <h2 className='sectionHeadText'>Work Experience</h2>
            </div>
            <div className='relative flex flex-col mt-10 '>
              {workExperience.map((item, index) => (
                <div key={index} className='relative flex items-start '>
                  <div className=' flex items-start mt-8'>
                    {/* Timeline Line */}
                    <div className='absolute left-2.5 top-1 w-px h-full bg-white  transform -translate-x-1/2'></div>

                    {/* Timeline Marker */}
                    <div className='relative z-10 w-5 h-5 bg-red-400 rounded-full flex items-center justify-center'>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                    </div>
                  </div>

                  <div className='ml-6 w-full my-2' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine">
                    <div className='p-5 rounded-md bg-zinc-800 flex flex-col gap-3 border-white border-b-2 my-2'>
                      <h2 className='text-lg font-bold'>{item.title}</h2>
                      <p className='text-font-2 text-[14px] italic'>{item.date}</p>
                      <ul className=''>
                        {item.points.map((point, index) => (
                          <li key={index} className='text-sm'>- {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Studies