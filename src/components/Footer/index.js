import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6 mt-10">
      <div className="container mx-auto  items-center justify-between text-center space-y-4 md:flex-row md:space-y-8">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 space-y-2 md:space-y-0 text-sm text-gray-500">
          
          <a href="#" className="hover:underline text-lg text-gray-500 text-decoration-none">سياسة الشحن</a>
          <a href="#" className="hover:underline text-lg  text-gray-500 text-decoration-none">سياسة الاستبدال والاسترجاع</a>
          <a href="#" className="hover:underline text-lg text-gray-500 text-decoration-none">شروط الاستخدام</a>
          <a href="#" className="hover:underline text-lg text-gray-500 text-decoration-none">سياسات الخصوصية</a>
        </div>

        {/* Footer Copyright */}
        <div className="text-lg text-gray-500">
          © 2024. جميع الحقوق محفوظة. <span className="font-semibold">demo</span>
        </div>
      </div>

      {/* Footer Power */}
      <div className="mt-4 text-center text-lg text-gray-500">
        Powered By <a href="#" className="text-green-500 font-semibold hover:underline">easyorders</a>
      </div>
    </footer>
    );
}

export default Footer;
