import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import SearchInput from './Searchinput';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    
    <div className= {' items-center p-3  rounded-lg flex-col '}>
      <div className='  bg-slate-50 flex items-center justify-between p-3  rounded-lg mb-1'>
      
      <p className='text-gradient'>
        <Link href="/" className='font-bold text-lg '>NUTORLA</Link>
      </p> 
      <div className='invisible md:visible w-max'><SearchInput/></div>
      <div className=' flex'>  
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {/* <Link href='/api/auth/logout'>
        <AiOutlineUser/>
  </Link> */}
      
      <button type="button" className= "cart-icon">
        <AiOutlineUser />
        
        
      </button>
      

      {showCart && <Cart />}
      </div>
      </div>
      <div className='visible md:invisible md:hidden items-center mx-10 drop-shadow'><SearchInput/> </div>
  </div>
  
    
  )
}

export default Navbar