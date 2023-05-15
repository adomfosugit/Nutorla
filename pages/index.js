import React from 'react'
import { Herobanner, Product,Sidebar } from '../components/index'
import { client } from '../lib/client'
import { BsTelephoneInbound } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaRegHandshake } from 'react-icons/fa'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({products, bannerData , productshot} ) => {
  return (
    <div>
      <div>
  <div className="flex flex-row gap-4">
    <div className="  w-2/12 p-5 h-[300px] half:block hidden bg-slate-50 rounded-2xl "><Sidebar /></div>
     <div className=" flex-1  w-3/5 h-[500px] sm:w-1/2  "><Herobanner herobanner = { bannerData} /></div> 
     <div className=" flex-col w-2/12  half:block hidden half: block hidden "><div className='flex-col items-center p-5 justify-items-center rounded-xl h-[20%] bg-zinc-900 mb-[10px] '>
      <div className='flex-col p-4'>
        <p className='text-white items-center'><BsTelephoneInbound size={15} /> CALL TO ORDER</p>
        <p className='text-white px-6'>0209063000</p>
        </div>
      
     </div>
     <div className='rounded-xl h-[45%] bg-blue-200 p-5 flex-col '>
      <div className='justify-even'><TbTruckDelivery size={60} />
      <p className='font-semibold text-[20px]'>FAST DELIVERY</p></div>
      <div>
      <div className='justify-even'><FaRegHandshake size={60} />
      <p className='font-semibold text-[20px]'>QUALITY PRODUCTS</p></div>
      </div>
     </div>
     </div>
  </div>
</div>
    
      <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700 '>
        <h2 className='font-sans'>Flash Sale</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container'>
          {products.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700'>
        <h2 className='font-sans'>Hot Deals</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container '>
          {productshot.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
    </div>
  )
}
//create sanity query
export const getServerSideProps = async () => {
 const query = '*[_type== "product" ]';
 const products = await client.fetch(query);
 const queryhot = '*[_type== "product" && category == "Hot Deals" ]';
 const productshot = await client.fetch(queryhot);

 const bannerquery = '*[_type== "banner" ]';
 const bannerData = await client.fetch(bannerquery);

 return {
   props: {
     products,
     bannerData,
     productshot
    }
   }
}

export default index
