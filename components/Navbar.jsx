import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { TfiMenu } from 'react-icons/tfi';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import SearchInput from './Searchinput';
import Sidebar1 from './Sidebar1';
import Loginmenu from './Loginmenu';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={'items-center p-3 rounded-lg flex-col'}>
      <div className='bg-slate-50 flex items-center justify-between p-3 rounded-lg mb-1'>
        <p className='flex items-center'>
          <TfiMenu className='mx-2 half:hidden' onClick={handleButtonClick} />
          {isOpen && (
            <div className='absolute top-0 left-0 w-full h-full z-10 bg-slate-50'>
              <Sidebar1 onClose={handleClose} />
            </div>
          )}
          <Link href='/' className='font-bold text-lg text-gradient '>
            NUTORLA
          </Link>
        </p>
        <div className='invisible half:visible w-max'>
          <SearchInput />
        </div>
        <div className='flex'>
          <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
          </button>
          {/* <Link href='/api/auth/logout'>
            <AiOutlineUser/>
          </Link> */}

          <button type='button' className='cart-icon'>
            <Loginmenu />
          </button>

          {showCart && <Cart />}
        </div>
      </div>
      <div className='visible half:invisible md:hidden items-center mx-10 drop-shadow'>
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
