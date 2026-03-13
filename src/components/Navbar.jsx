import React, {useState} from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <React.Fragment>
            <div className='absolute top-0 left-0 w-full z-10'>
                <div className='container mx-auto flex justify-between items-center py-4 
                px-6 md:px-20 lg:px-32 bg-transparent'>
                    <div className='bg-transparent'>
                        <img src={assets.Logo} alt="logo" className='mix-blend-darken h-25' />
                    </div>
                    <ul className='hidden md:flex gap-7 text-black'>
                        <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
                        <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
                        <li><a href="#Shop" className='cursor-pointer hover:text-gray-400'>Shop</a></li>
                        <li><a href="#More" className='cursor-pointer hover:text-gray-400'>More</a></li>
                    </ul>
                    <div className='flex items-center gap-4'>
                        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign In</button>
                        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_Icon} className='md:hidden w-12 h-12 mb-5 ml-50 cursor-pointer' alt='menu'/>
                    </div>
                </div>
                {/* -------------------Mobile Menu------------------- */}
                <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} w-full right-0 top-0 bottom-0 overflow-hidden bg-white
                transition-all`}>
                    <div className='flex justify-end p-6 cursor-pointer'>
                        <img onClick={() => setShowMobileMenu(false)} src={assets.close_Icon} className='w-6' alt="Close" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <a onClick={() => setShowMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
                        <a onClick={() => setShowMobileMenu(false)} href='#Shop' className='px-4 py-2 rounded-full inline-block'>Shop</a>
                        <a onClick={() => setShowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
                        <a onClick={() => setShowMobileMenu(false)} href='#Contact' className='px-4 py-2 rounded-full inline-block'>Contact</a>

                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar