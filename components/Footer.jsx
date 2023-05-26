import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto flex flex-col half:flex-row justify-even items-center text-white">
        <div className="half:w-1/3">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="mt-2 ">
            NUTORLA is an online store dedicated to empowering women with stylish and fashionable clothing. We believe that every woman deserves to feel confident and express her unique style. Our carefully curated collection offers a wide range of trendy and high-quality clothing items that are designed to make you look and feel your best.
          </p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2">
            Address: 123 Street, City, Country
          </p>
          <p className="mt-1">
            Email: info@nutorla.com
          </p>
          <p className="mt-1">
            WhatsApp: 0209063000
          </p>
          <p> Instagram : </p>
        </div>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500 transition-colors duration-300"
          >
            <AiOutlineTwitter className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500 transition-colors duration-300 ml-4"
          >
            <AiFillInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
