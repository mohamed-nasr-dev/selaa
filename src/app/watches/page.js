// components/ProductPage.js
"use client"
import Image from 'next/image';
import { FaHeadphones, FaMicrophone, FaMusic, FaCheck, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import headphonesImage from '/public/6.png'; // تأكد من مسار الصورة
import headphonesImageBlack from '/public/7.png'; // تأكد من مسار الصورة
export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    region: '',
    address: '',
    paymentMethod: 'cod', // Default payment method
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };
  const products = [
    {
      id: 1,
      name: 'سويتشرت فلسطين',
      image: '/26.png', // تأكد من تحديث مسارات الصور
      currentPrice: 349,
      oldPrice: 500,
    },
    {
      id: 2,
      name: 'طقم التقطيع الفولاذ (جديد)',
      image: '/27.png',
      currentPrice: 349,
      oldPrice: 600,
    },
    {
      id: 3,
      name: 'تيشرت البرق (جديد)',
      image: '/28.png',
      currentPrice: 179,
      oldPrice: 229,
    },
    {
      id: 4,
      name: 'خلاط صغير محمول (جديد)',
      image: '/29.png',
      currentPrice: 145,
      oldPrice: 200,
    },
    {
      id: 5,
      name: 'ترينج C10 (جديد)',
      image: '/30.png',
      currentPrice: 199,
      oldPrice: 220,
    },
  ];
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[400px] bg-gray-100 overflow-hidden">
        {/* Background Shape */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-tr from-blue-300 to-blue-500 transform skew-x-12 translate-x-1/4"></div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">أفضل سماعة علي الإطلاق</h1>
            <p className="text-gray-600">اذا كنت تبحث عن سماعة أنيقة وعملية فنقدم لك أفضل سماعة علي الاطلاق</p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-6 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image
                src={headphonesImage}
                alt="Headphones"
                layout="fill"
                objectFit="contain"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-center text-3xl font-semibold text-purple-600 mb-8 ml-16">مميزات المنتج</h2>

        <div className="flex flex-col md:flex-row justify-around text-center mb-12">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FaMusic className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">تجربة استماع للموسيقى رائعة</h3>
            <p className="text-gray-600">استمتع بصوت نقي عالي الجودة بتجربة فريدة في الموسيقى و الألعاب</p>
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FaMicrophone className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">ميكروفون عالي الدقة</h3>
            <p className="text-gray-600">صوت نقي وعزل للضوضاء مناسب للأعمال الاحترافية</p>
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FaHeadphones className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">صوت نقي</h3>
            <p className="text-gray-600">استمتع بصوت محيط قوي بخاصية 7.1 المحيطية</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <Image src={headphonesImageBlack} alt="Headphones" width={300} height={300} />
          </div>

          <div className="md:w-1/2 md:text-right mt-6 md:mt-0">
            <h3 className="text-3xl  ">عن المنتج</h3>
            <h4 className="text-4xl font-semibold  text-gray-800">أفضل سماعة علي الإطلاق</h4>
            <p >ببعض الكلام المهم عن السماعة ووصف يشجع العميل علي الشراء،بعض الكلام المهم عن السماعة ووصف يشجع العميل علي الشراء</p>
            
            <div className="text-gray-800 md:text-right">
              <h4 className="text-lg font-semibold mb-2">مميزات السماعة</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-center justify-end">
                  <span className="ml-2">ميزة رقم واحد</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 border border-green-500 rounded">
                    <FaCheck className="text-green-500 text-sm" />
                  </div>
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">ميزة إضافية</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 border border-green-500 rounded">
                    <FaCheck className="text-green-500 text-sm" />
                  </div>
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">ميزة ثالثة في المنتج</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 border border-green-500 rounded">
                    <FaCheck className="text-green-500 text-sm" />
                  </div>
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">أكثر مميزات أكثر</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 border border-green-500 rounded">
                    <FaCheck className="text-green-500 text-sm" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">احصل علي العرض</h2>
          <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-purple-700 transition">
            اضغط هنا للطلب بخصم %50
          </button>

          {/* Reviews Header */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-2">تقييمات المنتج علي فيسبوك</h3>
            <div className="flex items-center justify-center">
              <span className="flex text-yellow-400 text-xl mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>
              <span className="text-gray-400 text-sm">(بناءً على 430 تقييم)</span>
            </div>
          </div>

          {/* Reviews Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Review Card */}
            <ReviewCard
              name="Ahmed Said"
              avatar="/15.jpg"
              rating={5}
              text="سماعة جميلة جدا شكل انيق جدا علي الرأس وصوت نقي"
              bgColor="bg-green-100"
            />
            <ReviewCard
              name="طارق المغامري"
              avatar="/16.jpg"
              rating={4}
              text="شكرًا على المنتج الرائع وسعر ممتاز."
              bgColor="bg-blue-100"
            />
            <ReviewCard
              name="مينا نادر"
              avatar="/17.jpg"
              rating={3}
              text="السماعة ممتازة في الصوت وأنيقة. ينصح بها بشدة!"
              bgColor="bg-yellow-100"
            />
          </div>
        </div>
      </div>

      {/* Product Checkout Section */}
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <div className="text-center mb-8">
          <div className="border border-blue-500 rounded p-4 inline-block mb-4">
            <Image src={headphonesImage} alt="Headphones" width={150} height={150} />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">صورة المنتج التجريبية</h2>
          <p className="text-sm text-gray-500">تعرف على سماعاتك قبل اتخاذك القرار بالشراء</p>
        </div>

        {/* Product Information */}
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-800">Headphones</h3>
          <p>السعر قبل الخصم300ج.م</p>
          <p>السعر بعد الخصم250ج.م</p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-gray-600 mr-4">الكمية</span>
          <button onClick={decrementQuantity} className="px-3 py-1 border border-gray-300">-</button>
          <span className="mx-3 text-gray-800">{quantity}</span>
          <button onClick={incrementQuantity} className="px-3 py-1 border border-gray-300">+</button>
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
       <form
         onSubmit={handleSubmit}
         className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
       >
         {/* User Information Fields */}
         <h2 className="text-center text-gray-700 text-2xl font-bold mb-6">
           يرجى إدخال معلوماتك لإكمال الطلب
         </h2>
 
         {/* Full Name */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
             اسمك بالكامل
           </label>
           <input
             id="fullName"
             name="fullName"
             type="text"
             value={formData.fullName}
             onChange={handleInputChange}
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             required
           />
         </div>
 
         {/* Phone Number */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
             رقم الهاتف
           </label>
           <input
             id="phone"
             name="phone"
             type="tel"
             value={formData.phone}
             onChange={handleInputChange}
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             required
           />
         </div>
 
         {/* Region */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="region">
             المحافظة
           </label>
           <select
             id="region"
             name="region"
             value={formData.region}
             onChange={handleInputChange}
             className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
             required
           >
             <option value="" disabled>اختر محافظتك</option>
             <option value="cairo">القاهرة</option>
             <option value="alex">الإسكندرية</option>
             <option value="giza">الجيزة</option>
             {/* Add more options as needed */}
           </select>
         </div>
 
         {/* Address */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
             العنوان بالتفصيل
           </label>
           <textarea
             id="address"
             name="address"
             value={formData.address}
             onChange={handleInputChange}
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             rows="3"
             required
           />
         </div>
 
         {/* Payment Methods */}
         <h2 className="text-center text-gray-700 text-2xl font-bold mb-4">
           اختر وسيلة الدفع
         </h2>
 
         <div className="mb-2">
           {/* COD Option */}
           <div className="mb-4 border border-gray-300 rounded p-4">
             <div className="flex items-center justify-between">
               <label className="flex items-center text-gray-700 text-sm font-medium">
                 <input
                   type="radio"
                   name="paymentMethod"
                   value="cod"
                   checked={formData.paymentMethod === 'cod'}
                   onChange={handleInputChange}
                   className="form-radio text-blue-600 mr-2"
                 />
                 دفع عند الاستلام
               </label>
               <span className="text-xs text-gray-500">+10 جنيه رسوم توصيل</span>
             </div>
             <span className="text-gray-600 text-sm">سيتم زيادة 10 جنيه</span>
           </div>
 
           {/* Paypal Option */}
           <div className="mb-4 border border-gray-300 rounded p-4">
             <div className=" justify-between">
               <label className="flex items-center text-gray-700 text-sm font-medium">
                 <input
                   type="radio"
                   name="paymentMethod"
                   value="paypal"
                   checked={formData.paymentMethod === 'paypal'}
                   onChange={handleInputChange}
                   className="form-radio text-blue-600 mr-2"
                 />
                 PayPal
               </label>
               <span className="text-gray-600 text-sm"> ادفع عن طريق باي بال واحصل علي حماية المشتري والدفع الامن</span>
               <img
                 src="/21.png" // Replace with actual logo image
                 alt="PayPal"
                 className="h-8"
               />
             </div>
             
           </div>
 
           {/* My Fatoorah Option */}
           <div className="mb-4 border border-gray-300 rounded p-4">
             <div className=" justify-between">
               <label className="flex items-center text-gray-700 text-sm font-medium">
                 <input
                   type="radio"
                   name="paymentMethod"
                   value="myfatoorah"
                   checked={formData.paymentMethod === 'myfatoorah'}
                   onChange={handleInputChange}
                   className="form-radio text-blue-600 mr-2"
                 />
                 My Fatoorah
               </label>
               <span className="text-gray-600 text-sm">الدفع عن طريق البطاقات الائتمانية</span>
               <img
                 src="/22.png" // Replace with actual logo image
                 alt="My Fatoorah"
                 className="h-8"
               />
             </div>
            
           </div>
 
           {/* Tap Option */}
           <div className="mb-4 border border-gray-300 rounded p-4">
             <div className=" justify-between">
               <label className="flex items-center text-gray-700 text-sm font-medium">
                 <input
                   type="radio"
                   name="paymentMethod"
                   value="tap"
                   checked={formData.paymentMethod === 'tap'}
                   onChange={handleInputChange}
                   className="form-radio text-blue-600 mr-2"
                 />
                 Tap
               </label>
               <span className="text-gray-600 text-sm">الدفع باستخدام البطاقات الائتمانية و تابي ومدي ويور باي</span>
               <img
                 src="/23.png" // Replace with actual logo image
                 alt="Visa"
                 className="h-8"
               />
             </div>
             
           </div>
 
           {/* Stripe Option */}
           <div className="mb-4 border border-gray-300 rounded p-4">
             <div className=" justify-between">
               <label className="flex items-center text-gray-700 text-sm font-medium">
                 <input
                   type="radio"
                   name="paymentMethod"
                   value="stripe"
                   checked={formData.paymentMethod === 'stripe'}
                   onChange={handleInputChange}
                   className="form-radio text-blue-600 mr-2"
                 />
                 خصم 5% عند الدفع ببطاقة بنكية
               </label>
               <span className="text-gray-600 text-sm">Pay with Credit Card like Visa, MasterCard, Amex</span>
               <img
                 src="/24.png" // Replace with actual logo image
                 alt="Stripe"
                 className="h-8"
               />
             </div>
            
           </div>
 
           {/* PayLink Option */}
           <div className="mb-4 border border-gray-300 rounded p-4">
             <div className=" justify-between">
               <label className="flex items-center text-gray-700 text-sm font-medium">
                 <input
                   type="radio"
                   name="paymentMethod"
                   value="paylink"
                   checked={formData.paymentMethod === 'paylink'}
                   onChange={handleInputChange}
                   className="form-radio text-blue-600 mr-2"
                 />
                 PayLink
               </label>
               <span className="text-gray-600 text-sm">الدفع باستخدام البطاقات الائتمانية و تابي ومدي ويور باي</span>
               <img
                 src="/25.png" // Replace with actual logo image
                 alt="PayLink"
                 className="h-8"
               />
             </div>
             
           </div>
         </div>
 
         <div className="flex items-center justify-center">
           <button
             type="submit"
             className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-40 rounded focus:outline-none focus:shadow-outline"
           >
             إتمام الطلب
           </button>
         </div>
       </form>
     </div>

     <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
      <a href="#" className="text-blue-600 hover:underline">المزيد</a>
      <h2 className="text-3xl font-bold text-gray-800">منتجات مشابهة</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="relative w-full h-48 mb-4">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm mb-1">
              <span className="line-through">{product.oldPrice}ج.م</span>
              <span className="text-gray-800 font-bold">{product.currentPrice} ج.م</span>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
    
  );
}

// ReviewCard Component
function ReviewCard({ name, avatar, rating, text, bgColor }) {
  return (
    <div className={`rounded-lg p-4 ${bgColor} text-gray-900`}>
      <div className="flex items-center mb-2">
        <img src={avatar} alt={name} className="w-8 h-8 rounded-full mr-2" />
        <h4 className="font-semibold">{name}</h4>
      </div>
      <div className="flex items-center mb-2 text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p>{text}</p>
    </div>
  );
}
