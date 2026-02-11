import Link from 'next/link';
import React from 'react';

const NotFound400 = () => {
    return (
        <div className='min-h-screen flex justify-center item-center flex-col gap-5'>
            <h2>404 | your page not found </h2>
            <Link href='/' className='underline'> Back home</Link>
        </div>
    );
};

export default NotFound400;