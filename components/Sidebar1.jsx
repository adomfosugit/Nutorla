import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar1 = ({ onClose }) => {
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
    <div className='absolute top-0 left-0 w-full h-full z-10 bg-slate-50'>
      <div className='flex items-center justify-between p-3'>
        <h2 className='font-bold text-lg text-gradient'>Categories</h2>
    
          < AiOutlineClose onClick={onClose} />
    
      </div>
      <div className='py-3'>
        {categories.map((category) => (
          <Link onClick={onClose}
            key={category.name}
            href={{ pathname: category.link, query: { category: category.name } }}
          >
            <p className='px-5 cursor-pointer rounded-xl hover:bg-blue-300'>
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar1;
