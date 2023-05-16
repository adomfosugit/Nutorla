import Link from 'next/link';
import React from 'react';

const Sidebar2 = () => {
  const categories = [
    { name: 'Active Wear', link: '/categories/' },
    { name: 'Blazers & Suites', link: '/categories/' },
    { name: 'African Prints', link: '/categories/' },
    { name: 'Coats & Jackets', link: '/categories/' },
    { name: 'Jeans & Denim', link: '/categories/' },
    { name: 'Sweaters', link: '/categories/' },
    { name: 'Skirts', link: '/categories/' },
    { name: 'Hot Deals', link: '/categories/' },
  ];

  return (
    <div className='items-centers'>
      <p className='font-semibold px-5'>Categories</p>
        <div className='flex flex-wrap half:block-hiddne'>
      {categories.map((category) => (
        <Link key={category.name} href={{ pathname: category.link, query: { category: category.name } }}>
          <p className='px-5 cursor-pointer rounded-xl hover:bg-blue-300'>{category.name}</p>
        </Link>
       
      ))}
       </div>
    </div>
  );
};

export default Sidebar2;
