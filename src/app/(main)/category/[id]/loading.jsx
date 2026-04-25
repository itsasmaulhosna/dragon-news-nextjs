import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='flex h-[85vh] items-center justify-center'>
            Category by..
            <span className="loading loading-spinner loading-xl"></span>

        </div>
        </div>
    );
};

export default Loading ;