'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NevLink'
const Header = () => {
    const pathname=usePathname();
    console.log(pathname)
  if(pathname.startsWith('/dashboard')) {
    return <></>
  }
    return (
         <header className="py-3 px-4 border-b-2  border-gray-500 flex justify-between items-center flex-wrap">
          <Link href='/' className="text-lg font-semibold" >Dev-Story</Link>

          <nav className='space-x-3'> 
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/login'>Login</NavLink>
            <NavLink href='/register'>Register</NavLink>
            <NavLink href='/tutorials'>Tutorials</NavLink>
            <NavLink href='/stories'>Story</NavLink>
          
            
          </nav>
        </header>
    );
};

export default Header;