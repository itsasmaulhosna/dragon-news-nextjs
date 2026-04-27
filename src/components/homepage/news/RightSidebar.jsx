'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import img1 from '@/assets/swimming.png'
import img2 from '@/assets/class.png'
import img3 from '@/assets/playground.png'

const RightSidebar = () => {
    const handleGoogleSignIn=async()=>{
   const data = await authClient.signIn.social({
    provider: "google",
  });

    }
    const handleGitHubSignIn=async()=>{
   const data = await authClient.signIn.social({
    provider: "github",
  });

    }
    return (
        <div>
            <h2 className='text-3xl font-bold'>Login With</h2>
            <div className='flex flex-col gap-4 mt-5'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignIn}><FaGoogle />
Login With Google</button>
            <button className='btn' onClick={handleGitHubSignIn}><FaGithub />Login With GitHub</button>
            </div>
            <div className='bg-gray-300 py-10'>
                <h2 className='font-bold text-2xl p-4'>Q-Zone</h2>
                
<figure>
                    <Image src={img1} alt='left-img' width={400} height={400}/>
                  </figure>

                  <figure>
                    <Image src={img2} alt='left-img' width={400} height={400}/>
                  </figure>
                  <figure>
                    <Image src={img3} alt='left-img' width={400} height={400}/>
                  </figure>
                </div>
                
            </div>

        
    );
};

export default RightSidebar;