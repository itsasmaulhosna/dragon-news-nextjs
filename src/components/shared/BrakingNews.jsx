import React from 'react';
import Marquee from 'react-fast-marquee';

const BrakingNews = () => {
    const news = [
  { id: 1, title: "AI is Transforming Web Development" },
  { id: 2, title: "Global Economy Shows Signs of Recovery" },
  { id: 3, title: "New Advances in Space Exploration" },
  { id: 4, title: "Championship Final Ends in Dramatic Victory" },
];

    return (
        <div className='flex justify-between items-center gap-5 bg-gray-200 container mx-auto px-3'>
            <button className='btn bg-pink-700 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n=>{
                      return <span key={n._id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BrakingNews;