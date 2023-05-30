import React, { useState} from 'react'
import { client, urlFor} from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
const ProductDetails
 = ({product, products}) => {
    const { image, name, description,price} = product;
    const [index, setIndex] = useState(0);
    const {decQty, incQty, qty, onAdd} = useStateContext();
//image caroussel
  return (
    <div> 
        <div className='product-detail-container'>
            <div>

                <div className='image-container'>
                    <img src= {urlFor(image && image[index])}
                     alt= 'a' className= 'product-detail-image'/>

                </div>
                 <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img  alt= 'a'
                        src= {urlFor(item)}
                        className= {i === index ? 'small-image selected-image':
                        'small-image'
                    }
                        onMouseEnter= {() => setIndex(i)}
                        />
                    ))}


                    </div> 
                   
            </div>
            <div className='product-detail-desc'>
                        <h1>
                            {name}
                        </h1>
                        <h4> Details</h4>
                        <p>{description}</p>
                        <p className='price'> GHC {price}</p>
                        <div className='quantity'>
                            <h3>Quantity :</h3>
                            <p className='quantity-desc flex items-center'>
                                <span className='minus' onClick= {decQty}><AiOutlineMinus />

                                </span>
                                <span className='num' >{qty}

                                </span>
                                <span className='plus' onClick= {incQty}><AiOutlinePlus />

                                </span>
                            </p>

                        </div>
                        <div className='buttons'>
                            <button type = 'button' 
                            className='add-to-cart' onClick= {() => onAdd (product, qty)}>Add to Cart</button>
                            {/* <button type = 'button' 
                            className='buy-now' onClick=''>Buy Now</button>*/}
                        </div>
                    </div>


        </div>
                    {/* <div className='maylike-products-wrapper'>
                        <h2> Recommended Items</h2>
                        <div className='marquee'>
                            <div className='maylike-products-container track'>
                                {products.map ((item) => ((
                                    <Product key = {item._id}
                                    product = {item}/>
                                )))}
                            </div>
                                </div> 

                                </div>*/}





    </div>
  )
}
// include get static paths
// getstatic props is used here
export const getStaticPaths = async () => {
    const query =  `*[_type == "product"] {
     slug {
        current
     }   
    }`
 const products =await client.fetch(query)

 const paths = products.map((product) => ({
    params: {
        slug: product.slug.current
    }
 }))
 return {
    paths,
    fallback: 'blocking'
 }
}
export const getStaticProps = async ({ params: {slug}}) => {
    const query = `*[_type== "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
   
    
   
    return {
      props: {
        products,
        product
       }
      }
    }

export default ProductDetails
