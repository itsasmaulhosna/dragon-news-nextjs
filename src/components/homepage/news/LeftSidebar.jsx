import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import leftImg1 from '@/assets/left-1.png'
import leftImg2 from '@/assets/left-2.png'
import { CiCalendarDate } from "react-icons/ci";

const LeftSidebar = ({categories,activeId}) => {
    return (
        <div>
            
        <h2 className="font-bold text-3xl "> All Categories</h2>
        <ul className="flex flex-col gap-3 mt-5">
          {categories.news_category.map((category) => {
            return (
              <li
                key={category.category_id}
                className={`${activeId===category.category_id && 'bg-slate-100'}  rounded-md text-md font-bold text-center`}
              >
                <Link href={`/category/${category.category_id}`} className='block p-3'>{category.category_name}</Link>
              </li>
            );
          })}
        </ul>
        {/* card */}
        <div className="flex flex-col gap-5 mt-5">
          <div className="card bg-base-100  shadow-sm ">
  <figure>
    <Image src={leftImg1} alt='left-img' width={400} height={400}/>
  </figure>
  <p className='text-xl font-bold p-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
  <div className="card-body">
  <div className="flex items-center justify-between">
    <p className="card-title">Sports</p>
    <span className="flex items-center gap-1 text-sm">
      <CiCalendarDate /> Jan 24, 2022
    </span>
  </div>
</div>
</div>
<div className="card bg-base-100  shadow-sm">
  <figure>
    <Image src={leftImg2} alt='left-img' width={400} height={400}/>
  </figure>
  <p className='text-xl font-bold p-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
  <div className="card-body">
  <div className="flex items-center justify-between">
    <p className="card-title">Sports</p>
    <span className="flex items-center gap-1 text-sm">
      <CiCalendarDate /> Jan 24, 2022
    </span>
  </div>
</div>
</div>
        </div>
      </div>

    );
};

export default LeftSidebar;