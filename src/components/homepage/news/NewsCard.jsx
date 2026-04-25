import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const NewsCard = ({news}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    {/* author info */}
    <div className='flex justify-between items-center bg-slate-200 p-4 '>
        <div className='flex items-center gap-3'>
            <Image src={news.author?.img} alt={news.author?.name} height={40} width={40} className='rounded-full'/>
            <div>
                <h2 className='font-semibold'>{news.author?.name}</h2>
                <p className='text-xs'>{news.author?.published_date}</p>
            </div>
        </div>
        <div className='flex justify-between items-center  gap-3'>
            <CiShare2  className='text-xl'/>
<CiBookmark className='text-xl' />

        </div>
    </div>
    <h2 className="card-title">{news.title}</h2>
    
  </div>
  <figure>
    <Image src={news.image_url} alt='news-img' width={300} height={300} className='w-full'/>
  </figure>
  <p className='line-clamp-2'>{news.details}</p>
  <div className='flex items-center gap-3'>
    <div className='flex justify-between items-center  gap-3'>
        <h2 className= "flex items-center gap-3"><FaStar  className='text-yellow-500 text-xl'/>
{news.rating.number}</h2>
        <h2 className= "flex items-center gap-3"><FaEye className=' text-xl' />
{news.total_view}</h2>
    </div>
    <Link href={`/news/${news._id}`}>
    <button className='btn'>See Details</button>
    </Link>
  </div>
</div>
    );
};

export default NewsCard;