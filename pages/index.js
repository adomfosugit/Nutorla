import React from 'react'
import { Herobanner, Product,Sidebar } from '../components/index'
import { client } from '../lib/client'
import { BsTelephoneInbound } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaRegHandshake } from 'react-icons/fa'
import Link from 'next/link'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({products, bannerData , productshot,productspants,productsjump, productsblouses,productsskirts, productstwopieces,productsdresses,productsblazers} ) => {
  return (
    <div >
      <div className='mt-2'>
  <div className="flex flex-row gap-2">
    <div className="  w-2/12 p-5 h-[300px] shadow-2xl  half:block hidden bg-slate-50 rounded-2xl "><Sidebar /></div>
     <div className=" flex-1  items-center w-3/5 h-[500px] mb-5 sm:w-1/2 phone: h-[380px]    "><Herobanner herobanner = { bannerData} /></div> 
     <div className=" flex-col w-2/12  half:block hidden half: block hidden "><div className='flex-col items-center p-5 justify-items-center rounded-xl h-[20%] bg-zinc-900 mb-[10px] '>
      <div className='flex-col p-4'>
        <p className='text-white items-center'><BsTelephoneInbound size={15} /> CALL TO ORDER</p>
        <p className='text-white px-6'>0209063000</p>
        </div>
      
     </div>
     <div className='rounded-xl h-[45%]  p-5 flex-col  '>
      <div className='justify-even'><TbTruckDelivery size={60} />
      <p className='font-semibold text-[20px]'>FAST DELIVERY</p></div>
      <div>
      <div className='justify-even'><FaRegHandshake size={60} />
      <p className='font-semibold text-[20px] mb-2'>QUALITY PRODUCTS</p></div>
      </div>
     </div>
     </div>
  </div>
</div>
    
    
      <div className='bg-slate-50 mt-[50px] '>
      <div className='products-heading bg-blue-700  '>
        <h2 className='font-sans'>Be the Best of You</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {products.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
          </div> 
      {/* Hot Deals  */}
       <div className='bg-slate-50 mb-2'>
      <div className='products-heading bg-blue-700'>
        <h2 className='font-sans'>Hot Deals</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productshot.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       {/* Pants  */}
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700   '>
        <h2 className='font-sans'>Pants</h2> 
        
      </div>
       <div >
         <div className='products-container mr-3'>
          {productspants.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       {/* demo 2 */}
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700  '>
        <h2 className='font-sans'>Jumpsuits</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productsjump.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       {/* demo 3 */}
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700  '>
        <h2 className='font-sans'>Blouses</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productsblouses.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       {/*  demo 4*/}
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700  '>
        <h2 className='font-sans'>Skirts</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productsskirts.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       {/* demo 5*/}
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700  '>
        <h2 className='font-sans'>Two Pieces</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productstwopieces.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       {/*demo 6 */}
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700  '>
        <h2 className='font-sans'>Dresses</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productsdresses.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       {/* demo 7 */}
       <div className='bg-slate-50'>
      <div className='products-heading bg-blue-700  '>
        <h2 className='font-sans'>Blazers</h2>
        <p></p>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productsblazers.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       
       </div>
       
    </div>
  )
}
//create sanity query
export const getServerSideProps = async () => {
 const query = '*[_type== "product" ][0..11]';
 const products = await client.fetch(query);
 const queryhot = '*[_type== "product" && category == "Hot Deals" ]';
 const productshot = await client.fetch(queryhot);
 const querypants = '*[_type== "product" && category == "Pants" ][0..5]';
 const productspants = await client.fetch(querypants);
 const queryjump = '*[_type== "product" && category == "Jumpsuits" ][0..5]';
 const productsjump = await client.fetch(queryjump);
 const queryblouses = '*[_type== "product" && category == "Blouses" ][0..5]';
 const productsblouses = await client.fetch(queryblouses);
 const queryskirts = '*[_type== "product" && category == "Skirts" ][0..5]';
 const productsskirts = await client.fetch(queryskirts);
 const querytwopieces = '*[_type== "product" && category == "Two Pieces" ][0..5]';
 const productstwopieces = await client.fetch(querytwopieces);
 const querydresses = '*[_type== "product" && category == " Dresses" ][0..5]';
 const productsdresses = await client.fetch(querydresses);
 const queryblazers = '*[_type== "product" && category == " Blazers " ][0..5]';
 const productsblazers = await client.fetch(queryblazers);
 const bannerquery = '*[_type== "banner" ]';
 const bannerData = await client.fetch(bannerquery);

 return {
   props: {
     products,
     bannerData,
     productshot,
     productspants,
     productsjump,
     productsblouses,
     productsskirts,
     productstwopieces,
     productsdresses,
     productsblazers,
    }
   }
}

export default index
