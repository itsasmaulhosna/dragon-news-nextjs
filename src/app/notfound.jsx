import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-4xl text-red-500 font-bold'>This page is not found</h2>
            <Link href={'/'}>
            <button className='btn'>Back to home</button>
            </Link>
        </div>
    );
};

export default notfound;