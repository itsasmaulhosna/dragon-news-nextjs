import BrakingNews from '@/components/shared/BrakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <div>
           <Header></Header>
           <BrakingNews></BrakingNews>
        <Navbar></Navbar> 
        {children}
        </div>
    );
};

export default Mainlayout;