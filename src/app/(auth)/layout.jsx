import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <div>
           <Navbar></Navbar> 
           {children}
        </div>
    );
};

export default Authlayout;