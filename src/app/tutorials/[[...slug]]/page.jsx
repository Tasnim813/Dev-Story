

import Title from '@/Components/Title';
import React from 'react';

const TutorialPage = async({params}) => {
    // const {technology,topic,page_no,subject }= await params;
    const {slug}=await params;
    const [technology,topic,page_no,subject ]=slug || [];
   
    return (
        <div>
            <Title>{technology} Tutorials</Title>
            <h2>{topic}</h2> <hr />
            <div className='flex justify-between'>
                <h3 className='font-bold'>{subject}</h3>
                <p>page no:{page_no}</p>
            </div>
            this is tutorial
        </div>
    );
};

export default TutorialPage;