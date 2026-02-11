import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
         <header className="py-3 px-4 border-b-2  border-gray-500 flex justify-between items-center flex-wrap">
          <Link href='/' className="text-lg font-semibold" >Dev-Story</Link>

          <nav className='space-x-3'>
            <Link href='/about'>About</Link>
            <Link href='/login'>Login</Link>
            <Link href='/register'>Register</Link>
            <Link href='/tutorials'>Tutorials</Link>
            <Link href='/stories'>Story</Link>
            <Link href='/dashboard'>Dashboard</Link>
            
          </nav>
        </header>
    );
};

export default Header;