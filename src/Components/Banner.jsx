"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router=useRouter();
    const handleBtn=()=>{
    const password=prompt('Enter your password')
    if(password=='1234'){
       
        router.push('/dashboard')

    }

    }
    return (
        <div className='space-y-5'>
            <h1 className='text-4xl font-bold'>Welcome to our Dev-Story</h1>
            <button onClick={handleBtn} className="px-4 py-2 rounded bg-sky-500 text-white text-2xl cursor-pointer hover:bg-black duration-200 ">Share-story</button>
        </div>
    );
};

export default Banner;