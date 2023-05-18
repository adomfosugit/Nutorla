import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useStateContext } from '../context/StateContext';
const Product = ({product  }) => {
  const { qty, onAdd} = useStateContext();
  return (
    <div className='flex flex-row items-center bg-zinc-200 mb-2 ml-3 rounded-xl shadow-xl sm:flex-col  phone: w-[340px] '>
      <Link href= {`/product/${product.slug.current}`}>
                <div className= "product-card">
                    <img src={urlFor(product.image && product.image[0])} 
                    
                    className='product-image w-[200px] h-[200px] p-3'/>
                    
                </div>
                
        </Link>
                    <div className='flex-col px-3'>
                     <div>
                    <Link   href= {`/product/${product.slug.current}`} >
                        <p className='product-name'>{product.name}</p>
                    </Link>
                    <p className='product-price'>GHC  {product.price}</p>
                    </div>
                        <div className='buttons flex'>
                       
                            <button type = 'button' 
                            className='p-2 text-white bg-blue-700 rounded boder-none mt-4' onClick= {() => onAdd (product, qty)}>Add to cart </button>
                            {/* <button type = 'button' 
                            className='buy-now' onClick=''>Buy Now</button>*/}
                        </div>
                        </div>
    </div>

  )
}

export default Product