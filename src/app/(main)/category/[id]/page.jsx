
import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNews } from '@/lib/data';
import React from 'react';



const NewsCategory = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories(id);
  const news = await getNews(id);

  return (
    <div className="container mx-auto my-5 grid grid-cols-12 gap-4">
      
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className=" col-span-6">
        <h2 className='font-bold text-3xl'>News by Category</h2>
        <div className="space-y-3">
          {news.length>0 ? news.map(n=>{
            return <NewsCard key={n._id} news={n} >
              
            </NewsCard>
          })
          
            
            
           : <h2 className='text-3xl font-bold text-center'>Page Not Found!!</h2>}
        </div>
      </div>

      <div className="col-span-3">
        <RightSidebar />
      </div>

    </div>
  );
};

export default NewsCategory;