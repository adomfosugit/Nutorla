import React from 'react'
import { Herobanner, Product,Sidebar } from '../components/index'
import { client } from '../lib/client'
import { BsTelephoneInbound,BsFillArrowRightCircleFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaRegHandshake } from 'react-icons/fa'
import Link from 'next/link'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({products, bannerData , productshot,productspants,productsjump, productsblouses,productsskirts, productstwopieces,productsdresses,productsblazers} ) => {
  const categories = [
    { name: 'Pants', link: '/categories/' },
    { name: 'Jumpsuits', link: '/categories/' },
    { name: 'Blouses', link: '/categories/' },
    { name: 'Skirts', link: '/categories/' },
    { name: 'Two pieces', link: '/categories/' },
    { name: 'Dresses', link: '/categories/' },
    { name: 'Blazers', link: '/categories/' },
  ];
  const firstCategory = categories[0];
  const secondCategory = categories[1];
  const thirdCategory = categories[2];
  const fourthCategory = categories[3];
  const fifthCategory = categories[4];
  const sixthCategory = categories[5];
  const seventhCategory = categories[6];
  return (
    <div >
      <div className='mt-2'>
  <div className="flex flex-row gap-2">
    <div className="  w-2/12 p-5 h-[300px] shadow-2xl ring-2 half:block hidden   bg-slate-50 rounded-2xl "><Sidebar /></div>
     <div className=" flex-1 items-center w-3/5 h-[500px] mb-10 sm:w-1/2 half: h-[500px]    "><Herobanner herobanner = { bannerData} /></div> 
     <div className=" flex-col w-2/12  half:block hidden half:block hidden  "><div className='flex-col items-center p-5 justify-items-center rounded-xl h-[20%] bg-zinc-900 mb-[10px] '>
      <div className='flex-col p-4'>
        <p className='text-white items-center'><BsTelephoneInbound size={15} /> CALL TO ORDER</p>
        <p className='text-white px-6'>0209063000</p>
        </div>
      
     </div>
     <div className='rounded-xl h-[45%]  p-5 flex-col  bg-blue-200 shadow-2xl '>
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
    
    
      <div className='bg-slate-50 mt-[70px] '>
      <div className='text-white font-semibold text-[25px] justify-center bg-orange-700  '>
        <h2 className='font-sans '>Be the Best of You</h2>
        
      </div>
       <div >
         <div className='products-container mr-3 '>
          {products.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
          </div> 
      {/* Hot Deals  */}
       <div className='bg-slate-50 mb-2 items-center '>
      <div className='bg-zinc-700 flex flex-row justify-between text-white font-semibold text-[20px] '>

        <h2 className='font-sans'>Hot Deals</h2>
        <div>
        <Link  href = '/categories/'><BsFillArrowRightCircleFill size={20} className='m-3'/></Link>
        </div>
      </div>
       <div >
         <div className='products-container mr-3'>
          {productshot.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       {/* Pants  */}
       <div className='bg-slate-50'>
      <div className='bg-orange-600 flex flex-row justify-between text-black font-semibold text-[25px]    '>
        <h2 className='font-sans'>Pants</h2><Link  key={firstCategory.name}
  href={{ pathname: firstCategory.link, query: { category: firstCategory.name } }}><BsFillArrowRightCircleFill size = {20} className='m-3'/></Link>
        
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
      <div className=' bg-orange-500 flex flex-row justify-between text-white font-semibold text-[25px] '>
        <h2 className='font-sans'>Jumpsuits</h2>
        <div><Link key={secondCategory.name}
  href={{ pathname: secondCategory.link, query: { category: secondCategory.name } }}><BsFillArrowRightCircleFill size = {20} className='m-3'/></Link>
  </div>
        
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
      <div className='bg-orange-800 flex flex-row justify-between text-white font-semibold text-[25px]  '>
        <h2 className='font-sans'>Blouses</h2><Link key={thirdCategory.name}
  href={{ pathname: thirdCategory.link, query: { category: thirdCategory.name } }}><BsFillArrowRightCircleFill size = {20} className='m-3'/></Link>
        
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
      <div className='bg-orange-900 flex flex-row justify-between text-white font-semibold text-[25px]   '>
        <h2 className='font-sans'>Skirts</h2><Link key={fourthCategory.name}
  href={{ pathname: fourthCategory.link, query: { category: fourthCategory.name } }}><BsFillArrowRightCircleFill size = {20}  className='m-3'/></Link>
        
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
      <div className='bg-blue-700 flex flex-row justify-between text-white font-semibold text-[25px]   '>
        <h2 className='font-sans'>Two Pieces</h2><Link key={fifthCategory.name}
  href={{ pathname: fifthCategory.link, query: { category: fifthCategory.name } }}><BsFillArrowRightCircleFill size = {20} className='m-3'/></Link>
        
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
      <div className='bg-zinc-900 flex flex-row justify-between text-white font-semibold text-[25px]   '>
        <h2 className='font-sans'>Dresses</h2><Link key={sixthCategory.name}
  href={{ pathname: sixthCategory.link, query: { category: sixthCategory.name } }}><BsFillArrowRightCircleFill size = {20} className='m-3'/></Link>
        
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
      <div className='bg-black flex flex-row justify-between text-white font-semibold text-[25px]   '>
        <h2 className='font-sans'>Blazers</h2><Link key={seventhCategory.name}
  href={{ pathname: seventhCategory.link, query: { category: seventhCategory.name } }}><BsFillArrowRightCircleFill size = {20} className='m-3'/></Link>
        
      </div>
       <div >
         <div className='products-container mr-3'>
          {productsblazers.map((product) => <Product  key =
          {product._id} product = {product}/>)}
          </div>
       </div>
       </div>
       <div className='bg-slate-50'>
      <div className='bg-black flex flex-row justify-between text-white font-semibold text-[25px]   '>
        <h2 className='font-sans'>Customize</h2><Link href= './Customize/'><BsFillArrowRightCircleFill size = {20} className='m-3'/></Link>
        
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
