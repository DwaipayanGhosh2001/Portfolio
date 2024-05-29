import { projectsData } from '@/constants'
import { Eye, GitCommitIcon, Github, GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Projects() {
  return (
    <section id="projects" className='wrapper text-white lg:py-20 px-2'>
      <div className=' max-md:my-20'>
        <div >
          <p className='sectionSubText'>Showcasing My Works</p>
          <h2 className='sectionHeadText'>Projects</h2>
        </div>
        <div className='mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 px-2'>
            {projectsData.map((item, index) => (
              <div key={index} className='rounded-lg p-5 bg-dark-3 border-b-2 border-green-300 border-l-2 '>
                <div className='flex flex-col gap-6'>
                  <div className='mb-2'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className='mx-auto rounded-lg transform transition-transform duration-500 hover:scale-105'
                    />
                  </div>
                  <div className='flex justify-between'>
                    <h2 className='font-bold text-lg'>
                      {item.title}
                    </h2>
                    <div className="flex gap-5">
                      <Link href={item.live} target='blank'>
                      <div className='gradientcol p-1.5 rounded-full w-fit cursor-pointer '>
                        <Eye className='text-dark-1 w-5 h-5' />
                      </div>
                      </Link>
                      <Link href={item.github} target='blank'>
                      <div className='bg-dark-1 p-1.5 rounded-full w-fit cursor-pointer'>
                        <Github className='text-white w-5 h-5' />
                      </div>
                      </Link>
                    </div>

                  </div>

                  <p className='text-font-1'>{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects