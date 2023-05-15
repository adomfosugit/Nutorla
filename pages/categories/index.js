import React from 'react';
import { Product } from '../../components';
import { client } from '../../lib/client';


const Index = ({ products ,category}) => {
  return (
    <div>
            
        <div className='products-heading bg-blue-700'>
        <h2 className='font-sans'>{category}</h2>
      
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
