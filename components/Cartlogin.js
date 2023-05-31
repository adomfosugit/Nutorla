/* eslint no-use-before-define: 0 */  // --> OFF
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { usePaystackPayment } from 'react-paystack';




const Cartlogin = () => {
  const cartRef = useRef();
  const { user } = useUser();
  const [showForm, setShowForm] = useState(false);
  
 

const handleClick = () => {
  setShowForm(true);
};
const handleClose = () => {
  setShowForm(false);
}


    const { totalPrice, totalQuantities, cartItems,setShowCart,toggleCartItemQuantity, onRemove} = useStateContext();
    // Local Storage
  
     
    const [shippingDetails, setShippingDetails] = useState({
      Name: '',
      Address: '',
      Phone: '',
      
    });
    const [formValid, setFormValid] = useState(false);
    const handleInputChange = (event) => {
      const { placeholder, value } = event.target;
      setShippingDetails((prevState) => ({
        ...prevState,
        [placeholder]: value,
       
      }));

      //validity of form
      setFormValid(event.target.form.checkValidity());
    };
    //
    
    
    
   
   // Paystack to confirm order
    
  const config = {
    reference: (new Date()).getTime(),
    username: `${user.name}`,
    email: `${user.email}`,
    amount: `${totalPrice * 100}`,
    //publicKey: 'pk_live_7b0117b105694184900ff75ce52987cae7c1b04f',
    publicKey: 'pk_test_1156b935d863b0c6d92a19b3678d034562cf062a',
    currency: 'GHS',
    metadata:{
      "custom_fields":[
        
        {
          display_name:'Cart Items',
          variable_name:'cart_items',
          value: JSON.stringify(cartItems)
        },
        {
          display_name: 'Shipping Details',
          variable_name: 'shipping_details',
          value: JSON.stringify(shippingDetails),
        },
      ]
    }
};
 
// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div className='btn-container'>
          <button  type = 'button' className='btn' onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Submit and Pay</button>
      </div>
    );
};

 
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} alt='pics' className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4> GHC {item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc flex items-center">
                    <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3> GHC {totalPrice}</h3>
            </div>
        <div className='btn-container'>
         <div > 
         <button onClick={handleClick} className='btn' >checkout </button>
         
         { showForm && (
          <form className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg p-6">
  <input type="text" placeholder="Name" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Name} onChange={handleInputChange} required />
  <input type="text" placeholder="Phone" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Phone} onChange={handleInputChange} required />
  <input type="text" placeholder="Address" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Address} onChange={handleInputChange} required />
  {formValid && <PaystackHookExample />}
  <div className="text-right">
    <TiDeleteOutline onClick={handleClose} size={40} className="cursor-pointer" />
  </div>
</form> 

)}

         </div> 
          </div>          
            
          </div>
        )}
      </div>
    </div>
  )
}

export default Cartlogin 