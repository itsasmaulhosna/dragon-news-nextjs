import Link from 'next/link';
import React from 'react';

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
      </div>

    );
};

export default LeftSidebar;