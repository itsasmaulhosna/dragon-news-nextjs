'use client'
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session,isPending } = authClient.useSession()
    const user=session?.user;
console.log(user)
    return (
        <div className='container mx-auto flex justify-between items-center mt-5'>
            <div></div>
            <ul className='flex justify-center gap-5 text-gray-700'>
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/career'}>Career</Navlink></li>
            </ul>
            {isPending? (<span className="loading loading-spinner loading-xl"></span>):
                user? (
                    <div className='flex items-center gap-5'>
                <h2>Hello,{user.name}</h2>
                <Image src={user?.image || userAvater} alt='userAvater' width={60} height={60} className='rounded-full'/>
                <button className='btn bg-purple-400' onClick={async()=>await authClient.signOut()}>Log Out</button>
            </div>
                )
                :
                (
                    <button className='btn bg-purple-500 text-white'>
                    <Link href={'/login'}>Log In</Link>
                </button>
                )
            }
        </div>
    );
};

export default Navbar;