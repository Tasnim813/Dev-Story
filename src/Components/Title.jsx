import React from 'react';

const Title = ({children}) => {
    return (
        <div className='text-5xl font-bold bg-linear-60 from-sky-50 to-sky-200 p-3 rounded'>
            {children}
        </div>
    );
};

export default Title;