 "use client"
 import { useState } from 'react';

 export default function OrderForm() {
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
 
   return (
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
   );
 }
 