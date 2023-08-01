import React from 'react'

import Contact from '../../../components/contact';

const ContactPage = () => {
  return (
    <div>
      <div className='flex h-screen items-center justify-center bg-purple-50'>
        <div className='bg-purple-50 flex flex-col w-[80%] h-[70%] text-black rounded-xl justify-center'>
          <h1 className='text-center text-4xl'> For all Your Jewellery Needs</h1>
          <p className='text-center mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Posuere urna nec tincidunt praesent semper feugiat. Mus mauris vitae ultricies leo integer malesuada nunc vel. Placerat in </p>
          <div className="w-full text-center mt-10"><span className="text-black font-bold">You can reach us anytime via</span><span className="text-black font-bold"> </span><span className="text-amber-300 text-xl font-bold leading-[30px]">silvana@silvanajewellery.com<br/></span><span className="text-black font-bold">or fill out this form below and we’ll get back to you ASAP</span></div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default ContactPage
