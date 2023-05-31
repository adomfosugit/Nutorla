import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import Link from 'next/link';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [customizationSummary, setCustomizationSummary] = useState({
    product: '',
    color: '',
    size: '',
    price: ''
  });

  const { onAdd } = useStateContext();

  // ...existing code...
  const products = [
    {
      name: 'Pants',
      colors: ['Black', 'Blue', 'Gray'],
      sizes: ['6', '8', '10', '12', '14', '16', '18'],
      price : "GHC 70"
      
    },
    {
      name: 'Skirts',
      colors: ['Red', 'Green', 'Yellow'],
      sizes: ['6', '8', '10', '12', '14', '16', '18'],
      price : "GHC 80"
      
    
    },
    {
      name: 'Blazers',
      colors: ['Navy', 'Brown', 'Purple'],
      sizes: ['6', '8', '10', '12', '14', '16', '18'],
      price : "GHC 90"
      
    
    },
  ];

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedColor('');
    setSelectedSize('');
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleCustomize = () => {
    if (selectedProduct && selectedColor && selectedSize) {
      // Find the selected product
      const product = products.find((p) => p.name === selectedProduct);

      // Find the index of the selected color and size
      const colorIndex = product.colors.indexOf(selectedColor);
      const sizeIndex = product.sizes.indexOf(selectedSize);

      // Calculate the price based on the selected color and size
      const price = parseInt(product.price.split(" ")[1]) + colorIndex * 10 + sizeIndex * 5;

      // Customize logic goes here
      console.log(`Customizing ${selectedProduct} in color ${selectedColor} and size ${selectedSize}`);
      console.log(`Price: GHC ${price}`);

      // Display the customization details and price in the summary
      setCustomizationSummary({
        product: selectedProduct,
        color: selectedColor,
        size: selectedSize,
        price: `GHC ${price}`
      });
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedColor && selectedSize) {
      const product = products.find((p) => p.name === selectedProduct);
      const item = {
        name: selectedProduct,
        color: selectedColor,
        size: selectedSize,
        price: customizationSummary.price
      };
      onAdd(item, 1);
      // Reset the selected product, color, and size after adding to cart
      setSelectedProduct(null);
      setSelectedColor('');
      setSelectedSize('');
      setCustomizationSummary({
        product: '',
        color: '',
        size: '',
        price: ''
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Customize Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.name} className="border-2 border-blue-500 bg-slate-50 rounded-md p-4">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <div>
              <h3 className="font-semibold mb-2">Colors:</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelect(color)}
                    style={{ backgroundColor: color }}
                    className={`rounded-full w-8 h-8 ${selectedColor === color ? 'border-2 border-blue-500' : ''}`}
                  >
                    {selectedColor === color && <span className="text-blue-500">&#10003;</span>}
                  </button>
                ))}
              </div>
            </div>
            {selectedProduct === product.name && (
              <div>
                <h3 className="font-semibold mb-2">Sizes:</h3>
                <div className="flex flex-wrap space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-4 py-2 rounded-md ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => handleProductSelect(product.name)}
              className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-md ${
                selectedProduct === product.name ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={selectedProduct === product.name}
            >
              Customize {product.name}
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && selectedColor && selectedSize && (
    <div className="border-2 border-blue-500 bg-slate-50 rounded-md mt-4 p-4">
      <h2 className="text-xl font-bold mb-2">Selected Product:</h2>
      <p className="mb-2">Product: {selectedProduct}</p>
      <p className="mb-2">Color: {selectedColor}</p>
      <p className="mb-2">Size: {selectedSize}</p>
      <p className="mb-2">Price: {customizationSummary.price}</p> 
      {/* Display the price */}
      <button onClick={handleCustomize} className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Generate Price
      </button>
   <button className="px-4 py-2 bg-blue-500 text-white rounded-md" >
    <Link  href= 'https://paystack.com/pay/jhnu7korcv'></Link>
   </button>
    </div>
  )}
    </div>
  );
};

export default Index;
