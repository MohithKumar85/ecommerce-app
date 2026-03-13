import React, { useEffect } from 'react'
import { assets, shopData } from '../assets/assets'

const Shop = () => {

const [currentIndex, setCurrentIndex] = React.useState(0);
const [cardToShow, setCardToShow] = React.useState(1);

useEffect(() => {
const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
        setCardToShow(shopData.length);
    } else {
        setCardToShow(1);
    }
};
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);

},[])

const nextproject = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % shopData.length);
}

const prevproject = () => {
  setCurrentIndex((prevIndex) => prevIndex === 0 ? shopData.length - 1 : prevIndex - 1);
}


  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20
    lg:px-32 my-20 w-full overflow-hidden' id='Shop'>
    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Shop <span
    className='underline underline-offset-4 decoration-1 under font-light'>Items</span></h1> 
    <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Voluptas, voluptate.</p>
     
      {/* slider buttons */}

      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevproject}
        className='p-3 bg-gray-200 rounded mr-2'aria-label='Previous Item' >
            <img src={assets.backward_Icon} alt="Previous" />
        </button>
        <button onClick={nextproject} 
        className='p-3 bg-gray-200 rounded' aria-label='Next Item'>
            <img src={assets.forward_Icon} alt="Next" />
        </button>
      </div>

    {/* project slider container */}
    <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500
        ease-in-out' style={{transform: `translateX(-${currentIndex * (100 / cardToShow)}%)`}}>
            {shopData.map((project,index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4' >
                    <img src={project.image} alt={project.name} className='w-full h-auto mb-23'/>
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                       <h2 className='text-x1 font-semibold text-gray-800'>
                        {project.name}
                        </h2>
                       <p className='text-gray-500 text-sm'>
                        {project.id} <span> | </span> {project.price}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

    </div>
  )
}

export default Shop