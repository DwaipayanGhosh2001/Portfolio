
import Link from 'next/link'
import React from 'react'

function Navitems({title, href}) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE]  p-1 hover:text-white hover:border-b max-md:px-20"
    >
      {title}
    </Link>
  )
}

export default Navitems