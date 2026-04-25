import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>Login With</h2>
            <div className='flex flex-col gap-4 mt-5'>
                <button className='btn border-blue-500 text-blue-500'><FaGoogle />
Login With Google</button>
            <button className='btn'><FaGithub />Login With GitHub</button>
            </div>
        </div>
    );
};

export default RightSidebar;