"use client";
import { useState } from "react";
import Image from "next/image";
import headphonesImage from '/public/6.png'; // تأكد من مسار الصورة
export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const productss = [
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
  const products = [
    {
      id: 1,
      image: '/31.png', // تأكد من تحديث مسارات الصور
      
    },
    {
      id: 2,
      image: '/32.png',
      
    },
  ];
  const items = [
    {
      title: "حافظ علي نفسك من الامراض",
      content:
        "ماكينة شخصية ليك تقدر تاخدها معاك للحلاق عشان تضمن نضافة الماكينة و تتجنب عدوى الأمراض",
    },
    {
      title: "خفه مع مثانه",
      content:
        "خفيفة و صغيرة تقدر تسافر بيها من غير ما تاخد مكان في الشنطة",
    },
    {
      title: "بطارية عالية السعة",
      content: "تقدر تستخدمها 300 دقيقة بعد ما تشحنها بشكل كامل",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
    paymentMethod: 'cod',
    coupon: '',
  });
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(250); // اجمالي الطلب الأساسي
  const originalTotal = 250;
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
  const applyCoupon = () => {
    // مثال على التحقق من الكوبون
    if (formData.coupon === 'DISCOUNT10') {
      setDiscount(10); // خصم 10٪
      setTotal(originalTotal * 0.9);
    } else if (formData.coupon === 'DISCOUNT20') {
      setDiscount(20); // خصم 20٪
      setTotal(originalTotal * 0.8);
    } else {
      setDiscount(0);
      setTotal(originalTotal);
      alert('كود الكوبون غير صالح');
    }
  };
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-6 w-6 ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto p-8">
        {/* Main Product Section */}
        <div className="bg-black p-8 rounded-lg text-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/11.png" // Replace with your image file
              alt="Shaver"
              width={350}
              height={350}
              className="rounded-md mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">
              ماكينة الحلاقة الأكثر طلباً
            </h1>
            <p className="text-lg text-gray-400">
              ماكينة حلاقة لشعر الفرعون الأقوى ومتوفرة بخصم حصري حتى نفاذ
              الكمية
            </p>
          </div>

          {/* Feature Cards */}
          <div className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8">
              <h1 className="text-center text-3xl font-bold text-white-400 mb-8 shadow-sm shadow-white">
                مميزات ماكينة الحلاقة
              </h1>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-black p-6 rounded-lg border border-white text-center">
                  <Image
                    src="/13.jpg" // Replace with your image file path
                    alt="خامات عالية الجودة"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-white">
                    خامات عالية الجودة
                  </h3>
                  <p className="text-gray-400 mt-2">
                    انسي انك تشتري ماكينة حلاقة تاني بعد المكنة دي بسبب جودة
                    الخامات
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-black p-6 rounded-lg border border-white text-center">
                  <Image
                    src="/11.png" // Replace with your image file path
                    alt="تعدد الشفرات"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-white">تعدد الشفرات</h3>
                  <p className="text-gray-400 mt-2">
                    معاك 3 أمشاط بمقاسات مختلفة هيسهل عليك تدريج شعرك زي ما
                    تحب
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-black p-6 rounded-lg border border-white text-center">
                  <Image
                    src="/12.png" // Replace with your image file path
                    alt="سرعة الشحن"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-white">
                    سرعة الشحن وبطارية قوية
                  </h3>
                  <p className="text-gray-400 mt-2">
                    بتتشحن بسرعة جدا في ساعتين ونص بس
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-white-400">
                  باقي 24 ساعة فقط على انتهاء الخصم
                </p>
                <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  %اضغط هنا للطلب بخصم 50
                </button>
              </div>

              {/* Accordion Section */}
              <div className="rounded-lg shadow-lg mt-10">
                <h2 className="text-center text-white text-2xl mb-6">
                  تعرف أكثر علي مميزات الماكينة
                </h2>
                {items.map((item, index) => (
                  <div key={index} className="border-b border-gray-700">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full px-4 py-3 text-right text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
                    >
                      <div className="flex justify-between items-center">
                        <span>{item.title}</span>
                        <span>{openIndex === index ? "-" : "+"}</span>
                      </div>
                    </button>
                    {openIndex === index && (
                      <div className="px-4 py-3 bg-gray-900 text-gray-300">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Product Reviews Section */}
              <div className="mt-10">
                <h2 className="text-center text-white text-2xl mb-2">
                  تقييمات المنتج على فيسبوك
                </h2>
                {/* Add the 5-star rating */}
                <div className="flex justify-center items-center mb-4">
                  <p className="text-gray-400 mr-2">(بناء على 430 تقييم)</p>
                  {renderStars(5)} {/* 5 stars always displayed */}
                </div>

                <div className="grid md:grid-cols-3 gap-8 ">
                  {/* Review 1 */}
                  <div className="bg-black p-6 rounded-lg border border-white bg-white">
                    <div className="flex items-center mb-3">
                      <Image
                        src="/16.jpg" // Replace with your image file path
                        alt="Ahmed said"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <h5 className="font-bold text-dark ml-3">Ahmed said</h5>
                    </div>
                    <p className="text-dark mb-3">مساعدة جيدة جدا خلال التوصيل</p>
                    {renderStars(5)}
                  </div>

                  {/* Review 2 */}
                  <div className="bg-black p-6 rounded-lg border border-white bg-white">
                    <div className="flex items-center mb-3">
                      <Image
                        src="/15.jpg" // Replace with your image file path
                        alt="طارق المغامري"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <h5 className="font-bold text-dark ml-3">طارق المغامري</h5>
                    </div>
                    <p className="text-dark mb-3">
                      جهاز رائع سهل الاستخدام وخدمة ممتازة
                    </p>
                    {renderStars(4)}
                  </div>

                  {/* Review 3 */}
                  <div className="bg-black p-6 rounded-lg border border-white bg-white">
                    <div className="flex items-center mb-3">
                      <Image
                        src="/16.jpg" // Replace with your image file path
                        alt="فريد محمود"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <h5 className="font-bold text-dark ml-3">فريد محمود</h5>
                    </div>
                    <p className="text-dark mb-3">جودة ممتازة وسعر مناسب</p>
                    {renderStars(5)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-black p-8 mt-8 rounded-lg">
            <h2 className="text-center text-3xl font-bold text-white-400 mb-4">
              ليه تتعامل معانا؟
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black p-6 rounded-lg  text-center">
                <Image
                  src="/20.png" // Replace with your image file path
                  alt="تقييمات العملاء "
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-white">لينا مقر تثق فيه </h3>
                <p className="text-gray-400 mt-2">
                تقدر تشرفنا في فرعنا في النزهة الجديدة 25 عمر مكرم                </p>
              </div>
              <div className="bg-black p-6 rounded-lg text-center">
                <Image
                  src="/19.png" // Replace with your image file path
                  alt="ادفع عند الاستلام "
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-white">ادفع عند الاستلام</h3>
                <p className="text-gray-400 mt-2">
                مش هتدفع حاجة غير لما تستلم المنتج وتعاينه
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg  text-center">
                <Image
                  src="/18.png" // Replace with your image file path
                  alt=" لينا مقر تثق فيه"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-white">تقييمات العملاء</h3>
                <p className="text-gray-400 mt-2">
                اكثر من 10 الف عميل يثق في متجرنا وبيتعامل معانا باستمرار

                </p>
              </div>
            </div>
          </div>
        </div>
      

      </div>
      <div className="container mx-auto px-4 py-8">

      
      <div className="flex flex-col items-center">
        {products.map((product, index) => (
          <div key={product.id} className="w-full max-w-3xl"> {/* زيادة العرض ليكون أكبر */}
            <div className={`relative w-full ${index === 0 ? 'h-[500px]' : 'h-[500px]'} -mb-1`}> {/* إزالة المسافة بين الصور */}
              <Image 
                src={product.image} 
                alt={product.label} 
                layout="fill" 
                objectFit={product.fit} // استخدام `object-fit` بناءً على نوع الصورة
                className="rounded-lg" 
              />
            </div>
            <p className="text-center text-gray-700 font-semibold mt-2">{product.label}</p>
            
          </div>
          
        ))}
        
      </div>
      
   </div>


   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
{/* Product Checkout Section */}
<div className="container mx-auto px-4 py-8 max-w-lg">
        <div className="text-center mb-8">
          <div className="border border-blue-500 rounded p-4 inline-block mb-4">
            <Image src={headphonesImage} alt="Headphones" width={150} height={150} />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">صورة المنتج التجريبية</h2>
          <p className="text-sm text-gray-500">تعرف على سماعاتك قبل اتخاذك القرار بالشراء</p>
        </div>
        </div>
        {/* Product Information */}
        <div className="text-center text-dark mb-6">
          <h3 className="text-3xl font-bold text-gray-800">Headphones</h3>
          <p>السعر قبل الخصم300ج.م</p>
          <p>السعر بعد الخصم250ج.م</p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center text-dark justify-center mb-6">
          <span className="text-gray-600 mr-4">الكمية</span>
          <button onClick={decrementQuantity} className="px-3 py-1 border border-gray-300">-</button>
          <span className="mx-3 text-gray-800">{quantity}</span>
          <button onClick={incrementQuantity} className="px-3 py-1 border border-gray-300">+</button>
        </div>
    
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
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coupon">
            لديك كوبون؟
          </label>
          <div className="flex">
            <input
              id="coupon"
              name="coupon"
              type="text"
              value={formData.coupon}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="ادخل كود الكوبون"
            />
            <button
              type="button"
              onClick={applyCoupon}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
            >
              تطبيق
            </button>
          </div>
        </div>

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
         <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-gray-700">
            الإجمالي: <span className="text-2xl font-bold text-gray-800">{total} ج.م</span>
          </p>
          {discount > 0 && (
            <p className="text-sm text-green-600">تم تطبيق خصم {discount}%</p>
          )}
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
       <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
      <a href="#" className="text-blue-600 hover:underline">المزيد</a>
      <h2 className="text-3xl font-bold text-gray-800">منتجات مشابهة</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {productss.map((product) => (
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
