"use client"

import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
            <div className='col-span-3 border-r-2'>
          <Link href='/' className="text-lg font-semibold" >Dev-Story</Link>
         <div className='flex flex-col mt-10 gap-5'>
            <Link className='py-2 px-8 rounded bg-gray-500' href={'/dashboard/add-story'}>Add-story</Link>
            <Link className='py-2 px-8 rounded bg-gray-500' href={'/dashboard/my-profile'}>My-Profile</Link>
            <Link className='py-2 px-8 rounded bg-gray-500' href={'/dashboard/setting'}>setting</Link>
         </div>
            </div>
            <div className='col-span-9'>
                {children}

            </div>
        </div>
    );
};

export default DashboardLayout;