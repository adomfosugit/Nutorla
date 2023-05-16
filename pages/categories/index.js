import React from 'react';
import { Product } from '../../components';
import { client } from '../../lib/client';
import Sidebar2 from '../../components/Sidebar2';


const Index = ({ products ,category}) => {
  return (
    <div className='flex flex-col '>
            <div className='invisible half:visible'><Sidebar2/> </div>
        <div className='products-heading bg-blue-700'>
        <h2 className='font-sans font-semibold'>{category}</h2>
      
      </div>
      <div className='products-container'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
 const category = context.query.category || 'Hot deals';

  const catquery = `*[_type == "product" && category == $category]`;
  const products = await client.fetch(catquery, { category });

  return {
    props: {
      products,
      category,
    },
  };
};

export default Index;
