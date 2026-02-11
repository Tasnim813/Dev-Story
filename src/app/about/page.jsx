import Title from '@/Components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
       <div>
         <Title>Welcome to about page</Title>

         <nav>
            <Link href='/about/contact'>Contact</Link>
            <Link href='/about/teams'>Teams</Link>
         </nav>
       </div>

       
    );
};

export default About;