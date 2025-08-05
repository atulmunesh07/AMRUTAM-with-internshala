import React from 'react'
import { useState } from 'react';

function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong!');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  };
  return (
    <div>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='font-bold text-3xl text-green-600 mt-5 items-center'>Let,s Connect</h1>
        <p className='items-center justify-center flex '>we're here help you on your wellness journey . Reach out to us for any question  product inquiries , or personalize advice</p>
      </div>

      {/* ===============================connect================== */}
      <div className='max-w-4xl mt-5 mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0'>
        {/* ==========img===== */}
        <div>
          <img src="connect.png" alt="" className='h-100 rounded-2xl' />
        </div>

        {/* ===================form======================== */}
        <div className='   h-auto   border rounded-2xl relative flex flex-col  pb-5 pt-8  p-5 '>

          {/* =========name or number=========== */}
          <div className='flex flex-row items-center justify-between gap-4 '>
            <div className='w-full' >
              <p className='text-green-500 '>Your Name</p>
              <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                type="text" className='outline-none text-white mt-6 border-b-2' placeholder='Enter your Name' />

            </div>
            <div>
              <p className='text-green-500 '> Your Contact Number </p>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="number" className='outline-none text-white mt-6 ' placeholder='Enter your Number' />
              <div className='bg-white border-b-2 w-full'></div>

            </div>
          </div>

          {/* =================email========= */}
          <div className='items-start mt-6'>
            <p className='text-green-500 '> Your Email </p>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email" className='outline-none text-white max-w-full mt-6 ' placeholder='email@123.com' />
            <div className='bg-white border-b-2 w-full'></div>

          </div>

          {/* ========message======== */}
          <div className='items-start mt-6'>
            <p className='text-green-500 '> Message (Optional) </p>
            <input
              name="message"
              value={formData.message}
              onChange={handleChange}
              type="text" className='outline-none text-white max-w-full mt-6 ' placeholder='I want to On-board as a Doctor' />
            <div className='bg-white border-b-2 w-full'></div>

          </div>
          {/* =========button======== */}
          <div>
            <button type="submit" className='py-3 px-5 bg-green-500 rounded-2xl mt-5'>Send Message</button>
          </div>



        </div>
        {/* =============end form=================== */}
      </div>
      {/* ==========================end============ */}
    </div>
  )
}

export default Connect
