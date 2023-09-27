import React, { useState } from 'react'
// import images1 from '../images/logo.jpg'
export default function Navbar() {

  let [open,setOpen]=useState(false);
  return (
    <div className='w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-black'>
      {/* <img src={images1} alt="logoimg" className="h-8 rounded-xl mx-3"/> */}
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden lg:mb-20'>
    <ion-icon name={open ? 'close' : 'menu'}class={open ? 'text-white' : 'text-white'}></ion-icon>
    </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-white text-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        <li className="md:ml-8 py-1 text-xl md:my-0 cursor-pointer hover:text-gray-400">Stay Connected</li>
        <li className="md:ml-8 py-1 text-xl md:my-0 cursor-pointer hover:text-gray-400 ">Education</li>
        <li className="md:ml-8 py-1 text-xl md:my-0 cursor-pointer hover:text-gray-400 ">Community</li>
        <li className="md:ml-8 py-1 text-xl md:my-0 cursor-pointer hover:text-gray-400">About Us</li>
        <li className="md:ml-8 py-1 text-xl md:my-0 cursor-pointer hover:text-gray-400"><button className='bg-black text-white rounded-xl px-6 py-2 shadow-md'>Sign in</button></li>
      </ul>
    </div>
  </div>
  )
}
