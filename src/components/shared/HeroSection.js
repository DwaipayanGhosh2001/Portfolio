"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'


function HeroSection() {
    return (
        <section className=' wrapper text-white max-md:my-28' id="#">
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-5 items-center justify-center'>
                <div data-aos="fade-down" className='flex flex-col gap-8 lg:col-span-7 place-self-center text-center md:text-left'>
                    <h1 className='text-extrabold text-5xl lg:text-6xl'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            Hello, I'm
                        </span>
                        <br />
                        <div className='mt-4'> {/* Add margin-top to create space */}
                            <TypeAnimation
                                className='font-bold'
                                sequence={[
                                    'Dwaipayan Ghosh',
                                    3000,
                                    'Web Developer',
                                    3000,
                                    'MERN Developer',
                                    3000,
                                ]}
                                wrapper="span"
                                speed={400}
                                repeat={Infinity}
                            />
                        </div>
                    </h1>

                    <p className='max-sm:text-base text-lg text-font-1'>Transforming ideas into digital masterpieces, one line of code at a time.</p>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <Link href={'/#contact'}>
                            <Button size="lg" className="rounded-full  md:px-8 w-80 max-md:mx-auto primary-btn md:w-fit">
                                Hire Me
                            </Button>
                        </Link>

                        <Link href="https://drive.google.com/file/d/1ci8lkCp7AnVHfirc_PqFdl8Ks7VbSYWi/view?usp=sharing" target="_blank">
                            <Button size="lg" className="rounded-full w-80  max-md:mx-auto second-btn md:w-fit">
                                <span className='second-btn-border'>
                                    Download CV
                                </span>
                            </Button>
                        </Link>

                    </div>
                </div>
                <div data-aos="fade-up"  className='lg:col-span-5 '>
                    <div className='flex-center'>
                        <Image src={'/images/profile.png'} alt="profile image"
                            width={350} height={350}
                            className="rounded-full bg-profileback bg-cover"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection