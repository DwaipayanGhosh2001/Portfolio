import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { navLinks } from '@/constants'
import Navitems from './Navitems'

function MobileNav() {
    return (
        <>
            <div className='text-white'>
                <Sheet>
                    <SheetTrigger><Menu className="" /> </SheetTrigger>
                    <SheetContent className="text-white bg-dark-1 bg-opacity-60">
                        <div className='flex flex-col gap-20'>
                            <div>
                                Logo
                            </div>
                            <div className='flex-center flex-col gap-8'>
                                {navLinks.map((item) => {
                                    return (
                                        <SheetClose key={item.title} asChild>
                                            <Navitems  title={item.title} href={item.path} />
                                        </SheetClose>
                                    )
                                })}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>


        </>
    )
}

export default MobileNav