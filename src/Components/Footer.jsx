import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-1 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/*Logo*/}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">ShopSphere</h2>
          <p className="text-gray-400 text-sm">Your trusted e-commerce platform</p>
        </div>

        {/*Social Media Links*/}
        <div className=" flex gap-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/*quick links*/}
        <div className="flex flex-col mt-2 text-center md:text-left">
          <a href="/about" className="hover:underline mb-2">About Us</a>
          <a href="/contact" className="hover:underline mb-2">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} @ShopSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
