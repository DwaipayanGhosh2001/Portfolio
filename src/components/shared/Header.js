import Link from 'next/link'
import React from 'react'
import Navitems from './Navitems'
import { navLinks } from '@/constants'
import MobileNav from './MobileNav'
import Image from 'next/image'

function Header() {
  return (
    <nav className='text-white fixed top-0 left-0 right-0 z-10 bg-opacity-90 bg-dark-1'>
        <div className='wrapper flex-between py-3 px-4 lg:px-10'>
            <div>
                <Link href={'/'}>
                <Image src="/logo.png" alt="logo" width={45} height={45} className='rounded-full'/>
                </Link> 
            </div>
            <div>
                <div className='hidden md:flex gap-10'>
                    {navLinks.map((item) => {
                        return ( <Navitems key={item.title} title={item.title} href={item.path}/>)
                    })}
                </div>
                <div className='md:hidden'>
                        <MobileNav/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header