 "use client"
import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
    {/* First div - Title centered with bubble background */}
    <div className="bg-yellow-300 text-black py-1">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">%خصم اضافي 10</h1>
      </div>
    </div>

    {/* Second div - Search bar with bubble background */}
    <div className="bg-yellow-300 py-1">
      <div className="container mx-auto">
        <div className="relative ">
          <input
            type="text"
            className="w-full p-2 text-right text-black border-2 border-gray-300  focus:outline-none "
            placeholder="ابحث عن..."
             
          />
          <button className="absolute left-0 px-4 py-2 text-white bg-yellow-800 ">
            بحث
          </button>
        </div>
      </div>
    </div>

    {/* Third div - Navigation links with white background */}
    <div className="bg-slate-200 py-1">
      <div className="flex flex-wrap justify-center space-x-6 space-y-2 md:space-y-0 text-sm text-gray-500">
      <nav className="bg-gray-200 py-1 ">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-6 text-sm ">
          <li>
            <Link href="/shipping-policy" className='text-gray-500 text-xl font-bold text-decoration-none'>
              سياسة الشحن
            </Link>
          </li>
          <li>
            <Link href="/return-policy" className='text-gray-500 text-xl font-bold text-decoration-none'>
              سياسة الاستبدال والاسترجاع
            </Link>
          </li>
          <li>
             <Link href="/sports-products" className='text-gray-500 text-xl font-bold text-decoration-none'>
              منتجات نسائية
            </Link>
          </li>
          <li>
            <Link href="/earphones" className='text-gray-500 text-xl font-bold text-decoration-none '>
             كو تشيات
            </Link>
          </li>
          <li>
          <Link href="/watches" className='text-gray-500 text-xl font-bold text-decoration-none'>
             ساعات
            </Link>
          </li>
          <li>
          <Link href="/orderform" className='text-gray-500 text-xl font-bold text-decoration-none'>
             امثلة لصفحات الهبوط
            </Link>
          </li>
          <li>
          <Link href="/mobileassessories" className='text-gray-500 text-xl font-bold text-decoration-none'>
              اكسسوارات موبايل
            </Link>
          </li>
        </ul>
      </div>
    </nav>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
