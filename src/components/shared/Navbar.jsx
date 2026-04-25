import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center mt-5'>
            <div></div>
            <ul className='flex justify-center gap-5 text-gray-700'>
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/career'}>Career</Navlink></li>
            </ul>
            <div className='flex items-center gap-5'>
                <Image src={user} alt='userAvater' width={60} height={60}/>
                <button className='btn bg-purple-500 text-white'>
                    <Link href={'/login'}>Log In</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;