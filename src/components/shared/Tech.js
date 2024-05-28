"use client";
import { technologies } from '@/constants'
import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { Progress } from "@/components/ui/progress"
import Image from 'next/image';



function Tech() {
  const [progressValues, setProgressValues] = useState(
    technologies.map(() => 0)
  );
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Ensures it only triggers once
    threshold: 0.1, // Adjust this value as needed
  });

  useEffect(() => {
    if (inView) {
      const animationDuration = 2000; // Total duration of the animation
      const stepTime = 20; // Time between each step in milliseconds

      technologies.forEach((tech, index) => {
        let currentProgress = 0;
        const targetProgress = tech.valu;
        const increment = (targetProgress / animationDuration) * stepTime;

        const intervalId = setInterval(() => {
          currentProgress += increment;
          if (currentProgress >= targetProgress) {
            currentProgress = targetProgress;
            clearInterval(intervalId);
          }
          setProgressValues((prevValues) =>
            prevValues.map((value, i) => (i === index ? currentProgress : value))
          );
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <section className='wrapper text-white px-2'>
      <div className='max-md:mt-20' ref={ref}>
        <div>
          <p className='sectionSubText'>My Technical Knowledge</p>
          <h2 className='sectionHeadText'>Skills</h2>
        </div>
        <div className='mt-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-2'>
            {technologies.map((item, index) => (
              <div key={index}>
                <div className='flex items-center justify-start gap-6 mb-4'>
                  <Image src={item.icon} alt={item.name} width={40} height={40} className='bg-slate-100 rounded-full p-1'/>
                <p className='text-sm md:text-base'>{item.name}</p>
                </div>
               
                <div className='flex items-center justify-between gap-6'>
                  <Progress value={progressValues[index]}  />
                  <p  className='text-sm md:text-base'>{Math.round(progressValues[index])}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;