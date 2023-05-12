import React from 'react'
import { Herobanner, Product,Sidebar } from '../components/index'
import { client } from '../lib/client'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({products, bannerData} ) => {
  return (
    <div>
      <div>
  <div className="flex flex-row gap-4">
    <div className="  w-2/12 p-5 sm:block hidden bg-slate-50 rounded-2xl "><Sidebar /></div>
     <div className=" flex-1  w-3/5 h-[500px] sm:w-1/2  "><Herobanner herobanner = { bannerData} /></div> 
     <div className=" flex-col w-2/12  sm:block hidden  "><div className='flex-col items-center p-5 justify-items-center rounded-xl h-[45%] bg-slate-50 mb-[10px] '>
      <div>affordable</div>
      <div> quality clothes</div>
      <div> Fastest Delivery</div>
     </div>
     <div className='rounded-xl h-[45%] bg-blue-200  '>flyer </div>
     </div>
  </div>
</div>

      
    
      
      <div className='products-heading'>
        <h2>Best Selling Sneaker</h2>
        <p>Variety of Sneakers</p>
      </div>
       <div className='products-container'>
         
          {products.map((product) => <Product  key =
          {product._id} product = {product}/>)}
       </div>
       
    </div>
  )
}
//create sanity query
export const getServerSideProps = async () => {
 const query = '*[_type== "product" ]';
 const products = await client.fetch(query);

 const bannerquery = '*[_type== "banner" ]';
 const bannerData = await client.fetch(bannerquery);

 return {
   props: {
     products,
     bannerData
    }
   }
}

export default index
