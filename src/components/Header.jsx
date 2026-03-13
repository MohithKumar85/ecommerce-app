import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='h-screen w-full mb-4 bg-cover bg-center 
    bg-no-repeat flex items-center overflow-hidden' style={{backgroundImage: 'url("/src/assets/3.jpg")'}} id='Header'>
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20
        lg:px-32 text-dark'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block
        max-w-3xl font-semibold pt-20'>Everything Top, All in One Stop.</h2>
        <div className='space-x-6 mt-16'>
            <a href='#ShopNow'className='border border-blue-800 px-8 py-3 rounded'>Shop Now</a>
            <a href='#ContactUs'className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
        </div>
    </div>
    </div>
  )
}

export default Header
